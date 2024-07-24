import {FC} from 'react';
import Header from "../../components/Header/Header.tsx";
import Container from "../../components/Contaner/Container.tsx";
import Button from "../../components/Button/Button.tsx";
import Form from "../../components/Form/Form.tsx";

import c from './Home.module.scss'
import img1 from '../../assets/img/webp/image 2.webp'
import img2 from '../../assets/img/webp/image.webp'
import img3 from '../../assets/img/webp/app-background.webp'
import img4 from '../../assets/img/webp/form-background.webp'
import Footer from "../../components/Footer/Footer.tsx";
import { motion } from 'framer-motion';

const Home:FC = () => {

  const anim = {
    transition: {duration: .7},
    initial: {opacity: 0},
    animate: {opacity: 1},
  }

  return (
    <div className={c.App}>
      <Header/>
      <main>
        <Container image={img1} id={'head'}>
          <h1 className={c.title}>
            Зарабатывайте
            от&nbsp;50&nbsp;000<span>р</span> в&nbsp;месяц</h1>
          <p className={c.text}>
            Подключение за 5 минут
            Работайте тогда, когда удобно
            Крупнейший автопарк в г.Омске
          </p>
          <a href="#">
            <Button text={'Заполните анкету'} type={'small'}/>
          </a>
        </Container>

        <motion.section className={`${c.start} offset maxWidth`} id='start' {...anim}>
          <h2 className={`${c.head} ${c.startHead}`}>Начало работы</h2>
          <ul className={c.startMenu}>
            <li className={c.startMenuItem}>
              <div className={c.itemContainer}>
                <div className={c.menuItemNum}>1.</div>
                <h3 className={c.menuItemHead}><span>Оставьте заявку</span> на сайте</h3>
              </div>
              <p className={c.menuItemText}>мы свяжемся с вами для уточнения деталей</p>
            </li>
            <li className={c.startMenuItem}>
              <div className={c.itemContainer}>
                <div className={c.menuItemNum}>2.</div>
                <h3 className={c.menuItemHead}><span>Скачайте</span> приложение</h3>
              </div>
              <p className={c.menuItemText}>для удобного вывода средств</p>
            </li>
            <li className={c.startMenuItem}>
              <div className={c.itemContainer}>
                <div className={c.menuItemNum}>3.</div>
                <h3 className={c.menuItemHead}>Выходите на линию</h3>
              </div>
              <p className={c.menuItemText}>чтобы получить первые заказы</p>
            </li>
            <li className={c.startMenuItem}>
              <div className={c.itemContainer}>
                <div className={c.menuItemNum}>4.</div>
                <h3 className={c.menuItemHead}>Начните зарабатывать</h3>
              </div>
              <p className={c.menuItemText}>работайте тогда, когда вам удобно</p>
            </li>
          </ul>
        </motion.section>

        <Container image={img2} dark={true} paddingTop={65} paddingBottom={67} id={'advantages'}>
          <h2 className={`${c.head} ${c.advantagesHead}`}>Работа в удовольствие</h2>
          <ul className={c.advantages}>
            <li className={c.advantagesItem}>
              <div className={`${c.advantagesIcon} icon icon-schedule`}></div>
              <div className={c.advantagesContent}>
                <h3 className={c.advantagesTitle}>Удобный график</h3>
                <p className={c.advantagesText}>Работа по несколько часов в неделю или каждый день - вы сами выбираете свой график</p>
              </div>
            </li>
            <li className={c.advantagesItem}>
              <div className={`${c.advantagesIcon} icon icon-wallet`}></div>
              <div className={c.advantagesContent}>
                <h3 className={c.advantagesTitle}>Деньги - сразу</h3>
                <p className={c.advantagesText}>Выводите деньги с помощью удобного мобильного приложения</p>
              </div>
            </li>
            <li className={c.advantagesItem}>
              <div className={`${c.advantagesIcon} icon icon-wrench`}></div>
              <div className={c.advantagesContent}>
                <h3 className={c.advantagesTitle}>Партнерская программа</h3>
                <p className={c.advantagesText}>Скидка 20% на ремонт и сервисное обслуживание для водителей парка</p>
              </div>
            </li>
          </ul>
        </Container>

        <section className={`${c.mobileApp}`} id='mobileApp'>
          <div className={`${c.mobileContent} offset w600`}>
            <h2 className={c.head}>Мобильное приложение</h2>
            <p className={c.mobileAppText}>
              Мы разработали мобильное приложение для того,
              чтобы вам было удобно!
            </p>
            <a href={'#'} className={c.mobileAppDownload}></a>
          </div>
          <div className={c.image}>
            <img src={img3} alt=""/>
          </div>
        </section>

        <section className={`${c.contacts} maxWidth offset`} id='contacts'>
          <h2 className={`${c.head} ${c.contactsHead}`}>Контакты</h2>

          <div className={c.contactsContainer}>
            <div className={c.contactsLeftSide}>
              <div className={c.contact}>
                <h4 className={c.contactTitle}>
                  <div className={'icon icon-whatsapp'}></div>
                  <a href="tel:83812494645">Написать в What`s App</a> 
                </h4>
                <p className={c.contactInfo}><span>тел.:</span> <span className={c.contactSpan}>8 (3812) 49-46-45</span></p>
              </div>
              <div className={c.contact}>
                <h4 className={c.contactTitle}>
                  <div className={'icon icon-viber'}></div>
                  <a href="tel:8903000000">Написать в Viber</a>
                </h4>
                <p className={c.contactInfo}><span>тел.:</span> <span className={c.contactSpan}>8 (903) 00-00-00</span></p>
              </div>
            </div>
            <div className={c.contactsRightSide}>
              <p className={c.contactInfo}><span>Email:</span> <span className={c.contactSpan}>info@taxi.ru</span></p>
              <p className={c.contactInfo}><span>Офис:</span> <span className={c.contactSpan}>
                г.Омск, ул.Дмитриева 15/1
                <a href="#">Показать на карте</a>
              </span></p>
            </div>
          </div>
        </section>

        <Container image={img4} id={'form'}>
          <h2 className={`${c.head} ${c.jobHead}`}>Оставить заявку</h2>
          <Form/>
        </Container>

        <section className={c.banner}>
          <div className={c.bannerBoldText}>Нет автомобиля?</div>
          <div className={c.bannerText}>Работать на авто компании</div>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_25_1)">
              <path
                d="M12.121 2.86222C11.8758 2.60843 11.4676 2.60843 11.2138 2.86222C10.9686 3.10744 10.9686 3.51557 11.2138 3.76022L15.8136 8.35997L0.635059 8.35997C0.281232 8.36054 0 8.64177 0 8.9956C0 9.34942 0.281232 9.6398 0.635059 9.6398L15.8136 9.6398L11.2138 14.231C10.9686 14.4848 10.9686 14.8935 11.2138 15.1381C11.4676 15.3919 11.8763 15.3919 12.121 15.1381L17.8097 9.44946C18.0635 9.20424 18.0635 8.79611 17.8097 8.55146L12.121 2.86222Z"
                fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_25_1">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </section>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;