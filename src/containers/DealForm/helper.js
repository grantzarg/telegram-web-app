import SenderStep from './Steps/SenderStep'
import ReceiverStep from './Steps/ReceiverStep'
import SumStep from './Steps/SumStep'
import CredentialsStep from "./Steps/CredentialsStep";
import Confirmation from "./Steps/ConfirmationStep";

export const STEPS = [
    {
        label: 'Реквизиты отправителя',
        component: SenderStep,
        buttonText: 'Продолжить',
        action: 'next'
    },
    {
        label: 'Реквизиты получателя',
        component: ReceiverStep,
        buttonText: 'Продолжить',
        action: 'next'
    },
    {
        label: 'Сумма перевода',
        component: SumStep,
        buttonText: 'Рассчитать',
        action: 'calculatePrice'
    },
    {
        label: 'Расчёт стоимости',
        component: Confirmation,
        buttonText: 'Продолжить',
        action: 'next'
    },
    {
        label: 'Данные получателя',
        component: CredentialsStep,
        buttonText: 'Создать заявку',
        action: 'sendDeal'
    },
]

export const isBankNameField = (fieldName) => {
    return fieldName === 'Название банка' || fieldName === 'Bank name'
}