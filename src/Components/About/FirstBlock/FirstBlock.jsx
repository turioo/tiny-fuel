import React from 'react'
import s from './FirstBlock.module.css'
import bgAbout from './../../../images/bgAbout.svg'
import {Spring, config} from 'react-spring/renderprops'

const FirstBlock = () => {
    return (
        <div className={s.firstBlock} style={{ backgroundImage: `url(${bgAbout})` }}>
             <Spring
  from={{ transform:"translateX(-20rem)" }}
  to={{ transform:"translateX(0rem)" }}
  config={config.molasses}>
  {props => <div style={props} className={s.main}>
                <div className={s.topText}>Tiny Fuel Company™</div>
                <div className={s.downText}>Для багатьох людей той факт, що всі АЗС-гіганти купують паливо у одного постачальника звучить лише як недотепний жарт. Але насправді це так і є.
                                            Ціна на АЗС зазвичай формується не від якості пального, а від чинників, які 60% клієнтів ніколи не використовують, але щоразу за них платять.
                                            <br /><br />
                                            Ціна палива нашої компанії включає в себе лише якість та ціну транспортування. Ми розуміємо, що наші клієнти це компанії, успіх яких залежить в більшості від нас. Впевненість в справності транспортного засобу - головний фактор концентрації водія та гарантія його безпеки.</div>
            
            </div>}
</Spring>
           
        </div>
    );
}

export default FirstBlock;