import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import css from './index.module.css';

import { STEPS } from './helper';
import { currenciesList, getPaymentMethods, getOptionLabel } from '../../utils/helper';

function DealForm({
  deal,
  onChangeDeal,
  additionalFieldsOptions,
  onChangeSenderAdditionalField,
  onChangeReceiverAdditionalField,
  onCalculatePrice,
  onSendDeal,
  priceOptions,
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const isReceiverAdditionalFieldsValid = () => {
    let result = true;

    if (deal.receiverPaymentDetails.length > 0) {
      deal.receiverPaymentDetails.forEach((item) => {
        if (item.isRequired) {
          result = !!item.value;
        }
      });
    }

    return result;
  };

  const validateCurrentStep = () => {
    const isAdditionalFieldsValid = isReceiverAdditionalFieldsValid();
    setShowErrors(true);

    setErrors({
      senderBank: !deal.senderBank,
      senderCurrency: !deal.senderCurrency,
      receiverBank: !deal.receiverBank,
      receiverCurrency: !deal.receiverCurrency,
      transferAmount: !deal.transferAmount,
      isAdditionalFieldsValid,
    });

    if (activeStep === 0) {
      return deal.senderBank && deal.senderCurrency;
    }

    if (activeStep === 1) {
      return deal.receiverBank && deal.receiverCurrency;
    }

    if (activeStep === 2) {
      return deal.transferAmount;
    }

    if (activeStep === 3) {
      return true;
    }

    return isAdditionalFieldsValid;
  };

  const handleNext = async () => {
    const { action } = STEPS[activeStep];

    const isCurrentStepValid = validateCurrentStep();
    setShowErrors(!isCurrentStepValid);

    if (!isCurrentStepValid) {
      return;
    }

    if (action === 'sendDeal') {
      onSendDeal();

      return;
    }

    if (action === 'calculatePrice') {
      await onCalculatePrice();
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const StepComponent = STEPS[activeStep].component;

  const handleChangeDeal = (field, value) => {
    setShowErrors(false);

    onChangeDeal(field, value);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Stepper className={css.stepper} activeStep={activeStep} orientation="vertical">
          {
            STEPS.map(({ label, buttonText }) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <div className={css.formWrapper}>
                    <StepComponent
                      currenciesList={currenciesList}
                      getOptionLabel={getOptionLabel}
                      deal={deal}
                      showErrors={showErrors}
                      errors={errors}
                      paymentMethods={getPaymentMethods()}
                      additionalFieldsOptions={additionalFieldsOptions}
                      priceOptions={priceOptions}
                      onChangeDeal={handleChangeDeal}
                      onChangeSenderAdditionalField={onChangeSenderAdditionalField}
                      onChangeReceiverAdditionalField={onChangeReceiverAdditionalField}
                    />
                  </div>
                  <div className={css.buttonsWrapper}>
                    {activeStep !== 0
                                    && (
                                    <Button
                                      color="inherit"
                                      size="small"
                                      variant="outlined"
                                      onClick={handleBack}
                                      sx={{
                                        borderRadius: 25, marginTop: '20px', padding: '10px 20px', mr: 1,
                                      }}
                                    >
                                      Назад
                                    </Button>
                                    )}
                    <Button size="small" variant="contained" sx={{ borderRadius: 25, marginTop: '20px', padding: '10px 20px' }} onClick={handleNext}>
                      {buttonText}
                    </Button>
                  </div>
                </StepContent>
              </Step>
            ))
          }
        </Stepper>
        <div className={css.requiredInfo}>* - обязательные поля</div>
      </div>
    </div>
  );
}

export default DealForm;
