import SenderStep from './steps/SenderStep'
import ReceiverStep from './steps/ReceiverStep'
import SumStep from './steps/SumStep'

export const STEPS = [
    {label: 'Данные отправителя', component: SenderStep},
    {label: 'Данные получателя', component: ReceiverStep},
    {label: 'Сумма перевода', component: SumStep}
]

export const isBankNameField = (fieldName) => {
    return fieldName === 'Название банка' || fieldName === 'Bank name'
}