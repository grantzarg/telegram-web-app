import React, {Fragment} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import css from '../index.module.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const SenderStep = ({currenciesList, getOptionLabel, deal, paymentMethods, onChangeDeal}) => {
    const handleChangeSenderCurrency = (value) => {
        onChangeDeal('sender_currency', value ? value.id : null)
    }

    const getPaymentMethodsByCurrency = (currency) => {
        return paymentMethods[currency] || []
    }

    return (
        <Fragment>
            <Autocomplete
                className={css.select}
                options={currenciesList}
                getOptionLabel={getOptionLabel}
                sx={{
                    width: '100%',
                    '& fieldset': { borderRadius: 25 }
                }}
                renderInput={(params) => <TextField {...params} label="Выберите валюту отправления"/>}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                value={currenciesList.find(item => item.id === deal.sender_currency) || null}
                onChange={(event, value) => handleChangeSenderCurrency(value)}
            />
            <Autocomplete
                className={css.select}
                disabled={!deal.sender_currency}
                options={ getPaymentMethodsByCurrency(deal.sender_currency)}
                getOptionLabel={getOptionLabel}
                sx={{
                    width: '100%',
                    '& fieldset': { borderRadius: 25 }
                }}
                renderInput={(params) => <TextField {...params} label="Выберите банк отправителя"/>}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                value={getPaymentMethodsByCurrency(deal.sender_currency).find(item => item.id === deal.sender_bank) || null}
                onChange={(event, value) => {
                    onChangeDeal('sender_bank', value ? value.id : null)
                }}
            />
            {deal.sender_currency === 'RUB' && <FormControlLabel
                sx={{
                    "&": {
                        marginRight: 0,
                        marginLeft: 0,
                    }
                }}
                control={
                    <Switch
                        checked={deal.is_sbp}
                        onChange={(event, value) => {
                            onChangeDeal('is_sbp', value)
                        }}
                    />
                }
                label="Сможете ли вы отправить по СБП?"
            />}
        </Fragment>
    )
}

export default SenderStep