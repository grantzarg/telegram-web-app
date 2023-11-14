import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import css from '../index.module.css';
import { MIN_AMOUNTS } from '../../../utils/constants';

function SumStep({ onChangeDeal, deal, onChangeValidAmount }) {
  const [isValidAmount, setIsValidAmount] = useState(true);

  const currency1 = deal.toSend ? deal.receiverCurrency : deal.senderCurrency;
  const currency2 = deal.toSend ? deal.senderCurrency : deal.receiverCurrency;

  const handleChangeSumType = (event) => {
    onChangeDeal('toSend', event.target.value === 'sumToSend');
  };

  const handleChangeSum = (e) => {
    const regex = /^[0-9\b]+$/;

    if (e.target.value === '' || regex.test(e.target.value)) {
      onChangeDeal('transferAmount', e.target.value);
    }
  };

  useEffect(() => {
    const minAmount = (MIN_AMOUNTS[currency2] && MIN_AMOUNTS[currency2][currency1])
            || 0;
    console.log(minAmount);
    setIsValidAmount(deal.transferAmount >= minAmount);
  }, [deal.transferAmount, deal.toSend]);

  useEffect(() => {
    onChangeValidAmount(isValidAmount)
  }, [isValidAmount])

  return (
    <div className={css.sumWrapper}>
      <FormControl className={css.sumType} fullWidth>
        <Select
          value={deal.toSend ? 'sumToSend' : 'sumToReceive'}
          sx={{
            width: '100%',
            '& fieldset': { borderRadius: 25 },
          }}
          onChange={handleChangeSumType}
        >
          <MenuItem value="sumToReceive">Сумма к получению</MenuItem>
          <MenuItem value="sumToSend">Сумма к отправке</MenuItem>
        </Select>
      </FormControl>
      <TextField
        className={css.sumInput}
        error={!isValidAmount}
        label={`Введите сумму (${deal.toSend ? deal.senderCurrency : deal.receiverCurrency}) *`}
        variant="outlined"
        value={deal.transferAmount}
        InputProps={
                    {
                      style: {
                        borderRadius: '25px',
                        width: '100%',
                      },
                    }
                }
        helperText={isValidAmount ? '' : `Минимальная сумма ${deal.toSend ? deal.senderCurrency : deal.receiverCurrency} = ${MIN_AMOUNTS[currency2][currency1]}`}
        onChange={handleChangeSum}
      />
    </div>
  );
}

export default SumStep;
