import React from 'react'
import s from './FirstBlock.module.css'
import bgHand from './../../../images/bgHand.svg'
import instagram from './../../../images/instagram.svg'
import telephone from './../../../images/telephone.svg'
import telegram from './../../../images/telegram.svg'
import viber from './../../../images/viber.svg'
import facebook from './../../../images/facebook.svg'
import {Spring, config} from 'react-spring/renderprops'

const FirstBlock = () => {
    return (
        <div className={s.firstBlock}>
             <Spring
  from={{ transform:"translateX(-20rem)" }}
  to={{ transform:"translateX(0rem)" }}
  config={config.molasses}>
  {props => <div style ={props} className={s.main}>
               <div className={s.upperText}>Ми у соціальних<br/>мережах</div>
               <div className={s.links}>
                   <a href="tg://resolve?domain=turio_o" className={s.linkItem}><img src={telephone} alt="" />+380 (097) 777-77-77</a>
                   <a href="tg://resolve?domain=turio_o" className={s.linkItem}><img src={telegram} alt="" />t.me/tiny.fuel</a>
                   <a href="tg://resolve?domain=turio_o" className={s.linkItem}><img src={viber} alt="" />+380 (097) 777-77-77</a>
                   <a href="tg://resolve?domain=turio_o" className={s.linkItem}><img src={instagram} alt="" />@tiny.fuel</a>
                   <a href="tg://resolve?domain=turio_o" className={s.linkItem}><img src={facebook} alt="" />/tiny.fuel</a>
               </div>
            </div>}
</Spring>
            
            <div className={s.image}><img src={bgHand} alt="hand" /></div>
        </div>
    );
}

export default FirstBlock;