import {FC} from 'react';
import c from './Footer.module.scss'
import classNames from 'classnames';

const Footer:FC = () => {
  return (
    <footer className={c.footerContainer}>
      <div className={classNames(c.footer, 'maxWidth', 'offset')}>
        <ul className={c.corpInfo}>
          <li className={c.corpItem}>
            Официальный партнер Яндекс Такси
            г.Омск
          </li>
          <li className={c.corpItem}>
            ОГРНИП 12345432112344
          </li>
        </ul>

        <ul className={c.menu}>
          <li className={c.menuItem}><a className={c.menuLink} href="#head">Начало работы</a></li>
          <li className={c.menuItem}><a className={c.menuLink} href="#advantages">Преимущества работы</a></li>
          <li className={c.menuItem}><a className={c.menuLink} href="#">Отзывы</a></li>
          <li className={c.menuItem}><a className={c.menuLink} href="#mobileApp">Приложение</a></li>
          <li className={c.menuItem}><a className={c.menuLink} href="#contacts">Контакты</a></li>
        </ul>

        <a href='#' className={c.policy}>Политика конфиденциальности</a>
      </div>
    </footer>
  );
};

export default Footer;