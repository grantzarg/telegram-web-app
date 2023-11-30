import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { SBP_BANKS } from '../../../../utils/constants';
import Autocomplete from "@mui/material/Autocomplete";
import CloseIcon from '../../../../components/icons/CloseIcon';


function SBPBankField({
  value,
  onChange,
  className,
  showErrors,
}) {
  const [isOtherBank, setIsOtherBank] = useState(false);

  const onChangeAutocomplete = (value) => {
    if (value === 'other') {
      setIsOtherBank(true)
      onChange('');

      return;
    }

    onChange(value);
  };

  const onChangeTextField = async (e) => {
    let newValue = e.target.value;

    if (newValue.length > 50) {
      newValue = newValue.slice(0, 50);
    }

    onChange(newValue);
  };

  const invalidValue = showErrors && !value;

  return (
    <>
      {isOtherBank ? (
        <TextField
          error={invalidValue}
          label={'Введите банка получателя'}
          variant="outlined"
          required={true}
          type="text"
          className={className}
          style={{
            borderRadius: '25px',
            width: '100%',
          }}
          value={value}
          InputProps={{endAdornment: <div onClick={() => setIsOtherBank(false)}><CloseIcon/></div>}}
          onChange={onChangeTextField}
        />) : (
        <Autocomplete
          options={SBP_BANKS}
          sx={{
          width: '100%',
          '& fieldset': { borderRadius: 25 },
          }}
          renderInput={(params) => <TextField {...params} label="Выберите банк получателя" error={invalidValue} />}
          isOptionEqualToValue={(option, value) => {
            return option.id === value
          }}
          value={value || null}
          onChange={(event, value) => onChangeAutocomplete(value && value.id)}
        />
      )}
    </>
  )
}

export default SBPBankField;
