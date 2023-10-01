import SenderStep from './Steps/SenderStep'
import ReceiverStep from './Steps/ReceiverStep'
import SumStep from './Steps/SumStep'

export const STEPS = [
    {label: 'Данные отправителя', component: SenderStep},
    {label: 'Данные получателя', component: ReceiverStep},
    {label: 'Сумма перевода', component: SumStep}
]

export const isBankNameField = (fieldName) => {
    return fieldName === 'Название банка' || fieldName === 'Bank name'
}