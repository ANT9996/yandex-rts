import {FC} from 'react';
import c from './Button.module.scss'

interface iButton {
  text?: string;
  type: 'small' | 'medium'
}

const Button:FC<iButton> = ({text, type}) => {
  return (
    <button className={`${c.button} ${type === 'medium' ? c.buttonMedium : ''}`}>
      {text}
    </button>
  );
};

export default Button;