import React, {useState, useMemo, useEffect} from 'react'
import css from './index.module.css'

import BackButton from '../../components/BackButton'

import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

import {STEPS} from './helper'
import {currenciesList, getPaymentMethods, getOptionLabel} from '../../helper'

const DealForm = ({deal, onChangeDeal, currencies, onSendDeal}) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (isLastStep) {
            onSendDeal()

            return
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const isLastStep = activeStep === STEPS.length - 1

    const isCurrentStepValid = useMemo(() => {
        if (activeStep === 0) {
            return deal.sender_bank && deal.sender_currency
        }

        if (activeStep === 1) {
            return deal.receiver_bank && deal.receiver_currency
        }

        return deal.sumType && deal.sum
    }, [activeStep, deal]);

    const StepComponent = STEPS[activeStep].component

    useEffect(() => {
        onChangeDeal('sender_bank', null)
    }, [deal.sender_currency])

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
            <Stepper className={css.stepper} activeStep={activeStep} alternativeLabel>
                {
                    STEPS.map(({label}) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        )
                    })
                }
            </Stepper>
            <div className={css.formWrapper}>
                {
                    <StepComponent
                        currenciesList={currenciesList}
                        getOptionLabel={getOptionLabel}
                        deal={deal}
                        paymentMethods={getPaymentMethods()}
                        onChangeDeal={onChangeDeal}
                    />
                }
            </div>
            <div className={css.buttonsWrapper}>
                {activeStep !== 0 &&
                    <Button
                        color="inherit"
                        size="large"
                        variant="outlined"
                        onClick={handleBack}
                        sx={{ borderRadius: 25, marginTop: '20px', padding: '10px 20px', mr: 1 }}
                    >
                        Назад
                    </Button>}
                {isCurrentStepValid && <Button size={"large"} variant="contained" sx={{ borderRadius: 25, marginTop: '20px', padding: '10px 20px' }} onClick={handleNext}>
                    {isLastStep ? 'Создать заявку' : 'Продолжить'}
                </Button>}
            </div>
        </div>
        <BackButton/>
        </div>
    )
}

export default DealForm