import React from 'react';
import TextField from '@mui/material/TextField';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { isBankNameField } from '../helper';
import { RESTRICTION_TYPES } from '../../../utils/constants';
import { isEmailValid, isValidSBPPhone } from '../../../utils/validators';
import css from '../index.module.css';
import SBPBankField from './components/SBPBankField'

const SBP_BANK_NAME_FIELD_ID = '30401069441461374976';

function AdditionalField({
  fieldOptions,
  value,
  onChange,
  className,
  showErrors,
  isSBP
}) {
  if (isBankNameField(fieldOptions.fieldName)) {
    return null;
  }

  const isPhone = fieldOptions.type === 'phone';
  const isEmail = fieldOptions.type === 'email';
  const isPayAccount = fieldOptions.type === 'pay_account';

  const handleChangeField = (e) => {
    let newValue = e.target.value;

    if (isPayAccount) {
      newValue = newValue.replace(/[^0-9a-zA-Z]/g, '');
    }

    if (newValue.length > fieldOptions.lengthLimit) {
      newValue = newValue.slice(0, fieldOptions.lengthLimit);
    }

    onChange(newValue);
  };

  const handleChangePhoneField = (newValue) => {
    onChange(newValue);
  };

  const invalidValue = (showErrors && !value)
    || (showErrors && isEmail && !isEmailValid(value)) || (showErrors && isSBP && isPhone && !isValidSBPPhone(value));

  if (isSBP && SBP_BANK_NAME_FIELD_ID === fieldOptions.fieldId) {
    return (
      <div className={css.additionalField}>
        <SBPBankField value={value} showErrors={showErrors} onChange={onChange} className={className} />
      </div>
    )
  }

  return (
    <div className={css.additionalField}>
      {
        isPhone
          ? (
            <MuiTelInput
              className={css.additionalFieldPhone}
              value={value}
              error={invalidValue}
              defaultCountry="RU"
              onlyCountries={isSBP ? ["RU"] : []}
              forceCallingCode={isSBP}
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
