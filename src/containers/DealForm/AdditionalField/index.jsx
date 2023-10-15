import React from 'react';
import TextField from '@mui/material/TextField';
import css from '../index.module.css';
import { isBankNameField } from '../helper';

function AdditionalField({
  fieldOptions, value, onChange, className,
}) {
  if (isBankNameField(fieldOptions.fieldName)) {
    return null;
  }

  return (
    <div className={css.additionalField}>
      <TextField
        className={className}
        label={fieldOptions.fieldName}
        variant="outlined"
        required={fieldOptions.isRequired}
        type={fieldOptions.restrictionType ? 'number' : ''}
        InputProps={
            {
              style: {
                borderRadius: '45px',
                width: '100%',
              },
              maxLength: fieldOptions.lengthLimit,
            }
        }
        style={{
          borderRadius: '25px',
          width: '100%',
        }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default AdditionalField;
