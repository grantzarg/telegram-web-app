import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import css from './index.module.css';

function Loader() {
  return (
    <div className={css.wrapper}>
      <CircularProgress c size={70} />
    </div>
  );
}

export default Loader;
