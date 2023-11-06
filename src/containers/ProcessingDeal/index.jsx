import React from 'react';
import Button from '@mui/material/Button';
import useTelegram from '../../hooks/useTelegram';
import css from './index.module.css';

function ProcessingDeal() {
  const { tg } = useTelegram();

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.text}>
          Ваша заявка в работе.
          <br />
          Вся информация и обновления по заявке будут в чате.
        </div>
        <Button size="small" variant="contained" sx={{ borderRadius: 25, marginTop: '20px', padding: '10px 20px' }} onClick={() => tg.close()}>
          Вернуться в чат
        </Button>
      </div>
    </div>
  );
}

export default ProcessingDeal;
