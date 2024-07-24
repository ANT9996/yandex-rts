import {FC} from 'react';
import c from './Button.module.scss'

interface iButton {
  text?: string;
  type: 'small' | 'medium'
  submitFunc?: () => void;
  isLoading?: boolean;
}

const Button:FC<iButton> = ({text, type, submitFunc, isLoading}) => {
  return (
    <button 
      className={`${c.button} ${type === 'medium' ? c.buttonMedium : ''}`} 
      onClick={submitFunc} 
      disabled={isLoading}
    >
      {isLoading ? 'Отправка...' : text}
    </button>
  );
};

export default Button;