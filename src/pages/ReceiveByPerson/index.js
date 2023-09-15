import React, {Fragment, useState} from "react";
import css from './index.module.css'
import BackButton from "../../components/BackButton";
import Balance from "../../components/Balance";

const ReceiveByPerson = () => {
    const [deal, setDeal] = useState({
        currency: null,
        user: null,
        sum: ''
    });

    return (
        <Fragment>
            <Balance/>
            <div className={css.wrapper}>
                <div className={css.title}>Пополнить</div>

            </div>
            <BackButton route={'/receive'} title={'Назад'}/>
        </Fragment>
    )
};

export default ReceiveByPerson