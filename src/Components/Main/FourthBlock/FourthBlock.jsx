import React from 'react'
import s from './FourthBlock.module.css'
import mobile from './../../../images/mobile.png'
import mobileBack from './../../../images/mobileBack.svg'
import plan from './../../../images/plan.svg'



const FourthBlock = () => {
    return(
        <div className={s.FourthBlock}>
            <div className={s.mainText}>Придбайте пальне у додатку</div>
            <div className={s.row}>
                <div className={s.plan}>
                    <img src={plan} alt="plan"/>
                </div>
                <div className={s.instruction} >
                    <div className={s.textItem}>Відкрийте наш застосунок</div>
                    <div className={s.textItem}>Оберіть тип палива</div>
                    <div className={s.textItem}>Вкажіть літраж</div>
                    <div className={s.textItem}>Оплатіть онлайн</div>
                    <div className={s.textItem}>Відскануйте QR-код <br />на АЗС</div>
                </div>
                <div className={s.mobile}>
                   <img src={mobileBack} class = {s.mobileBack} alt="contur"/>
                   <img src={mobile} class = {s.mobileContur} alt="back"/>
                    
                </div>
            </div>
        </div>
    );
}

export default FourthBlock;