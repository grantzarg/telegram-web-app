import React, {useCallback, useState, useEffect, useContext} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import DealForm from './pages/DealForm';
import Home from './pages/Home';
import Pin from './pages/Pin';
import Receive from './pages/Recieve';
import Send from './pages/Send';
import ReceiveByBank from './pages/ReceiveByBank';
import ReceiveUSDT from './pages/ReceiveUSDT';
import ReceiveByPerson from './pages/ReceiveByPerson';

import {CURRENCIES, getRequest} from './helper';
import {useTelegram} from './hooks/useTelegram';
import {Context} from "./context";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => {
    const {tg, queryId} = useTelegram();
    const { dispatch } = useContext(Context);

    const [deal, setDeal] = useState({
        sender_bank: null,
        sender_currency: null,
        receiver_bank: null,
        receiver_currency: null,
        is_sbp: false,
        sum: null,
        sumType: 'sumToReceive'
    });

    const [isAuthorized, setIsAuthorized] = useState(false)

    const onChangeDeal = (field, value) => {
        setDeal({
            ...deal,
            [field]: value
        })
    }

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

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getRequest('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=rub');
                const {tether} = result

                dispatch({ type: 'SET_EXCHANGE_RATE', payload: tether.rub })
            } catch (error) {
                // Обработка ошибок
            }
        }

        fetchData();
        tg.ready();
        tg.expand();
    }, [])

    return (
        <ThemeProvider theme={darkTheme}>
            <Router>
                <Routes>
                    <Route path="/" element={isAuthorized ? <Home /> : <Pin onAuthorize={() => setIsAuthorized(true)} />}/>

                    <Route path="/deal" element={<DealForm isAuthorized={isAuthorized} deal={deal} currencies={CURRENCIES} onChangeDeal={onChangeDeal} onSendDeal={onSendDeal}/>}/>

                    <Route path="/receive" element={<Receive isAuthorized={isAuthorized} />}/>
                    <Route path="/receive-bank" element={<ReceiveByBank isAuthorized={isAuthorized} />}/>
                    <Route path="/receive-usdt" element={<ReceiveUSDT isAuthorized={isAuthorized} />}/>
                    <Route path="/receive-person" element={<ReceiveByPerson isAuthorized={isAuthorized} />}/>

                    <Route path="/send" element={<Send isAuthorized={isAuthorized} />}/>
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App