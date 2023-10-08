import React, {Fragment} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import css from '../index.module.css';
import TextField from '@mui/material/TextField';
import AdditionalField from "../AdditionalField";

const CredentialsStep = ({deal, additionalFieldsOptions = [], onChangeReceiverAdditionalField}) => {
    const handleChangeAdditionalField = (e, index) => {
        onChangeReceiverAdditionalField(index, e.target.value);
    }

    return (
        <Fragment>
            {additionalFieldsOptions[deal.receiverBank] && additionalFieldsOptions[deal.receiverBank].map((field, index) => {
                return (
                    <AdditionalField
                        key={`additional_field_${index}`}
                        fieldOptions={field}
                        value={deal.receiverPaymentDetails[index] && deal.receiverPaymentDetails[index].value}
                        index={index}
                        onChange={(e) => handleChangeAdditionalField(e, index)}
                    />
                )
            })}
        </Fragment>
    )
}

export default CredentialsStep