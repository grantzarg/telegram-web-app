import React from 'react';
import css from '../index.module.css';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from "@mui/material/TextField";

const SumStep = ({onChangeDeal, deal}) => {
    const handleChangeSumType = (event) => {
        onChangeDeal('toSend', event.target.value === 'sumToSend')
    };

    const handleChangeSum = (e) => {
        const regex = /^[0-9\b]+$/;

        if (e.target.value === "" || regex.test(e.target.value)) {
            onChangeDeal('transferAmount', e.target.value);
        }
    };

    return (
        <div className={css.sumWrapper}>
            <FormControl className={css.sumType} fullWidth>
                <Select
                    value={deal.toSend ? 'sumToSend' : 'sumToReceive'}
                    sx={{
                        width: '100%',
                        '& fieldset': { borderRadius: 25 }
                    }}
                    onChange={handleChangeSumType}
                >
                    <MenuItem value={'sumToSend'}>Сумма к отправке</MenuItem>
                    <MenuItem value={'sumToReceive'}>Сумма к получению</MenuItem>
                </Select>
            </FormControl>
            <TextField
                className={css.sumInput}
                label="Введите сумму"
                variant="outlined"
                value={deal.sum}
                InputProps={
                    {
                        style: {
                            borderRadius: "25px",
                            width: '100%'
                        }
                    }
                }
                onChange={handleChangeSum}
            />
        </div>
    )
}

export default SumStep