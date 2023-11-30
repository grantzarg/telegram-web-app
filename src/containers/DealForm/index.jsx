import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import css from './index.module.css';

import { STEPS } from './helper';
import { currenciesList, getPaymentMethods, getOptionLabel } from '../../utils/helper';
import { getFromLocalStorage, saveToLocalStorage } from '../../utils/browser';
import { isEmailValid, isValidSBPPhone } from '../../utils/validators';

const getInitialStep = () => {
  const savedStep = getFromLocalStorage('dealStep');

  if (savedStep) {
    if (savedStep > 2) {
      return 2;
    }

    return savedStep;
  }

  return 0;
};

function DealForm({
  deal,
  agreements,
  onChangeDeal,
  additionalFieldsOptions,
  onChangeSenderAdditionalField,
  onChangeReceiverAdditionalField,
  onChangeAgreements,
  onCalculatePrice,
  onSendDeal,
  priceOptions,
}) {
  const [activeStep, setActiveStep] = useState(getInitialStep());
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [isValidAmount, setIsValidAmount] = useState(true);

  const isReceiverAdditionalFieldsValid = () => {
    let result = true;
    const isSBP = deal.receiverBank === 'SBP'

    if (deal.receiverPaymentDetails.length > 0) {
      deal.receiverPaymentDetails.forEach((item) => {
        if (item.isRequired && !item.value) {
          result = false;
        }

        if (item.type === 'email' && !isEmailValid(item.value)) {
          result = false;
        }

        if (isSBP && item.type === 'phone' && !isValidSBPPhone(item.value)) {
          result = false;
        }
      });
    }

    return result;
  };

  const setValidationErrorsDealForm = (isAdditionalFieldsValid) => {
    setErrors({
      senderBank: !deal.senderBank,
      senderCurrency: !deal.senderCurrency,
      senderName: !deal.senderName,
      receiverBank: !deal.receiverBank,
      receiverCurrency: !deal.receiverCurrency,
      transferAmount: !deal.transferAmount && !isValidAmount,
      agreeSenderData: agreements.agreeSenderData,
      agreeStay: agreements.agreeStay,
      agreeSendReceipt: agreements.agreeSendReceipt,
      isAdditionalFieldsValid,
    });
  };

  const validateCurrentStep = () => {
    const isAdditionalFieldsValid = isReceiverAdditionalFieldsValid();
    setShowErrors(true);

    setValidationErrorsDealForm(isAdditionalFieldsValid);

    if (activeStep === 0) {
      return deal.senderBank
        && deal.senderCurrency
        && deal.senderName
        && agreements.agreeSenderData;
    }

    if (activeStep === 1) {
      return deal.receiverBank && deal.receiverCurrency;
    }

    if (activeStep === 2) {
      return deal.transferAmount && isValidAmount;
    }

    if (activeStep === 3) {
      return true;
    }

    return isAdditionalFieldsValid
      && deal.senderBank && deal.senderCurrency && deal.senderName
      && deal.receiverBank && deal.receiverCurrency
      && agreements.agreeSenderData
      && agreements.agreeSendReceipt
      && agreements.agreeReceiverData;
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

  useEffect(() => {
    saveToLocalStorage('dealStep', activeStep);
  }, [activeStep]);

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
                      agreements={agreements}
                      showErrors={showErrors}
                      errors={errors}
                      paymentMethods={getPaymentMethods()}
                      additionalFieldsOptions={additionalFieldsOptions}
                      priceOptions={priceOptions}
                      onChangeDeal={handleChangeDeal}
                      onChangeAgreements={onChangeAgreements}
                      onChangeSenderAdditionalField={onChangeSenderAdditionalField}
                      onChangeReceiverAdditionalField={onChangeReceiverAdditionalField}
                      onChangeValidAmount={(valid) => setIsValidAmount(valid)}
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
      </div>
    </div>
  );
}

export default DealForm;
