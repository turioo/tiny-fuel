import React from 'react'
import s from './SecondBlock.module.css'

const SecondBlock = () => {
    return(
        <div className={s.SecondBlock}>
            <div className={s.mainText}>Нам можна довіряти</div>
            <div className={s.advItems}>
               <div className={s.advantage}>
                    <div className={s.count}>1534</div>
                    <div className={s.text}>ЗАДОВОЛЕНИХ<br />КЛІЄНТІВ</div>
               </div>
               <div className={s.advantage}>
                   <div className={s.count}>3847462</div>
                   <div className={s.text}>ПРОДАНИХ<br />ЛІТРІВ</div>
               </div>
               <div className={s.advantage}>
                   <div className={s.count}>8</div>
                   <div className={s.text}>РОКІВ НА<br/>РИНКУ</div>
               </div>
               
               
            </div>
           
        </div>
    );
}

export default SecondBlock;