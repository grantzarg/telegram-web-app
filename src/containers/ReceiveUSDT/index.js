import React, {Fragment, useState} from "react";
import css from './index.module.css'
import BackButton from "../../components/BackButton";
import Balance from "../../components/Balance";
import classnames from "classnames";
import Snackbar from "@mui/material/Snackbar";

const ReceiveUSDT = () => {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const walletAddress = 'TLovTQBzCqJhrB71b8SrtnPtvhGFP4GNxk';

    const handleClickCopy = () => {
        setOpenSnackBar(true)

        navigator.clipboard.writeText(walletAddress.toString())
    }

    const handleClickShare = async () => {
        try {
            await navigator.share({text: walletAddress})
        } catch (err) {
           console.error(err)
        }
    }

    return (
        <Fragment>
            <Balance/>
            <div className={css.wrapper}>
                <div className={css.title}>Пополнить</div>

                <div className={css.walletInfo}>
                    <div className={css.qrCodeWrapper}>
                        <img width={200} src={'../../images/qr-code.png'}/>
                    </div>
                    <div className={css.walletAddressWrapper}>
                        <div className={css.walletAddress}>{walletAddress}</div>
                        {/*<CopyButton/>*/}
                    </div>
                    <div className={css.walletAddressHint}>Ваш адрес USDT</div>
                </div>
                <div className={css.text}>
                    На этот адрес отправляйте только <b>USDT TRC20</b>. Другие монеты могут не дойти и будут утрачены.
                </div>
            </div>
            <div className={css.actionButtonsWrapper}>
                <div className={classnames(css.actionButton, css.actionButtonCopy)} onClick={handleClickCopy}>
                    <svg style={{width: '20px'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2994 1.99988C15.9337 1.99896 16.4964 1.99815 17.0226 2.20134C17.5489 2.40452 17.9651 2.78322 18.4342 3.21016C19.1119 3.8269 19.7904 4.44277 20.47 5.05741C21.0069 5.54296 21.4836 5.97414 21.743 6.55981C22.0024 7.14548 22.0013 7.78827 22.0002 8.51212C21.9977 10.03 22 11.5479 22 13.0658C22.0001 13.9523 22.0001 14.7161 21.9179 15.3278C21.8297 15.9833 21.631 16.6117 21.1213 17.1213C20.6117 17.631 19.9833 17.8297 19.3278 17.9179C18.7161 18.0001 17.9523 18.0001 17.0658 18H12.9342C12.0477 18.0001 11.2839 18.0001 10.6722 17.9179C10.0167 17.8297 9.38835 17.631 8.87868 17.1213C8.36902 16.6117 8.17028 15.9833 8.08215 15.3278C7.99991 14.7161 7.99995 13.9523 8 13.0658L8.00001 7C8.00001 6.08546 7.99788 5.29896 8.08215 4.67221C8.17028 4.01669 8.36902 3.38834 8.87868 2.87868C9.38835 2.36902 10.0167 2.17027 10.6722 2.08214C11.2839 1.99991 12.0477 1.99995 12.9342 2C12.956 2 12.978 2 13 2C13.7665 2 14.5329 2.00098 15.2994 1.99988Z" fill="#FFFFFF"></path> <path d="M15.9843 18.9999H12.8813C12.0375 19 11.2176 19.0001 10.539 18.9089C9.77323 18.8059 8.89833 18.5551 8.17159 17.8283C7.44485 17.1016 7.19402 16.2267 7.09107 15.461C6.99983 14.7823 6.99992 13.9624 7.00001 13.1187L7.00001 6.88116C6.99997 6.58272 6.99994 6.28727 7.00395 5.99999C6.2364 5.99955 5.46424 5.97511 4.70072 6.06939C4.09998 6.14358 3.51831 6.30999 3.02408 6.7426C2.92414 6.83008 2.83012 6.9241 2.74264 7.02404C2.31003 7.51827 2.14362 8.09994 2.06943 8.70069C1.99993 9.26352 1.99996 9.96136 2 10.771L2 17.0658C1.99995 17.9523 1.99991 18.7161 2.08215 19.3278C2.17028 19.9833 2.36902 20.6116 2.87868 21.1213C3.38835 21.631 4.0167 21.8297 4.67221 21.9178C5.28387 22.0001 6.04769 22 6.93417 22L11.9039 22C12.4011 22 12.8301 22 13.184 21.9727C13.5572 21.9439 13.9292 21.8804 14.2905 21.7082C14.9117 21.4122 15.4122 20.9117 15.7082 20.2905C15.9005 19.887 15.9622 19.442 15.9843 18.9999Z" fill="#FFFFFF"></path> </g></svg>
                    <span>Копировать</span>
                </div>
                <div className={classnames(css.actionButton, css.actionButtonShare)} onClick={handleClickShare}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#FFFFFF"></path> </g></svg>                    <span>Поделиться</span>
                </div>
            </div>
            <BackButton route={'/receive'} title={'Назад'}/>
            <Snackbar
                open={openSnackBar}
                onClose={() => setOpenSnackBar(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={2000}
                message={'Скопировано'}
            />
        </Fragment>
    )
};

export default ReceiveUSDT