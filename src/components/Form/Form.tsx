import {FC, useState} from 'react';
import c from './Form.module.scss'
import Button from "../Button/Button.tsx";

const Form:FC = () => {
  const [fio, setFio] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  return (
    <form className={c.form}>
      <label className={c.label} htmlFor="fio">
        <span className={c.span}>ФИО</span>
        <input
          className={c.input}
          type={'text'}
          id={'fio'}
          value={fio}
          onChange={(e) => setFio(e.target.value)}
        />
      </label>

      <label className={c.label} htmlFor="phone">
        <span className={c.span}>Телефон</span>
        <input
          className={c.input}
          type={'text'}
          id={'phone'}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>

      <div className={c.submitContainer}>
        <Button text={'Отправить'} type={'medium'}/>
        <div className={c.submitText}>
          Нажимая кнопку, вы соглашаетесь<br/>
          с <span>политикой конфиденциальности</span>
        </div>
      </div>
    </form>
  );
};

export default Form;