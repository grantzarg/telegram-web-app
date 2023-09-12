import React from "react";
import css from './index.module.css'

const History = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.title}>История операций</div>
            <div className={css.transationsWrapper}>
                <div className={css.transaction}>- 100$ / вывод usdt / 21.09.2023 13:10</div>
                <div className={css.transaction}>+ 50$ / ввод usdt / 22.09.2023 17:35</div>
                <div className={css.transaction}>- 20$ / вывод usdt / 24.09.2023 11:19</div>
                <div className={css.transaction}>+ 50$ / ввод usdt / 24.09.2023 21:35</div>
            </div>
        </div>
    )
}

export default History
