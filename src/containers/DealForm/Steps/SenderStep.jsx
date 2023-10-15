import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import css from '../index.module.css';

function SenderStep({
  currenciesList, getOptionLabel, deal, paymentMethods, onChangeDeal,
}) {
  const handleChangeSenderCurrency = (value) => {
    onChangeDeal('senderCurrency', value ? value.id : null);
  };

  const handleChangeSenderBank = async (value) => {
    onChangeDeal('senderBank', value ? value.id : null);
  };

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
        renderInput={(params) => <TextField {...params} label="Валюта отправления *" />}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        value={currenciesList.find((item) => item.id === deal.senderCurrency) || null}
        onChange={(event, value) => handleChangeSenderCurrency(value)}
      />
      <Autocomplete
        className={css.select}
        disabled={!deal.senderCurrency}
        options={getPaymentMethodsByCurrency(deal.senderCurrency)}
        getOptionLabel={getOptionLabel}
        sx={{
          width: '100%',
          '& fieldset': { borderRadius: 25 },
        }}
        renderInput={(params) => <TextField {...params} label="Банк отправителя *" />}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        value={
          getPaymentMethodsByCurrency(deal.senderCurrency)
            .find((item) => item.id === deal.senderBank) || null
        }
        onChange={(event, value) => handleChangeSenderBank(value)}
      />
      {deal.senderCurrency === 'RUB' && (
      <FormControlLabel
        sx={{
          '&': {
            marginTop: '20px',
            marginRight: 0,
            marginLeft: 0,
          },
        }}
        control={(
          <Switch
            checked={deal.is_sbp}
            onChange={(event, value) => {
              onChangeDeal('is_sbp', value);
            }}
          />
                  )}
        label="Сможете ли вы отправить по СБП?"
      />
      )}
    </>
  );
}

export default SenderStep;
