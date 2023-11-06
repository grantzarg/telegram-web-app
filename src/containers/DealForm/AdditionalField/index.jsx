import React from 'react';
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input';
import { isBankNameField } from '../helper';
import { RESTRICTION_TYPES } from '../../../utils/constants';
import { isEmailValid } from '../../../utils/validators';
import css from '../index.module.css';

function AdditionalField({
  fieldOptions,
  value,
  onChange,
  className,
  showErrors,
}) {
  if (isBankNameField(fieldOptions.fieldName)) {
    return null;
  }

  const handleChangeField = (e) => {
    let newValue = e.target.value;

    if (newValue.length > fieldOptions.lengthLimit) {
      newValue = newValue.slice(0, fieldOptions.lengthLimit);
    }

    onChange(newValue);
  };

  const handleChangePhoneField = (newValue) => {
    onChange(newValue);
  };

  const isPhone = fieldOptions.type === 'phone';
  const isEmail = fieldOptions.type === 'email';

  const invalidValue = (showErrors && !value)
    || (isEmail && !isEmailValid(value));

  return (
    <div className={css.additionalField}>
      {
        isPhone
          ? (
            <MuiTelInput
              className={css.additionalFieldPhone}
              value={value}
              defaultCountry="RU"
              style={{
                borderRadius: '45px',
              }}
              focusOnSelectCountry
              onChange={handleChangePhoneField}
            />
          )
          : (
            <TextField
              error={invalidValue}
              helperText={isEmail && invalidValue && 'Укажите ваш email'}
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
          )
      }
    </div>
  );
}

export default AdditionalField;
