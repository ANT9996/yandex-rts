import {FC, useEffect, useRef, useState} from 'react';
import c from './Form.module.scss'
import Button from "../Button/Button.tsx";
import IMask from 'imask';
import emailjs from '@emailjs/browser';
import { EMAIL, PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../../constants.ts';
import { toast } from 'react-toastify';

emailjs.init({publicKey: PUBLIC_KEY})

const Form:FC = () => {
  const phoneRef = useRef<HTMLInputElement>(null)
  const [fio, setFio] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const submitHandler = () => {
    if (phone.trim().length < 1) return;
    if (fio.trim().length < 1) return;

    setIsLoading(true)

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {fio, phone, email: EMAIL})
    .then(r => {
      console.log(r)
      setFio('')
      setPhone('')
      toast.success('Заявка успешно отправлена!')
    })
    .catch(err => {
      console.error('Ошибка отправки письма: ', err)
      toast.error('Ошибка отправки письма!')
    })
    .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    if (phoneRef.current)
    IMask(phoneRef.current, '+{7}(000)000-00-00')
  }, [])

  return (
    <form className={c.form} onSubmit={(e) => e.preventDefault()}>
      <label className={c.label} htmlFor="fio">
        <span className={c.span}>ФИО</span>
        <input
          className={c.input}
          type={'text'}
          id={'fio'}
          value={fio}
          onChange={(e) => setFio(e.target.value)}
          required
        />
      </label>

      <label className={c.label} htmlFor="phone">
        <span className={c.span}>Телефон</span>
        <input
          ref={phoneRef}
          className={c.input}
          type={'text'}
          id={'phone'}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>

      <div className={c.submitContainer}>
        <Button text={'Отправить'} type={'medium'} submitFunc={() => submitHandler()} isLoading={isLoading}/>
        <div className={c.submitText}>
          Нажимая кнопку, вы соглашаетесь<br/>
          с <a href={'#'}>политикой конфиденциальности</a>
        </div>
      </div>
    </form>
  );
};

export default Form;