import React, {Fragment, useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import css from '../index.module.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AdditionalField from "../AdditionalField";

const SenderStep = ({currenciesList, getOptionLabel, deal, paymentMethods, onChangeDeal, additionalFieldsOptions = [], onChangeSenderAdditionalField}) => {
    const handleChangeSenderCurrency = (value) => {
        onChangeDeal('senderCurrency', value ? value.id : null)
    }

    const handleChangeSenderBank = async (value) => {
        onChangeDeal('senderBank', value ? value.id : null)
    }

    const getPaymentMethodsByCurrency = (currency) => {
        return paymentMethods[currency] || []
    }

    const handleChangeAdditionalField = (e, index) => {
        onChangeSenderAdditionalField(index, e.target.value);
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
                renderInput={(params) => <TextField {...params} label="Валюта отправления *"/>}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                value={currenciesList.find(item => item.id === deal.senderCurrency) || null}
                onChange={(event, value) => handleChangeSenderCurrency(value)}
            />
            <Autocomplete
                className={css.select}
                disabled={!deal.senderCurrency}
                options={ getPaymentMethodsByCurrency(deal.senderCurrency)}
                getOptionLabel={getOptionLabel}
                sx={{
                    width: '100%',
                    '& fieldset': { borderRadius: 25 }
                }}
                renderInput={(params) => <TextField {...params} label="Банк отправителя *"/>}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                value={getPaymentMethodsByCurrency(deal.senderCurrency).find(item => item.id === deal.senderBank) || null}
                onChange={(event, value) => handleChangeSenderBank(value)}
            />
            {deal.senderCurrency === 'RUB' && <FormControlLabel
                sx={{
                    "&": {
                        marginTop: '20px',
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
            {additionalFieldsOptions[deal.senderBank] && additionalFieldsOptions[deal.senderBank].map((field, index) => {
                return (
                    <AdditionalField
                        key={`additional_field_${index}`}
                        fieldOptions={field}
                        value={deal.senderPaymentDetails[index] && deal.senderPaymentDetails[index].value}
                        index={index}
                        onChange={(e) => handleChangeAdditionalField(e, index)}
                    />
                )
            })}
        </Fragment>
    )
}

export default SenderStep