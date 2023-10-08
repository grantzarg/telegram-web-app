import React from 'react';
import css from "../index.module.css";
import TextField from '@mui/material/TextField';
import {isBankNameField} from '../helper';

const AdditionalField = ({fieldOptions, value, onChange, className}) => {
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
                            borderRadius: "45px",
                            width: '100%'
                        },
                    }
                }
                inputProps={{
                    maxLength: fieldOptions.lengthLimit,
                }}
                style={{
                    borderRadius: "25px",
                    width: '100%'
                }}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default AdditionalField;