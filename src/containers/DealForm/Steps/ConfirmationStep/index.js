import React from 'react'
import css from './index.module.css'
import classnames from "classnames";

const Confirmation = ({priceOptions}) => {

    const {sendCurrency, receiveCurrency} = priceOptions;

    const sendAmount = priceOptions.sendAmount.toFixed(2);
    const receiveAmount = priceOptions.receiveAmount.toFixed(2);
    const commisionPercent = priceOptions.commisionRate * 100;
    const commisionSum = (sendAmount * priceOptions.commisionRate).toFixed(2)

    const getExchangeRate = () => {
        const isInvertedExchangeRate = priceOptions.clientExchangeRate < 1

        const clientExchangeRate = isInvertedExchangeRate ? 1 / priceOptions.clientExchangeRate : priceOptions.clientExchangeRate;

        if (isInvertedExchangeRate) {
            return `${sendCurrency} 1 = ${receiveCurrency} ${clientExchangeRate.toFixed(2)}`
        }

       return `${receiveCurrency} 1 = ${sendCurrency} ${clientExchangeRate.toFixed(2)}`
    }

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <div className={css.priceWrapper}>
                    <div className={css.priceItem}>
                        <div className={css.priceItemLabel}>Вы отправляете</div>
                        <div className={css.priceItemValue}>{sendCurrency} {sendAmount}</div>
                    </div>
                    <div className={css.priceItem}>
                        <div className={css.priceItemLabel}>Получатель получит</div>
                        <div className={css.priceItemValue}>{receiveCurrency} {receiveAmount}</div>
                    </div>
                    <div className={css.priceItem}>
                        <div className={css.priceItemLabel}>Комиссия</div>
                        <div className={css.priceItemValue}>{commisionPercent}% ({commisionSum} {sendCurrency})</div>
                    </div>
                    <div className={css.priceItem}>
                        <div className={css.priceItemLabel}>Курс</div>
                        <div className={css.priceItemValue}>{getExchangeRate()}</div>
                    </div>
                    <div className={classnames(css.priceItem, css.priceItemResult)}>
                        <div className={css.priceItemLabel}>К списанию</div>
                        <div className={css.priceItemValue}>{sendCurrency} {sendAmount}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmation