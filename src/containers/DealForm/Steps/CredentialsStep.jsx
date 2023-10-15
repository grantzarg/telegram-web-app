import React from 'react';
import AdditionalField from '../AdditionalField';

function CredentialsStep({
  deal,
  additionalFieldsOptions = [],
  onChangeReceiverAdditionalField,
}) {
  const handleChangeAdditionalField = (e, index) => {
    onChangeReceiverAdditionalField(index, e.target.value);
  };

  if (!additionalFieldsOptions[deal.receiverBank]) {
    return null;
  }

  return (
    additionalFieldsOptions[deal.receiverBank].map((field, index) => (
      <AdditionalField
        key={`additional_field_${field.fieldId}`}
        fieldOptions={field}
        value={deal.receiverPaymentDetails[index] && deal.receiverPaymentDetails[index].value}
        index={index}
        onChange={(e) => handleChangeAdditionalField(e, index)}
      />
    ))
  );
}

export default CredentialsStep;
