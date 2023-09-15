import React, {Fragment, useContext, useState} from "react";
import css from './index.module.css'
import BackButton from "../../components/BackButton";
import Balance from "../../components/Balance";
import Button from "@mui/material/Button";
import {Context} from "../../context";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import {currenciesList, getOptionLabel} from '../../helper'

const ReceiveByPerson = () => {
    const { state } = useContext(Context);
    const {exchangeRate} = state

    const [deal, setDeal] = useState({
        currency: null,
        user: null,
        sum: ''
    });

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

    const getUsdValue = () => {
        const value = deal.sum / exchangeRate

        return value.toFixed(2)
    }

    const isDealValid = () => {
        return deal.currency && deal.sum && deal.user;
    }

    const handleChangeCurrency = (value) => {
        onChangeDeal('currency', value ? value.id : null)
    }

    return (
        <Fragment>
            <Balance/>
            <div className={css.wrapper}>
                <div className={css.title}>Пополнить</div>
                <Autocomplete
                    className={css.select}
                    options={currenciesList}
                    getOptionLabel={getOptionLabel}
                    sx={{
                        width: '100%',
                        '& fieldset': { borderRadius: 25 }
                    }}
                    renderInput={(params) => <TextField {...params} label="Выберите валюту"/>}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    value={currenciesList.find(item => item.id === deal.currency) || null}
                    onChange={(event, value) => handleChangeCurrency(value)}
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
                {  deal.currency && deal.sum &&
                    <Fragment>
                        <div className={css.exchangeRate}>курс {exchangeRate} RUB/USDT</div>
                        <div className={css.resultSum}>~{getUsdValue()}$</div>
                    </Fragment>
                }
                {   isDealValid() &&
                    <Button size={"large"} variant="contained" sx={{ borderRadius: 25, marginTop: '20px', padding: '15px 20px' }}>Запросить</Button>
                }
            </div>
            <BackButton route={'/receive'} title={'Назад'}/>
        </Fragment>
    )
};

export default ReceiveByPerson