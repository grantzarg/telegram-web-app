import React, {Fragment, useMemo, useState} from "react";
import css from './index.module.css'
import BackButton from "../../components/BackButton";
import Balance from "../../components/Balance";
import SenderStep from "../DealForm/steps/SenderStep";
import {CURRENCIES} from "../../helper";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const ReceiveByBank = () => {
    const [deal, setDeal] = useState({
        sender_bank: null,
        sender_currency: null,
        is_sbp: false,
        sum: ''
    });

    const getUsdValue = () => {
        const value = deal.sum / 98.21

        return value.toFixed(2)
    }

    const currenciesList = useMemo(() => {
        return CURRENCIES.map(item => {
            return {
                id: item.shortName,
                label: `${item.fullName} (${item.shortName})`,
                tradeMethods: item.tradeMethods
            }
        })
    }, []);

    const getOptionLabel = (option) => {
        return option.label
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

    const paymentMethods = useMemo(() => {
        let result = {}

        currenciesList.forEach(item => {
            result[item.id] = item.tradeMethods.map(method => {
                return {
                    id: method.identifier,
                    label: method.tradeMethodName,
                }
            })
        })

        return result
    }, [currenciesList])

    return (
        <Fragment>
            <Balance/>
            <div className={css.wrapper}>
                <div className={css.title}>Пополнить</div>
                <ThemeProvider theme={darkTheme}>
                    <SenderStep
                        className={css.senderData}
                        deal={deal}
                        currenciesList={currenciesList}
                        getOptionLabel={getOptionLabel}
                        onChangeDeal={onChangeDeal}
                        paymentMethods={paymentMethods}
                    />
                    <TextField
                        className={css.sumInput}
                        label="Введите сумму"
                        variant="outlined"
                        value={deal.sum}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        onChange={handleChangeSum}
                    />
                    {  deal.sender_currency && deal.sum &&
                        <Fragment>
                            <div className={css.exchangeRate}>ĸурс 98.21 RUB/USD</div>
                            <div className={css.resultSum}>~{getUsdValue()}$</div>
                        </Fragment>
                    }
                </ThemeProvider>
            </div>
            <BackButton route={'/receive'} title={'Назад'}/>
        </Fragment>
    )
};

export default ReceiveByBank