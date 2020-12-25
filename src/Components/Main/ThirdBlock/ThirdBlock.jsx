import React, {useState} from 'react'
import s from './ThirdBlock.module.css'
import okko from './../../../images/okko.svg'
import wog from './../../../images/wog.svg' 
import anp from './../../../images/anp.svg'
import shell from './../../../images/shell.svg'
import strelka from './../../../images/strelka.svg'



const ThirdBlock = () => {
    var fuel = {
        okko: {
          dp: 25.99,
          fuel92: 25.99,
          fuel95: 26.99,
          gas: 13.49,
        },
        wog: {
          dp: 25.99,
          fuel92: 25.99,
          fuel95: 26.99,
          gas: 13.48,
        },
        anp: {
          dp: 23.01,
          fuel92: 21.95,
          fuel95: 22.95,
          gas: 12.11,
        },
        shell: {
          dp: 23.99,
          fuel92: 23.09,
          fuel95: 25.39,
          gas: 12.89,
        },
      };
      
      let AZSdp = [fuel.okko.dp, fuel.wog.dp, fuel.anp.dp, fuel.shell.dp];
      let AZSdrawDP = AZSdp.map((x) => <div className={s.priceItem}>{x}</div>);
      
      let AZS92 = [
        fuel.okko.fuel92,
        fuel.wog.fuel92,
        fuel.anp.fuel92,
        fuel.shell.fuel92,
      ];
      let AZSdraw92 = AZS92.map((x) => <div className={s.priceItem}>{x}</div>);
      
      let AZS95 = [
        fuel.okko.fuel95,
        fuel.wog.fuel95,
        fuel.anp.fuel95,
        fuel.shell.fuel95,
      ];
      let AZSdraw95 = AZS95.map((x) => <div className={s.priceItem}>{x}</div>);
      
      let AZSgas = [fuel.okko.gas, fuel.wog.gas, fuel.anp.gas, fuel.shell.gas];
      let AZSdrawGAS = AZSgas.map((x) => <div className={s.priceItem}>{x}</div>);
      
      let dp = (
        ((fuel.okko.dp + fuel.wog.dp + fuel.anp.dp + fuel.shell.dp) * 0.9) /
        4
      ).toFixed(2);
      let benz92 = (
        ((fuel.okko.fuel92 + fuel.wog.fuel92 + fuel.anp.fuel92 + fuel.shell.fuel92) *
          0.9) /
        4
      ).toFixed(2);
      let benz95 = (
        ((fuel.okko.fuel95 + fuel.wog.fuel95 + fuel.anp.fuel95 + fuel.shell.fuel95) *
          0.9) /
        4
      ).toFixed(2);
      let gas = (
        ((fuel.okko.gas + fuel.wog.gas + fuel.anp.gas + fuel.shell.gas) * 0.9) /
        4
      ).toFixed(2);
      
      
    const [typeFuel, setTypeFuel] = useState("92");
    const [backColor, setBackColor] = useState();
    const [price, setPrice] = useState(0);
    const [choosed, setChoosed] = useState(AZSdraw92);
    const [avarage, setAvarage] = useState(benz92);

    let count = React.createRef();
    let type = React.createRef();

    const fuelDP = () => {
     setTypeFuel("ДП");
     setBackColor("#3b3b98");
     setAvarage(dp);
     setChoosed(AZSdrawDP);
    }
    const fuel92 = () => {
        setTypeFuel("92");
        setBackColor("#f73c43");
        setAvarage(benz92);
        setChoosed(AZSdraw92);
        
    }
    const fuel95 = () => {
        setTypeFuel("95");
        setBackColor("#f9ca24");
        setAvarage(benz95);
        setChoosed(AZSdraw95);
    }
  
    const fuelGas = () => {
        setTypeFuel("ГАЗ");
        setBackColor("#1eacff");
        setAvarage(gas);
        setChoosed(AZSdrawGAS);
    }
    const newPrice = () =>{
        if (type.current.value==="1"){
            setPrice((count.current.value * dp).toFixed(2));
        }
        if (type.current.value==="2"){
            setPrice((count.current.value * benz95).toFixed(2));
        }
        if (type.current.value==="3"){
            setPrice((count.current.value * benz92).toFixed(2));
        }
        if (type.current.value==="4"){
            setPrice((count.current.value * gas).toFixed(2));
        }
       
    }
   
    return(
        <div className={s.ThirdBlock}>
           <div className={s.price}>
               <div className={s.types}>
                   <div className={s.item} onClick={()=> fuelDP()}>ДП</div>
                   <div className={s.item} onClick={()=> fuel95()}>А-95</div>
                   <div className={s.item} onClick={()=> fuel92()}>А-92</div>
                   <div className={s.item} onClick={()=> fuelGas()}>ГАЗ</div>
               </div>
               <div className={s.typeBlock} style={{backgroundColor: backColor}}>
                   <div className={s.topText}>
                       <div className={s.azs}>АЗС</div>
                       <div className={s.cina}>Наша ціна</div>
                   </div>
                   <div className={s.downText}>
                       <div className={s.typeBrend}>
                           <div className={s.brend}><img src={okko} alt="okko" /></div>
                           <div className={s.brend}><img src={wog} alt="wog" /></div>
                           <div className={s.brend}><img src={anp} alt="anp" /></div>
                           <div className={s.brend}><img src={shell} alt="shell" /></div>
                       </div>
                       <div className={s.prices}>
                            {choosed}
                       </div>
                       <div className={s.strelka}><img src={strelka} alt="strelka" /></div>
                       <div className={s.ourPrice}>{avarage}</div>
                       <div className={s.typeFuel}>{typeFuel}</div>
                   </div>
               </div>
           </div>
           <div className={s.order}>
               <input type="text" className={s.pib} placeholder="Прізвище Ім'я"></input>
               <select onClick={()=>newPrice()} ref={type} name="hero">
                    <option value="" disabled selected>Тип палива</option>
                    <option value="1" className={s.value}>ДП</option>
                    <option value="2" className={s.value}>А-95</option>
                    <option value="3" className={s.value}>А-92</option>
                    <option value="4" className={s.value}>ГАЗ</option>
                </select> 
               <input type="number" onChange={()=>newPrice()} ref={count} class={s.count}placeholder="Літри"></input>
               <div className={s.totalPrice}>= <span>{price} грн</span></div>
           </div>
           <div className={s.orderButton}>оплатити</div>
        </div>
    );
    }
export default ThirdBlock;