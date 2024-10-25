import React, { useEffect } from 'react';
import {useTelegram} from '../../hooks/useTelegram';
import './Form.css';

const Form = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [dateExpired, setDateExpired] = useState('')
  const [cvCode, setCvCode] = useState('')

  const {WebApp} = useTelegram()

  useEffect(() => {
    WebApp.MainButton.setParams({
      text: 'Next'
    })
  }, [])

  useEffect(() => {
    if(!cardNumber || !dateExpired || !cvCode) {
      WebApp.MainButton.hide()
    } else {
      WebApp.MainButton.show()
    }
  }, [cardNumber, dateExpired, cvCode])

  const onChangeCardNumber = (e) => {
    setCardNumber(e.target.value)
  }

  const onChangeDateExpired = (e) => {
    setDateExpired(e.target.value)
  }

  const onChangeCvCode = (e) => {
    setCvCode(e.target.value)
  }

  return (
    <div className={"form"}>
      <h3>Enter your card number:</h3>
      <input 
        className={'input'}
        type="text"
        placeholder={'card number'}
        value={cardNumber}
        onChange={setCardNumber}
      />
      <input 
        className={'input'}
        type="text"
        placeholder={'date expired'}
        value={dateExpired}
        onChange={setDateExpired}
      />
      <input
        className={'input'}
        type="text"
        placeholder={'cvc2/cvv2'}
        value={cvCode}
        onChange={setCvCode}
      />
    </div>
  )
}

export default Form;