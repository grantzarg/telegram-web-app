import React, {useCallback, useState, useEffect, Fragment} from 'react'
import DealForm from '../../pages/DealForm'
import Home from '../../pages/Home'
import Pin from '../../pages/Pin'
import Receive from '../../pages/Recieve'
import Send from '../../pages/Send'
import {CURRENCIES} from "../../helper";
import {useTelegram} from "../../hooks/useTelegram";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import ReceiveByBank from "../../pages/ReceiveByBank";
import ReceiveUSDT from "../../pages/ReceiveUSDT";
import ReceiveByPerson from "../../pages/ReceiveByPerson";

const App = () => {
    const {tg, queryId} = useTelegram();

    const [deal, setDeal] = useState({
        sender_bank: null,
        sender_currency: null,
        receiver_bank: null,
        receiver_currency: null,
        is_sbp: false
    });

    const [isAuthorized, setIsAuthorized] = useState(true)

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

        try {
            const result = await fetch('https://www.webapptelegram.ru/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            console.log(result)
        } catch (e) {
            console.log(e)
        }
    }, [deal])

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <Router>
            {/*<DealForm deal={deal} currencies={CURRENCIES} onChangeDeal={onChangeDeal} onSendDeal={onSendDeal}/>*/}
            <Routes>
                <Route path="/" element={<Home isAuthorized={isAuthorized} />}/>

                <Route path="/auth" element={<Pin onAuthorize={() => setIsAuthorized(true)} />}/>

                <Route path="/deal" element={<DealForm isAuthorized={isAuthorized} deal={deal} currencies={CURRENCIES} onChangeDeal={onChangeDeal} onSendDeal={onSendDeal}/>}/>

                <Route path="/receive" element={<Receive isAuthorized={isAuthorized} />}/>
                <Route path="/receive-bank" element={<ReceiveByBank isAuthorized={isAuthorized} />}/>
                <Route path="/receive-usdt" element={<ReceiveUSDT isAuthorized={isAuthorized} />}/>
                <Route path="/receive-person" element={<ReceiveByPerson isAuthorized={isAuthorized} />}/>

                <Route path="/send" element={<Send isAuthorized={isAuthorized} />}/>
            </Routes>
        </Router>
    )
}

export default App