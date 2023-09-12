import React from 'react';
import css from '../index.module.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    button: {
        textTransform: 'initial',
    }
}));

const SumStep = ({onChangeDeal}) => {
    const [sumType, setSumType] = React.useState('sumToSend');
    const classes = useStyles();

    const handleChangeSumType = (event, value) => {
        setSumType(value);
    };

    return (
        <div className={css.sumWrapper}>
            <ToggleButtonGroup
                className={css.buttonWrapper}
                value={sumType}
                exclusive
                onChange={handleChangeSumType}
                aria-label="text alignment"
            >
                <ToggleButton value="sumToSend" className={css.button}>
                    Знаю сумму к отправке
                </ToggleButton>
                <ToggleButton value="sumToReceive" className={css.button}>
                    Знаю сумму к получению
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}

export default SumStep