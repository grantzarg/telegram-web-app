import React, {useEffect, useState, useRef, Fragment} from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { useNavigate } from "react-router-dom";
import css from './index.module.css'
import classNames from "classnames";

const Pin = ({onAuthorize}) => {
    const navigate = useNavigate();

    const [value, setValue] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [isError, setIsError] = useState(false)
    const keyboard = useRef(null)

    const handleChange = (val) => {
        setIsError(false)

        if (val.length > 4) {
            return
        }

        setValue(val)
    }

    const handleComplete = () => {
        if (value === '1234') {
            setIsValid(true)
            setTimeout(onAuthorize)

            setTimeout(() => navigate('/'), 1500)
        } else {
            setIsError(true)
            // window.telegram ? window.Telegram.WebApp.showAlert('Неверный пароль. Попробуйте еще.') : alert('Неверный пароль. Попробуйте еще.')
            setValue('')
            keyboard.current.clearInput()
        }
    }

    useEffect(() => {
        if (value.length === 4) {
            setTimeout(handleComplete, 500)
        }
    }, [value])

    return (
        <div className={css.wrapper}>
            <div className={css.inner}>
                <div className={css.title}>Введите пароль</div>
                {isValid ?
                    <div>
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#7BC26F" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"></path></g></svg>
                        <div className={css.successText}>Безопасность превыше всего</div>
                    </div>
                    : <Fragment>
                    <div className={css.digitsWrapper}>
                        <div className={classNames(css.digit, value.length >= 1 && css.digitActive)}/>
                        <div className={classNames(css.digit, value.length >= 2 && css.digitActive)}/>
                        <div className={classNames(css.digit, value.length >= 3 && css.digitActive)}/>
                        <div className={classNames(css.digit, value.length === 4 && css.digitActive)}/>
                        {isError && <div className={css.error}>Неверный пароль</div>}
                    </div>
                    <Keyboard
                        keyboardRef={(r) => (keyboard.current = r)}
                        theme={
                            `hg-theme-default hg-theme-numeric hg-layout-numeric numeric-theme ${css.keyboard}`
                        }
                        layout={{
                            default: ["1 2 3", "4 5 6", "7 8 9", "clear 0 {bksp}"]
                        }}
                        buttonTheme={[
                            {
                                class: `${css.button}`,
                                buttons: "1 2 3 4 5 6 7 8 9 0 clear {bksp}"
                            },
                        ]}
                        mergeDisplay
                        display={{
                            "{bksp}": "&#8592"
                        }}
                        maxLength={4}
                        onChange={handleChange}
                    />
                </Fragment>
                }
                <div className={css.disclaimer}>
                    В целях безопасности никому не&nbsp;сообщайте пароль, даже нам
                </div>
            </div>
        </div>
    )
}

export default Pin
