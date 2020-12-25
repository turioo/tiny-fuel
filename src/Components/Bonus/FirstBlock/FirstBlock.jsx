import React from 'react'
import s from './FirstBlock.module.css'
import bgBonus from './../../../images/bgBonus.svg'
import canistra from './../../../images/canistra.svg'
import coffee from './../../../images/coffee.svg'
import hotdog from './../../../images/hotdog.svg'
import Game from './Game/Game'
import {Spring, config} from 'react-spring/renderprops'

const FirstBlock = () => {
    return (
        <div className={s.firstBlock} style={{ backgroundImage: `url(${bgBonus})` }}>
            <div className={s.main}>
            <Spring
  from={{ transform:"translateX(-20rem)" }}
  to={{ transform:"translateX(0rem)" }}
  config={config.molasses}>
  {props =>  <div style={props} className={s.text}>
                    <div className={s.upperText}>Грай у нашу гру та<br />вигравай приємні<br />бонуси:</div>
                    <div className={s.bonuses}>
                        <div className={s.bonus}><img src={canistra} alt="canistra"/>-&nbsp;<span>2 літри&nbsp;</span>пального</div>
                        <div className={s.bonus}><img src={coffee} alt="coffee"/>-&nbsp;стаканчик&nbsp;<span>кави</span></div>
                        <div className={s.bonus}><img src={hotdog} alt="hotdog"/>-&nbsp;смачний&nbsp;<span>хот-дог</span></div>
                    </div>
                </div>}
</Spring>
               
                <div className={s.game}>
                <Game />
               </div>
            </div>
        </div>
    );
}

export default FirstBlock;