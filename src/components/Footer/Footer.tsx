import {FC} from 'react';
import c from './Footer.module.scss'

const Footer:FC = () => {
  return (
    <footer className={c.footerContainer}>
      <div className={`${c.footer} maxWidth offset`}>
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
          <li className={c.menuItem}><a className={c.menuLink} href="#">Начало работы</a></li>
          <li className={c.menuItem}><a className={c.menuLink} href="#">Преимущества работы</a></li>
          <li className={c.menuItem}><a className={c.menuLink} href="#">Отзывы</a></li>
          <li className={c.menuItem}><a className={c.menuLink} href="#">Приложение</a></li>
          <li className={c.menuItem}><a className={c.menuLink} href="#">Контакты</a></li>
        </ul>

        <div className={c.policy}>Политика конфиденциальности</div>
      </div>
    </footer>
  );
};

export default Footer;