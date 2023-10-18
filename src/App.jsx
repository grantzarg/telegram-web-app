import React, {
  useCallback, useState, useEffect,
} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import DealForm from './containers/DealForm';

import { getRequest, postRequest } from './utils/helper';
import { CURRENCIES } from './utils/constants';
import useTelegram from './hooks/useTelegram';
import { isBankNameField } from './containers/DealForm/helper';
import Loader from './components/Loader';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const { tg } = useTelegram();

  const userId = tg?.initDataUnsafe?.user?.id || 81055437;

  if (!userId) {
    return null;
  }

  const [isLoading, setIsLoading] = useState(false);
  const [additionalFieldsOptions, setAdditionalFieldsOptions] = useState([]);
  const [deal, setDeal] = useState({
    senderBank: null,
    senderCurrency: null,
    receiverBank: null,
    receiverCurrency: null,
    isSbp: false,
    transferAmount: null,
    toSend: false,
    receiverPaymentDetails: [],
  });
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [priceOptions, setPriceOptions] = useState({
    sendAmount: 0,
    receiveAmount: 0,
    sendCurrency: 'USD',
    receiveCurrency: 'USD',
    realExchangeRate: 0,
    clientExchangeRate: 0,
    commisionRate: 0,
  });

  const calculatePrice = async () => {
    const result = await postRequest('https://p2pwallet.ru/Main/CalculateFullCyclePrice', {
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
    await calculatePrice();
    setIsLoading(false);
  }, [deal]);

  const getAdditionalFields = async (bank) => {
    if (!bank) {
      return [];
    }

    try {
      // return await getRequest(`https://p2pwallet.ru/PayMethod/GetFields/${bank}`);
      return await getRequest(`https://www.webapptelegram.ru/Users/GetFields/${bank}`);
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const onSendDeal = async () => {
    setIsLoading(true);

    const data = await postRequest('https://p2pwallet.ru/Main/ConfirmTransferStart', {
      paymentDetails: deal.receiverPaymentDetails,
      userId,
    });

    await postRequest('https://www.webapptelegram.ru/Users/sendDeal', {
      ...data,
      userId,
    });

    setIsLoading(false);

    tg.close();
  };

  useEffect(() => {
    onChangeDeal('senderBank', '');
  }, [deal.senderCurrency]);

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
        isRequired: item.isRequired,
        value: isBankNameField(item.fieldName) ? 1 : '',
      })));
    }

    updateAdditionalFields();
  }, [deal.receiverBank]);

  useEffect(async () => {
    setIsAuthorized(!!userId);
    tg.ready();
    tg.expand();
  }, []);

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
      {isLoading && <Loader />}
    </ThemeProvider>
  );
}

export default App;
