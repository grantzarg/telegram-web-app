import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import css from '../index.module.css';

function ReceiverStep({
  currenciesList,
  getOptionLabel,
  deal,
  paymentMethods,
  onChangeDeal,
  errors,
  showErrors,
}) {
  const getPaymentMethodsByCurrency = (currency) => paymentMethods[currency] || [];

  return (
    <>
      <Autocomplete
        className={css.select}
        options={currenciesList}
        getOptionLabel={getOptionLabel}
        sx={{
          width: '100%',
          '& fieldset': { borderRadius: 25 },
        }}
        renderInput={(params) => <TextField {...params} label="Валюта получения *" error={showErrors && errors.receiverCurrency} />}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        value={currenciesList.find((item) => item.id === deal.receiverCurrency) || null}
        onChange={(event, value) => {
          onChangeDeal('receiverBank', null);
          onChangeDeal('receiverCurrency', value ? value.id : null);
        }}
      />
      <Autocomplete
        className={css.select}
        disabled={!deal.receiverCurrency}
        options={getPaymentMethodsByCurrency(deal.receiverCurrency)}
        getOptionLabel={getOptionLabel}
        sx={{
          width: '100%',
          '& fieldset': { borderRadius: 25 },
        }}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => <TextField {...params} label="Банк получателя *" error={showErrors && errors.receiverBank} />}
        value={
          getPaymentMethodsByCurrency(deal.receiverCurrency)
            .find((item) => item.id === deal.receiverBank) || null
        }
        onChange={(event, value) => {
          onChangeDeal('receiverBank', value ? value.id : null);
        }}
      />
    </>
  );
}

export default ReceiverStep;
