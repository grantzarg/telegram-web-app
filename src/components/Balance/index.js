import React from "react";
import css from './index.module.css'

const Balance = () => {
    return (
        <div className={css.balanceWrapper}>
            <div className={css.balance}>
                <span className={css.balanceInteger}>100.</span>
                <span className={css.balanceCents}>00</span>
                <span className={css.balanceSign}>$</span>
            </div>
            <div className={css.balanceRub}>
                ~ 9821 RUB
            </div>
        </div>
    )
}

export default Balance
