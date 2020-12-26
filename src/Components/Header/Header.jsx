import React, { useState } from 'react';
import s from './Header.module.css';
import logo from './logo.svg';
import button from './button.svg';
import Hamburger from 'hamburger-react'
import {NavLink} from "react-router-dom";
import cancel from './../../images/cancel.svg';

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const [isBuy, setBuy] = useState(false)
    let menu;
    let buy;
    if (isOpen) {
        menu = 
        <div className={s.menuBody} onClick={()=> setOpen(false)}>
            <div className={s.menuLinks}>
                <NavLink to="/" onClick={()=> setOpen(false)} >Головна</NavLink>
                <NavLink to="/about" onClick={()=> setOpen(false)} >про компанію</NavLink>
                <NavLink to="/drivers" onClick={()=> setOpen(false)} >водіям</NavLink>
                <NavLink to="/bonus" onClick={()=> setOpen(false)} >бонуси</NavLink>
                <NavLink to="/contacts"onClick={()=> setOpen(false)} >контакти</NavLink>

            </div>
        </div>

    }
    
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
      
      
    const [price, setPrice] = useState(0);


    let count = React.createRef();
    let type = React.createRef();

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

    if (isBuy) {
        buy = 
        <div className={s.buyMenu}>
            <div className={s.buyBody} >
            <div className={s.cancel} onClick={()=> setBuy(false)}><img src={cancel} alt="cancel" /></div>
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
        </div>
    }

    return (
        <div className={s.header}>
             <NavLink to="/"><div className={s.logo}><img src={logo} alt="logo" /></div></NavLink>
            <div className={s.navbar}>
                <NavLink to="/about" activeClassName={s.activeLink}>про компанію</NavLink>
                <NavLink to="/drivers" activeClassName={s.activeLink}>водіям</NavLink>
                <NavLink to="/bonus" activeClassName={s.activeLink}>бонуси</NavLink>
                <NavLink to="/contacts" activeClassName={s.activeLink}>контакти</NavLink>
            </div>
            <div className={s.button} onClick={()=> setBuy(true)}><img src={button} alt="button" /></div>
            <div className={s.burger}><Hamburger toggled={isOpen} toggle={setOpen} /></div>
            {menu}
            {buy}
        </div>
    );
}
export default Header;