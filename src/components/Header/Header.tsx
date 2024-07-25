import {FC, useEffect, useRef, useState} from 'react';
import c from './Header.module.scss';
import logoImg from '../../assets/img/svg/logo.svg';
import { motion } from 'framer-motion';
import classNames from 'classnames';

const width = 1025;

type tMenuElement = {
  href: string;
  text: string;
};

const Header:FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mobile, setMobile] = useState(false)
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)

  useEffect(() => {
    if (window.visualViewport)
    if (window.visualViewport.width < width) {
      setMobile(true);
    }

    const resizeHandler = () => {
      if (window.visualViewport)
      setMobile(window.visualViewport.width < width);
    }

    const clickHandler = (e: MouseEvent) => {
      if (e.target !== buttonRef.current)
        setMobileMenuOpened(false)
    }


    window.addEventListener('resize', resizeHandler)
    document.addEventListener('click', clickHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
      document.removeEventListener('click', clickHandler)
    }
  }, []);

  const menuElems: tMenuElement[] = [
    {href: '#head', text: 'Начало работы'},
    {href: '#advantages', text: 'Преимущества работы'},
    {href: '#mobileApp', text: 'Приложение'},
    {href: '#contacts', text: 'Контакты'}
  ]

  const menuElemsMap = menuElems.map(el =>
    <li key={el.text} className={c.menuItem}>
      <a className={c.menuLink} href={el.href}>{el.text}</a>
    </li>
  )

  const anim = {
    initial: { opacity: 0},
    animate: { opacity: 1},
    transition: { duration: 0.3 }
  }

  const animBurger = {
    initial: {x: '100%'},
    animate: {x: 0},
    transition: { duration: 0.2 }
  }

  return (
    <motion.header className={classNames(c.header, 'offset', 'maxWidth')} {...anim}>
      <a href={'#'} className={c.logo}>
        <img className={c.logoImg} src={logoImg} alt=""/>
        <span className={c.logoText}>Официальный партнер <br/> г.Омск</span>
      </a>
      {
        !mobile
          ? <>
            <ul className={c.menu}>{menuElemsMap}</ul>
            <div className={c.contact}>
              <div className={c.contactPhone}>8 (3812) 49-46-45</div>
              <a href={'#'} className={c.contactText}>заказать звонок</a>
            </div>
          </>
          : <>
            <button ref={buttonRef} className={classNames(c.burgerIcon, mobileMenuOpened && c.mobileMenuOpened)} onClick={() => setMobileMenuOpened(prev => !prev)}></button>
            {
              mobileMenuOpened && <motion.ul className={classNames(c.burgerMenu, 'offset')} {...animBurger}>
                {menuElemsMap}
                <div className={c.contact}>
                  <div className={c.contactPhone}>8 (3812) 49-46-45</div>
                  <a href={'#'} className={c.contactText}>заказать звонок</a>
                </div>
              </motion.ul>
            }
          </>
      }

    </motion.header>
  );
};

export default Header;