import {FC, PropsWithChildren} from 'react';
import c from './Container.module.scss'
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface iContainer {
  image?: string
  dark?: boolean
  paddingTop?: string | number
  paddingBottom?: string | number
  id?: string
}

const Container:FC<PropsWithChildren<iContainer>> = ({children, image, dark, paddingTop, paddingBottom, id}) => {
  const sectionClassList = classNames(c.container, dark && c.darkBackground)
  const contentClassList = classNames(
    'offset',
    c.content, 
    dark && c.lightColor, 
    image && `w600 ${c.offset}`, 
  )

  const anim = {
    initial: { opacity: 0},
    animate: { opacity: 1},
    transition: { duration: .3}
  }

  return (
    <section className={sectionClassList} id={id}>
      <motion.div 
        className={contentClassList}
        style={{paddingTop, paddingBottom}}
        {...anim}
      >
        {children}
      </motion.div>
      {image &&
        <div className={c.image}>
         <img src={image} alt=""/>
        </div>
      }
    </section>
  );
};

export default Container;