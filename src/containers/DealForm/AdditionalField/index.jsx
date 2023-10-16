import React from 'react';
import TextField from '@mui/material/TextField';
import css from '../index.module.css';
import { isBankNameField } from '../helper';
import { MuiTelInput } from 'mui-tel-input';
import {RESTRICTION_TYPES} from '../../../utils/constants';

function AdditionalField({
  fieldOptions, value, onChange, className,
}) {
  if (isBankNameField(fieldOptions.fieldName)) {
    return null;
  }

  const handleChangeField = (e) => {
    let value = e.target.value

    if (value.length > fieldOptions.lengthLimit) {
      value = value.slice(0, fieldOptions.lengthLimit)
    }

    onChange(value)
  }

  const handleChangePhoneField = (value) => {
    onChange(value)
  }

  const isPhone = fieldOptions.type === 'phone';

  return (
    <div className={css.additionalField}>
      {
        isPhone ?
          <MuiTelInput
            className={css.additionalFieldPhone}
            value={value}
            defaultCountry={'RU'}
            style={{
              borderRadius: '45px',
            }}
            focusOnSelectCountry
            onChange={handleChangePhoneField}
          /> :
          <TextField
            className={className}
            label={fieldOptions.fieldName}
            variant="outlined"
            required={fieldOptions.isRequired}
            type={RESTRICTION_TYPES[fieldOptions.restrictionType]}
            style={{
              borderRadius: '25px',
              width: '100%',
            }}
            value={value}
            onChange={handleChangeField}
          />
      }
    </div>
  );
}

export default AdditionalField;
