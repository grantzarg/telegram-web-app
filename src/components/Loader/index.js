import React from 'react';
import css from './index.module.css';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
    return (
        <div className={css.wrapper}>
            <CircularProgress c size={70} />
        </div>
    )
}

export default Loader;
