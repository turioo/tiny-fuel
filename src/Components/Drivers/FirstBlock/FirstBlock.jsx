import React from 'react'
import s from './FirstBlock.module.css'
import bgDrivers from './../../../images/bgDrivers.svg'
import {Spring, config} from 'react-spring/renderprops'

const FirstBlock = () => {
    return (
        <div className={s.firstBlock} style={{ backgroundImage: `url(${bgDrivers})` }}>
            <div className={s.main}>
            <Spring
  from={{ transform:"translateX(-20rem)" }}
  to={{ transform:"translateX(0rem)" }}
  config={config.molasses}>
  {props => <div style={props} className={s.text}>
                    <div className={s.upperText}>Не витрачай час<br />на пошук АЗС</div>
                    <div className={s.downText}>На мапі поруч - ви можете побачити всі<br />найближчі АЗС.</div>
                </div>}
</Spring>
<Spring
  from={{ transform:"translateX(20rem)" }}
  to={{ transform:"translateX(0rem)" }}
  config={config.molasses}>
  {props =>  <div style={props} className={s.map}>
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d83034.81646783485!2d26.993290623189456!3d49.430876387616905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LDQt9GB!5e0!3m2!1suk!2sua!4v1605613003639!5m2!1suk!2sua"></iframe>
                </div>}
</Spring>
               
            </div>
        </div>
    );
}

export default FirstBlock;