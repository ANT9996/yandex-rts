import React, {FC} from 'react';
import c from './Header.module.scss';
import logoImg from '../../assets/img/svg/logo.svg';

const Header:FC = () => {
  return (
    <header className={`${c.header} offset`}>
      <div className={c.logo}>
        <img className={c.logoImg} src={logoImg+''} alt=""/>
        <span className={c.logoText}>Официальный партнер <br/> г.Омск</span>
      </div>
      <ul className={c.menu}>
        <li className={c.menuItem}>
          <a className={c.menuLink} href="#">Начало работы</a>
        </li>
        <li className={c.menuItem}>
          <a className={c.menuLink} href="#">Преимущества работы</a>
        </li>
        <li className={c.menuItem}>
          <a className={c.menuLink} href="#">Приложение</a>
        </li>
        <li className={c.menuItem}>
          <a className={c.menuLink} href="#">Контакты</a>
        </li>
      </ul>
      <div className={c.contact}>
        <div className={c.contactPhone}>8 (3812) 49-46-45</div>
        <span className={c.contactText}>заказать звонок</span>
      </div>
    </header>
  );
};

export default Header;