import {FC, PropsWithChildren} from 'react';
import c from './Container.module.scss'

interface iContainer {
  image?: string
  dark?: boolean
  paddingTop?: string | number
  paddingBottom?: string | number
}

const Container:FC<PropsWithChildren<iContainer>> = ({children, image, dark, paddingTop, paddingBottom}) => {
  return (
    <section className={`${c.container} ${dark ? c.darkBackground : ''}`}>
      <div className={`
        ${c.content}
        ${dark ? c.lightColor : ''}
        ${image ? `w600 ${c.offset32}` : ''}
        offset`
      } style={{paddingTop, paddingBottom}}>
        {children}
      </div>
      {image &&
        <div className={c.image}>
         <img src={image} alt=""/>
        </div>
      }
    </section>
  );
};

export default Container;