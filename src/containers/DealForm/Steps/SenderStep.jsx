import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import css from '../index.module.css';

function SenderStep({
  currenciesList,
  getOptionLabel,
  deal,
  agreements,
  paymentMethods,
  onChangeDeal,
  onChangeAgreements,
  errors,
  showErrors,
}) {
  const handleChangeSenderCurrency = (value) => {
    onChangeDeal('senderCurrency', value ? value.id : null);
  };

  const handleChangeSenderBank = async (value) => {
    onChangeDeal('senderBank', value ? value.id : null);
  };

  const handleChangeSenderName = async (e) => {
    onChangeDeal('senderName', e.target.value);
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
        renderInput={(params) => <TextField {...params} label="Валюта отправления *" error={showErrors && errors.senderCurrency} />}
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
        renderInput={(params) => <TextField {...params} label="Банк отправителя *" error={showErrors && errors.senderBank} />}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        value={
          getPaymentMethodsByCurrency(deal.senderCurrency)
            .find((item) => item.id === deal.senderBank) || null
        }
        onChange={(event, value) => handleChangeSenderBank(value)}
      />
      <TextField
        className={css.textField}
        error={showErrors && errors.senderName}
        helperText={showErrors && errors.senderName && 'Укажите ФИО отправителя'}
        label="ФИО отправителя"
        variant="outlined"
        style={{
          marginTop: '20px',
        }}
        value={deal.senderName}
        onChange={handleChangeSenderName}
      />
      <FormControl
        required
        error={showErrors && !agreements.agreeSenderData}
        variant="standard"
      >
        <FormControlLabel
          control={
            (
              <Checkbox
                checked={agreements.agreeSenderData}
                onChange={(e, value) => {
                  onChangeAgreements('agreeSenderData', value);
                }}
              />
            )
          }
          label="Подтверждаю корректность введенных данных Отправителя"
        />
        {showErrors
          && !agreements.agreeSenderData
          && <FormHelperText>Согласитесь с условиями</FormHelperText>}
      </FormControl>
    </>
  );
}

export default SenderStep;
