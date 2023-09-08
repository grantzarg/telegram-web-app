import React, {useState, useMemo, Fragment, useEffect} from 'react'
import css from './index.module.css'

import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {STEPS, CURRENCIES} from '../../helper'

const tg = window.Telegram.WebApp

const darkTheme = createTheme({
    palette: {
        mode: tg.colorScheme === 'dark' ? 'dark' : 'light',
    },
});

const getOptionLabel = (option) => {
    return option.label
}

const Form = ({deal, onChangeDeal, currencies, onSendDeal}) => {
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

    const getPaymentMethodsByCurrency = (currency) => {
        return paymentMethods[currency] || []
    }

    const handleChangeSenderCurrency = (value) => {
        onChangeDeal('sender_currency', value ? value.id : null)
    }

    useEffect(() => {
        onChangeDeal('sender_bank', null)
    }, [deal.sender_currency])

    return (
        <ThemeProvider theme={darkTheme}>
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
                    {activeStep === 0 ?
                        <Fragment>
                            <Autocomplete
                                className={css.select}
                                options={currenciesList}
                                getOptionLabel={getOptionLabel}
                                sx={{width: '100%'}}
                                renderInput={(params) => <TextField {...params} label="Выберите валюту отправления"/>}
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                value={currenciesList.find(item => item.id === deal.sender_currency) || null}
                                onChange={(event, value) => handleChangeSenderCurrency(value)}
                            />
                            <Autocomplete
                                className={css.select}
                                disabled={!deal.sender_currency}
                                options={getPaymentMethodsByCurrency(deal.sender_currency)}
                                getOptionLabel={getOptionLabel}
                                sx={{width: '100%'}}
                                renderInput={(params) => <TextField {...params} label="Выберите банк отправителя"/>}
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                value={getPaymentMethodsByCurrency(deal.sender_currency).find(item => item.id === deal.sender_bank) || null}
                                onChange={(event, value) => {
                                    onChangeDeal('sender_bank', value ? value.id : null)
                                }}
                            />
                            {deal.sender_currency === 'RUB' && <FormControlLabel
                                control={
                                    <Switch
                                        checked={deal.is_sbp}
                                        onChange={(event, value) => {
                                            onChangeDeal('is_sbp', value)
                                        }}
                                    />
                                }
                                label="Сможете ли вы отправить по СБП?"
                            />}
                        </Fragment> :
                        <Fragment>
                            <Autocomplete
                                className={css.select}
                                options={currenciesList}
                                getOptionLabel={getOptionLabel}
                                sx={{width: '100%'}}
                                renderInput={(params) => <TextField {...params} label="Выберите валюту получения"/>}
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                value={currenciesList.find(item => item.id === deal.receiver_currency) || null}
                                onChange={(event, value) => {
                                    onChangeDeal('receiver_bank', null)
                                    onChangeDeal('receiver_currency', value ? value.id : null)
                                }}
                            />
                            <Autocomplete
                                className={css.select}
                                disabled={!deal.receiver_currency}
                                options={getPaymentMethodsByCurrency(deal.receiver_currency)}
                                getOptionLabel={getOptionLabel}
                                sx={{width: '100%'}}
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                renderInput={(params) => <TextField {...params} label="Выберите банк получателя"/>}
                                value={getPaymentMethodsByCurrency(deal.receiver_currency).find(item => item.id === deal.receiver_bank) || null}
                                onChange={(event, value) => {
                                    onChangeDeal('receiver_bank', value ? value.id : null)
                                }}
                            />
                        </Fragment>
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
        </ThemeProvider>
    )
}

export default Form