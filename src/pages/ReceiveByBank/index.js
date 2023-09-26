import React, {Fragment, useContext, useMemo, useState} from "react";
import css from './index.module.css'
import BackButton from "../../components/BackButton";
import Balance from "../../components/Balance";
import SenderStep from "../DealForm/steps/SenderStep";
import {currenciesList, getPaymentMethods, getOptionLabel} from "../../helper";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Context} from "../../context";

const ReceiveByBank = () => {
    const [deal, setDeal] = useState({
        senderBank: null,
        senderCurrency: null,
        isSbp: false,
        transferAmount: ''
    });

    const { state } = useContext(Context);
    const {exchangeRate} = state

    const isDealValid = () => {
        return deal.senderBank && deal.senderCurrency && deal.sum;
    }

    const getUsdValue = () => {
        const value = deal.transferAmount / exchangeRate

        return value.toFixed(2)
    }

    const onChangeDeal = (field, value) => {
        setDeal({
            ...deal,
            [field]: value
        })
    }

    const handleChangeSum = (e) => {
        const regex = /^[0-9\b]+$/;

        if (e.target.value === "" || regex.test(e.target.value)) {
            onChangeDeal('sum', e.target.value);
        }
    }

    return (
        <Fragment>
            <Balance/>
            <div className={css.wrapper}>
                <div className={css.title}>Пополнить</div>
                <SenderStep
                    className={css.senderData}
                    deal={deal}
                    currenciesList={currenciesList}
                    getOptionLabel={getOptionLabel}
                    onChangeDeal={onChangeDeal}
                    paymentMethods={getPaymentMethods()}
                />
                <TextField
                    className={css.sumInput}
                    label="Введите сумму"
                    variant="outlined"
                    value={deal.sum}
                    InputProps={
                        {
                            style: {
                                borderRadius: "25px",
                            }
                        }
                    }
                    onChange={handleChangeSum}
                />
                {  deal.senderCurrency && deal.transferAmount &&
                    <Fragment>
                        <div className={css.exchangeRate}>курс {exchangeRate} RUB/USDT</div>
                        <div className={css.resultSum}>~{getUsdValue()}$</div>
                    </Fragment>
                }
                {   isDealValid() &&
                        <Button size={"large"} variant="contained" sx={{ borderRadius: 25, marginTop: '20px', padding: '15px 20px' }}>Пополнить</Button>
                }
            </div>
            <BackButton route={'/receive'} title={'Назад'}/>
        </Fragment>
    )
};

export default ReceiveByBank