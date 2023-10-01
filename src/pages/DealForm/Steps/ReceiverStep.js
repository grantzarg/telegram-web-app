import React, {Fragment} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import css from '../index.module.css';
import TextField from '@mui/material/TextField';
import AdditionalField from "../AdditionalField";

const ReceiverStep = ({currenciesList, getOptionLabel, deal, paymentMethods, additionalFieldsOptions = [], onChangeReceiverAdditionalField,  onChangeDeal}) => {
    const getPaymentMethodsByCurrency = (currency) => {
        return paymentMethods[currency] || []
    }

    const handleChangeAdditionalField = (e, index) => {
        onChangeReceiverAdditionalField(index, e.target.value);
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
                renderInput={(params) => <TextField {...params} label="Валюта получения *"/>}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                value={currenciesList.find(item => item.id === deal.receiverCurrency) || null}
                onChange={(event, value) => {
                    onChangeDeal('receiverBank', null)
                    onChangeDeal('receiverCurrency', value ? value.id : null)
                }}
            />
            <Autocomplete
                className={css.select}
                disabled={!deal.receiverCurrency}
                options={getPaymentMethodsByCurrency(deal.receiverCurrency)}
                getOptionLabel={getOptionLabel}
                sx={{
                    width: '100%',
                    '& fieldset': { borderRadius: 25 }
                }}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => <TextField {...params} label="Банк получателя *"/>}
                value={getPaymentMethodsByCurrency(deal.receiverCurrency).find(item => item.id === deal.receiverBank) || null}
                onChange={(event, value) => {
                    onChangeDeal('receiverBank', value ? value.id : null)
                }}
            />
            {additionalFieldsOptions[deal.receiverBank] && additionalFieldsOptions[deal.receiverBank].map((field, index) => {
                return (
                    <AdditionalField
                        key={`additional_field_${index}`}
                        fieldOptions={field}
                        value={deal.receiverPaymentDetails[index] && deal.receiverPaymentDetails[index].value}
                        index={index}
                        onChange={(e) => handleChangeAdditionalField(e, index)}
                    />
                )
            })}
        </Fragment>
    )
}

export default ReceiverStep