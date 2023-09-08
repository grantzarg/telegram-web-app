import React, {useCallback, useState, useEffect, Fragment} from 'react'
import DealForm from '../DealForm'
import {useTelegram} from "../../hooks/useTelegram";
import {CURRENCIES} from "../../helper";

const App = () => {
    const {tg, queryId} = useTelegram();

    const [deal, setDeal] = useState({
        sender_bank: null,
        sender_currency: null,
        receiver_bank: null,
        receiver_currency: null,
        is_sbp: false
    });

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
        <Fragment>
            <DealForm deal={deal} currencies={CURRENCIES} onChangeDeal={onChangeDeal} onSendDeal={onSendDeal}/>
        </Fragment>
    )
}

export default App