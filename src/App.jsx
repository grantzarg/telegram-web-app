import React, {useCallback, useState, useEffect, useContext} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import DealForm from './pages/DealForm';

import {CURRENCIES, getRequest} from './helper';
import {useTelegram} from './hooks/useTelegram';
import {Context} from "./context";
import {isBankNameField} from "./pages/DealForm/helper";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => {
    const {tg, queryId} = useTelegram();
    const { dispatch } = useContext(Context);

    const [additionalFieldsOptions, setAdditionalFieldsOptions] = useState([])

    const [deal, setDeal] = useState({
        senderBank: null,
        senderCurrency: null,
        receiverBank: null,
        receiverCurrency: null,
        isSbp: false,
        transferAmount: null,
        toSend: false,
        senderPaymentDetails: [],
        receiverPaymentDetails: []
    });

    const [isAuthorized, setIsAuthorized] = useState(false)

    const onChangeDeal = useCallback((field, value) => {
        setDeal(prevDeal => {
            return {
                ...prevDeal,
                [field]: value
            };
        });
    }, [deal])

    const onChangeSenderAdditionalField = useCallback((index, value) => {
        const updatedItems = [...deal.senderPaymentDetails];

        updatedItems[index] = { ...updatedItems[index], value };

        setDeal(prevDeal => {
            return {
                ...prevDeal,
                senderPaymentDetails: updatedItems
            }
        });
    }, [deal])

    const onChangeReceiverAdditionalField = useCallback((index, value) => {
        const updatedItems = [...deal.receiverPaymentDetails];

        updatedItems[index] = { ...updatedItems[index], value };

        setDeal(prevDeal => {
            return {
                ...prevDeal,
                receiverPaymentDetails: updatedItems
            }
        });
    }, [deal])

    const onSendDeal = useCallback(async () => {
        const data = {
            deal,
            queryId,
        }

        // try {
        //     const result = await fetch('https://www.webapptelegram.ru/data', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(data)
        //     })
        //     console.log(result)
        // } catch (e) {
        //     console.log(e)
        // }
    }, [deal])

    const getAdditionalFields = async (bank) => {
        if (!bank) {
            return [];
        }

        try {
            return await getRequest(`https://p2pwallet.ru/PayMethod/GetFields/${bank}`);
        } catch (e) {
            console.error(e)
            return []
        }
    }


    const fetchData = async () => {
        const result = await getRequest('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=rub');
        const {tether} = result

        dispatch({type: 'SET_EXCHANGE_RATE', payload: tether.rub})
    }

    useEffect(() => {
        onChangeDeal('senderBank', '')
    }, [deal.senderCurrency])

    useEffect( () => {
        if (!deal.senderBank) {
            return;
        }

        async function updateAdditionalFields() {
            const result = await getAdditionalFields(deal.senderBank);

            setAdditionalFieldsOptions((prevState) => {
                return {
                    ...prevState,
                    [deal.senderBank]: result
                }
            });

            onChangeDeal('senderPaymentDetails', result.map(item => {
                return {
                    fieldId: item.fieldId,
                    isRequired: item.isRequired,
                    value: isBankNameField(item.fieldName) ? 1 : ''
                }
            }))
        }

        updateAdditionalFields()
    }, [deal.senderBank])

    useEffect( () => {
        if (!deal.receiverBank) {
            return;
        }

        async function updateAdditionalFields() {
            const result = await getAdditionalFields(deal.receiverBank);

            setAdditionalFieldsOptions((prevState) => {
                return {
                    ...prevState,
                    [deal.receiverBank]: result
                }
            });

            onChangeDeal('receiverPaymentDetails', result.map(item => {
                return {
                    fieldId: item.fieldId,
                    isRequired: item.isRequired,
                    value: isBankNameField(item.fieldName) ? 1 : ''
                }
            }))
        }

        updateAdditionalFields()
    }, [deal.receiverBank])

    useEffect(() => {
        fetchData();
        tg.ready();
        tg.expand();
    }, [])

    return (
        <ThemeProvider theme={darkTheme}>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <DealForm
                                isAuthorized={isAuthorized}
                                deal={deal}
                                currencies={CURRENCIES}
                                onChangeDeal={onChangeDeal}
                                additionalFieldsOptions={additionalFieldsOptions}
                                onChangeSenderAdditionalField={onChangeSenderAdditionalField}
                                onChangeReceiverAdditionalField={onChangeReceiverAdditionalField}
                                onSendDeal={onSendDeal}
                            />
                        }
                    />
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App