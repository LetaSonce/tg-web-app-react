import React, { useEffect, useState, useCallback } from 'react';
import {useTelegram} from '../../hooks/useTelegram';
import './Form.css';

const Form = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [dateExpired, setDateExpired] = useState('')
  const [cvCode, setCvCode] = useState('')

  const {WebApp} = useTelegram()

  const onSendData = useCallback(() => {
    const data = {
      cardNumber,
      dateExpired,
      cvCode
    }
    WebApp.sendData(JSON.stringify(data))
  }, [WebApp, cardNumber, dateExpired, cvCode])

  useEffect(() => {
    WebApp.MainButton.setParams({
      text: 'Next'
    })

    WebApp.onEvent('mainButtonClicked', onSendData)

    if(!cardNumber || !dateExpired || !cvCode) {
      WebApp.MainButton.hide()
    } else {
      WebApp.MainButton.show()

    return () => {
      WebApp.offEvent('mainButtonClicked', onSendData)
    }
    }
  }, [WebApp.MainButton, WebApp, cardNumber, dateExpired, cvCode, onSendData])

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
        onChange={onChangeCardNumber}
      />
      <input 
        className={'input'}
        type="text"
        placeholder={'date expired'}
        value={dateExpired}
        onChange={onChangeDateExpired}
      />
      <input
        className={'input'}
        type="text"
        placeholder={'cvc2/cvv2'}
        value={cvCode}
        onChange={onChangeCvCode}
      />
    </div>
  )
}

export default Form;