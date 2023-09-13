import React, {Fragment} from "react";
import css from './index.module.css'
import BackButton from "../../components/BackButton";
import Balance from "../../components/Balance";

const ReceiveUSDT = () => {
    return (
        <Fragment>
            <Balance/>
            <div className={css.wrapper}>
                <div className={css.title}>Пополнить</div>

                <div className={css.qrCodeWrapper}>
                </div>

                <div className={css.walletAddress}>TLovTQBzCqJhrB71b8SrtnPtvhGFP4GNxk</div>
                <div className={css.walletAddress}>Ваш адрес USDT</div>
            </div>
            <BackButton route={'/receive'} title={'Назад'}/>
        </Fragment>
    )
};

export default ReceiveUSDT