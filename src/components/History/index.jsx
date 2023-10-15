import React from 'react';
import classnames from 'classnames';
import css from './index.module.css';

function History() {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>История операций</div>
      <div className={css.transationsWrapper}>
        <div className={classnames(css.transaction, css.transactionOutcome)}>
          <span>- 100$</span>
          {' '}
          / вывод usdt / 21.09.2023 13:10
        </div>
        <div className={classnames(css.transaction, css.transactionIncome)}>
          <span>+ 50$</span>
          {' '}
          / ввод usdt / 22.09.2023 17:35
        </div>
        <div className={classnames(css.transaction, css.transactionOutcome)}>
          <span>- 20$</span>
          {' '}
          / вывод usdt / 24.09.2023 11:19
        </div>
        <div className={classnames(css.transaction, css.transactionIncome)}>
          <span>+ 50$</span>
          {' '}
          / ввод usdt / 24.09.2023 21:35
        </div>
      </div>
    </div>
  );
}

export default History;
