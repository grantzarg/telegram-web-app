import React, {Fragment} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import css from '../index.module.css';
import TextField from '@mui/material/TextField';

const ReceiverStep = ({currenciesList, getOptionLabel, deal, paymentMethods, onChangeDeal}) => {
    const getPaymentMethodsByCurrency = (currency) => {
        return paymentMethods[currency] || []
    }

    return (
        <Fragment>
            <Autocomplete
                className={css.select}
                options={currenciesList}
                getOptionLabel={getOptionLabel}
                sx={{width: '100%'}}
                renderInput={(params) => <TextField {...params} label="Выберите валюту получения"/>}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                value={currenciesList.find(item => item.id === deal.receiver_currency) || null}
                onChange={(event, value) => {
                    onChangeDeal('receiver_bank', null)
                    onChangeDeal('receiver_currency', value ? value.id : null)
                }}
            />
            <Autocomplete
                className={css.select}
                disabled={!deal.receiver_currency}
                options={getPaymentMethodsByCurrency(deal.receiver_currency)}
                getOptionLabel={getOptionLabel}
                sx={{width: '100%'}}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => <TextField {...params} label="Выберите банк получателя"/>}
                value={getPaymentMethodsByCurrency(deal.receiver_currency).find(item => item.id === deal.receiver_bank) || null}
                onChange={(event, value) => {
                    onChangeDeal('receiver_bank', value ? value.id : null)
                }}
            />
        </Fragment>
    )
}

export default ReceiverStep