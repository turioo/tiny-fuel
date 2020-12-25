import React from 'react'
import s from './FirstBlock.module.css'
import bgVideo from './../../../images/background.mp4'
import knopka from './../../../images/knopka.svg'
import {Spring, config} from 'react-spring/renderprops'

const FirstBlock = () => {
    return(
        <div className={s.FirstBlock}>
           
            <Spring
  from={{ transform:"translateX(-20rem)" }}
  to={{ transform:"translateX(0rem)" }}
  config={config.molasses}>
  {props => <div style={props}  className={s.items}><div className={s.text}>Ваша довіра -<br/>наша якість</div>  <div className={s.button}><img src={knopka} alt="knopka"/></div>
            </div>}
</Spring>
                
              
            <div className={s.intro}>
                <div className={s.back}></div>
                <div className={s.video}>
                <video loop autoPlay>
                    <source src={bgVideo} type="video/mp4" />
                    <source src={bgVideo} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
        </div>
    );
}

export default FirstBlock;