import React, {useState, useMemo, useEffect} from 'react'
import css from './index.module.css'

import BackButton from '../../components/BackButton'

import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {STEPS} from './helper'
import {CURRENCIES} from '../../helper'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const getOptionLabel = (option) => {
    return option.label
}

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

        return deal.receiver_bank && deal.receiver_currency
    }, [activeStep, deal]);

    const currenciesList = useMemo(() => {
        return CURRENCIES.map(item => {
            return {
                id: item.shortName,
                label: `${item.fullName} (${item.shortName})`,
                tradeMethods: item.tradeMethods
            }
        })
    }, [currencies]);

    const paymentMethods = useMemo(() => {
        let result = {}

        currenciesList.forEach(item => {
            result[item.id] = item.tradeMethods.map(method => {
                return {
                    id: method.identifier,
                    label: method.tradeMethodName,
                }
            })
        })

        return result
    }, [currenciesList])

    const StepComponent = STEPS[activeStep].component

    useEffect(() => {
        onChangeDeal('sender_bank', null)
    }, [deal.sender_currency])

    return (
        <ThemeProvider theme={darkTheme}>
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
                            paymentMethods={paymentMethods}
                            onChangeDeal={onChangeDeal}
                        />
                    }
                </div>
                <div className={css.buttonsWrapper}>
                    {activeStep !== 0 &&
                        <Button
                            color="inherit"
                            variant="text"
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Назад
                        </Button>}
                    {isCurrentStepValid && <Button onClick={handleNext} variant="contained">
                        {isLastStep ? 'Создать заявку' : 'Далее'}
                    </Button>}
                </div>
            </div>
            <BackButton/>
            </div>
        </ThemeProvider>
    )
}

export default DealForm