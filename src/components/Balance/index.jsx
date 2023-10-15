import React, { useContext } from 'react';
import css from './index.module.css';
import { Context } from '../../context';

function Balance() {
  const { state } = useContext(Context);
  const { balance, exchangeRate } = state;

  const balanceRub = exchangeRate ? (balance * exchangeRate).toFixed() : null;

  const integer = Math.trunc(balance).toString();
  const decimal = String(balance).split('.')[1];

  return (
    <div className={css.balanceWrapper}>
      <div className={css.balance}>
        <span className={css.balanceInteger}>
          {integer}
          .
        </span>
        <span className={css.balanceCents}>{decimal}</span>
        <span className={css.balanceSign}>$</span>
      </div>
      {balanceRub && (
      <div className={css.balanceRub}>
        ~
        {' '}
        {balanceRub}
        {' '}
        RUB
      </div>
      )}
    </div>
  );
}

export default Balance;
