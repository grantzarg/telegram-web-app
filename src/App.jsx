import React, {useCallback, useState, useEffect, useContext} from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import DealForm from './containers/DealForm';
import Confirmation from './containers/DealForm/Steps/ConfirmationStep';

import {getRequest, postRequest} from './utils/helper';
import {CURRENCIES} from './utils/constants'
import {useTelegram} from './hooks/useTelegram';
import {Context} from "./context";
import {isBankNameField} from "./containers/DealForm/helper";
import Loader from "./components/Loader";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => {
    const {tg} = useTelegram();
    const { dispatch } = useContext(Context);

    const userId = tg?.initDataUnsafe?.user?.id || 81055437;
    if (!userId) {
        return null;
    }

    const [isLoading, setIsLoading] = useState(false);
    const [additionalFieldsOptions, setAdditionalFieldsOptions] = useState([])
    const [deal, setDeal] = useState({
        senderBank: null,
        senderCurrency: null,
        receiverBank: null,
        receiverCurrency: null,
        isSbp: false,
        transferAmount: null,
        toSend: false,
        receiverPaymentDetails: []
    });
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [isPriceCalculated, setIsPriceCalculated] = useState(true)
    const [priceOptions, setPriceOptions] = useState({
        sendAmount: 0,
        receiveAmount: 0,
        sendCurrency: 'USD',
        receiveCurrency: 'USD',
        realExchangeRate: 0,
        clientExchangeRate: 0,
        commisionRate: 0
    })

    const onChangeDeal = useCallback((field, value) => {
        setDeal(prevDeal => {
            return {
                ...prevDeal,
                [field]: value
            };
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

    const onCalculatePrice = useCallback(async () => {
        setIsLoading(true)
        await calculatePrice()
        setIsLoading(false)
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

    const calculatePrice = async () => {
        const result = await postRequest(`https://p2pwallet.ru/Main/CalculateFullCyclePrice`, {
            ...deal,
            userId,
        });

        setPriceOptions(result)
        setIsPriceCalculated(true)
    }

    const onSendDeal = async () => {
        const data = await postRequest(`https://p2pwallet.ru/Main/ConfirmTransferStart`, {
            paymentDetails: deal.receiverPaymentDetails,
            userId
        });

        const result = await postRequest('https://www.webapptelegram.ru/sendDeal', {
            ...data,
            userId
        });
        tg.close();
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
                    fieldName: item.fieldName,
                    isRequired: item.isRequired,
                    value: isBankNameField(item.fieldName) ? 1 : ''
                }
            }))
        }

        updateAdditionalFields()
    }, [deal.receiverBank])

    useEffect(async () => {
        tg.ready();
        tg.expand();
    }, [])

    return (
        <ThemeProvider theme={darkTheme}>
            <DealForm
                isLoading={isLoading}
                isAuthorized={isAuthorized}
                deal={deal}
                currencies={CURRENCIES}
                priceOptions={priceOptions}
                additionalFieldsOptions={additionalFieldsOptions}
                onChangeReceiverAdditionalField={onChangeReceiverAdditionalField}
                onCalculatePrice={onCalculatePrice}
                onChangeDeal={onChangeDeal}
                onSendDeal={onSendDeal}
            />
            {isLoading && <Loader/>}
        </ThemeProvider>
    )
}

export default App