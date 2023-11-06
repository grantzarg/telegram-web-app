import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import AdditionalField from '../AdditionalField';

function CredentialsStep({
  deal,
  additionalFieldsOptions = [],
  onChangeReceiverAdditionalField,
  agreements,
  onChangeAgreements,
  showErrors,
}) {
  const handleChangeAdditionalField = (value, index) => {
    onChangeReceiverAdditionalField(index, value);
  };

  const isErrorAgree = showErrors
    && (!agreements.agreeReceiverData || !agreements.agreeSendReceipt);

  if (!additionalFieldsOptions[deal.receiverBank]) {
    return null;
  }

  return (
    <>
      {
        additionalFieldsOptions[deal.receiverBank].map((field, index) => (
          <AdditionalField
            key={`additional_field_${field.fieldId}`}
            fieldOptions={field}
            value={deal.receiverPaymentDetails[index] && deal.receiverPaymentDetails[index].value}
            index={index}
            showErrors={showErrors}
            onChange={(value) => handleChangeAdditionalField(value, index)}
          />
        ))
      }
      <FormControl
        required
        error={isErrorAgree}
        variant="standard"
      >
        <FormGroup>
          <FormControlLabel
            control={
              (
                <Checkbox
                  checked={agreements.agreeReceiverData}
                  onChange={(e, value) => {
                    onChangeAgreements('agreeReceiverData', value);
                  }}
                />
              )
            }
            label="Подтверждаю корректность введенных данных Получателя"
          />
          <FormControlLabel
            control={
              (
                <Checkbox
                  checked={agreements.agreeSendReceipt}
                  onChange={(e, value) => {
                    onChangeAgreements('agreeSendReceipt', value);
                  }}
                />
              )
            }
            label="Обязуюсь предоставить чек и оставаться на связи в течение всего времени обработки заявки. А также предоставить другую информацию о переводе в случае необходимости."
          />
        </FormGroup>
        {isErrorAgree && <FormHelperText>Согласитесь с условиями</FormHelperText>}
      </FormControl>
    </>
  );
}

export default CredentialsStep;
