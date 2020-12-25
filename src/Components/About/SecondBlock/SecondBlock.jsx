import React from 'react'
import s from './SecondBlock.module.css'
import Photo from './../../../images/Photo.svg'

const SecondBlock = () => {
    return (
        <div className={s.SecondBlock}>
            <div className={s.main}>
                <div className={s.text}>
                <div className={s.topText}>“Кінські сили продають автомобілі - якісне пальне виграє гонки”</div>
                <div className={s.downText}>Ми переконані, що відповідальний бізнес не повинен залишатися осторонь важливих для суспільства процесів. Тому проекти у сфері сталого розвитку є невід’ємною частиною діяльності компанії. Оскільки наш бізнес безпосередньо пов’язаний з автомобільними шляхами, то ключовим напрямком для нас залишається безпека учасників дорожнього руху.</div>
                </div>
                <div className={s.person}>
                    <div className={s.photo}><img src={Photo} alt="ava" /></div>
                    <div className={s.name}> Качинський Владислав</div>
                    <div className={s.atitude}>засновник компанії</div>
                </div>
            </div>
        </div>
    );
}

export default SecondBlock;