import React, {
  useCallback, useState, useEffect,
} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import DealForm from './containers/DealForm';
import ProcessingDeal from './containers/ProcessingDeal';

import { getRequest, postRequest } from './utils/helper';
import { CURRENCIES, RU_BANKS } from './utils/constants';
import useTelegram from './hooks/useTelegram';
import { isBankNameField } from './containers/DealForm/helper';
import Loader from './components/Loader';
import { getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage } from './utils/browser';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const getInitialDeal = () => {
  const savedDeal = getFromLocalStorage('deal');

  if (savedDeal) {
    return savedDeal;
  }

  return {
    senderBank: null,
    senderCurrency: null,
    senderName: null,
    receiverBank: null,
    receiverCurrency: null,
    transferAmount: null,
    toSend: false,
    receiverPaymentDetails: [],
  };
};

function App() {
  const { tg } = useTelegram();

  const userId = tg?.initDataUnsafe?.user?.id || 81055437;

  if (!userId) {
    return null;
  }

  const [isLoading, setIsLoading] = useState(false);
  const [additionalFieldsOptions, setAdditionalFieldsOptions] = useState([]);
  const [deal, setDeal] = useState(getInitialDeal());
  const [isProcessingDeal, setIsProcessingDeal] = useState(false);
  const [priceOptions, setPriceOptions] = useState({
    sendAmount: 0,
    receiveAmount: 0,
    sendCurrency: 'USD',
    receiveCurrency: 'USD',
    realExchangeRate: 0,
    clientExchangeRate: 0,
    commisionRate: 0,
  });
  const [agreements, setAgreements] = useState({
    agreeSenderData: true,
    agreeReceiverData: true,
    agreeSendReceipt: true,
  });

  const calculatePrice = async () => {
    const result = await postRequest('https://p2pwallet.ru:5000/Main/CalculateFullCyclePrice', {
      ...deal,
      userId,
    });

    setPriceOptions(result);
  };

  const onChangeDeal = useCallback((field, value) => {
    setDeal((prevDeal) => ({
      ...prevDeal,
      [field]: value,
    }));
  }, [deal]);

  const onChangeAgreements = useCallback((field, value) => {
    setAgreements((prevAgreements) => ({
      ...prevAgreements,
      [field]: value,
    }));
  }, [agreements]);

  const onChangeReceiverAdditionalField = useCallback((index, value) => {
    const updatedItems = [...deal.receiverPaymentDetails];

    updatedItems[index] = { ...updatedItems[index], value };

    setDeal((prevDeal) => ({
      ...prevDeal,
      receiverPaymentDetails: updatedItems,
    }));
  }, [deal]);

  const onCalculatePrice = useCallback(async () => {
    setIsLoading(true);
    // await calculatePrice();
    setIsLoading(false);
  }, [deal]);

  const getAdditionalFields = async (bank) => {
    if (!bank) {
      return [];
    }

    try {
      return await getRequest(`https://www.webapptelegram.ru/Users/GetFields/${bank}`);
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const onSendDeal = async () => {
    setIsLoading(true);

    const data = await postRequest('https://p2pwallet.ru:5000/Main/ConfirmTransferStart', {
      paymentDetails: deal.receiverPaymentDetails,
      senderName: deal.senderName,
      userId,
    });

    setIsLoading(false);

    if (data.priceDetails) {
      await postRequest('https://www.webapptelegram.ru/Users/sendDeal', {
        ...data,
        deal,
        userId,
      });

      // removeFromLocalStorage('deal');

      tg.close();
    }
  };

  const checkStatus = async () => {
    // const { status } = await getRequest(`https://p2pwallet.ru:5000/Main/GetStatus/${userId}`);
    const status = 'Start'
    const isProcessing = status !== 'Start' && status !== 'WaitingForTransferConfirmation';

    if (isProcessing) {
      setIsProcessingDeal(true);
    }
  };

  useEffect(() => {
    if (!deal.receiverBank) {
      return;
    }

    async function updateAdditionalFields() {
      const result = await getAdditionalFields(deal.receiverBank);

      setAdditionalFieldsOptions((prevState) => ({
        ...prevState,
        [deal.receiverBank]: result,
      }));

      onChangeDeal('receiverPaymentDetails', result.map((item) => ({
        fieldId: item.fieldId,
        fieldName: item.fieldName,
        type: item.type,
        isRequired: item.isRequired,
        value: isBankNameField(item.fieldName)
          ? RU_BANKS[deal.receiverBank] || ''
          : '',
      })));
    }

    updateAdditionalFields();
  }, [deal.receiverBank]);

  useEffect(() => {
    saveToLocalStorage('deal', deal);
  }, [deal]);

  useEffect(async () => {
    await checkStatus();
    const savedDeal = getFromLocalStorage('deal');

    if (savedDeal) {
      setDeal(savedDeal);
    }
    tg.ready();
    tg.expand();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      {
        isProcessingDeal
          ? <ProcessingDeal isLoading={isLoading} />
          : (
            <DealForm
              isLoading={isLoading}
              deal={deal}
              agreements={agreements}
              currencies={CURRENCIES}
              priceOptions={priceOptions}
              additionalFieldsOptions={additionalFieldsOptions}
              onChangeReceiverAdditionalField={onChangeReceiverAdditionalField}
              onCalculatePrice={onCalculatePrice}
              onChangeDeal={onChangeDeal}
              onChangeAgreements={onChangeAgreements}
              onSendDeal={onSendDeal}
            />
          )
      }
      {isLoading && <Loader />}
    </ThemeProvider>
  );
}

export default App;
