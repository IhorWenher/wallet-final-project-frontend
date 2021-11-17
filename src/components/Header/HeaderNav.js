import React from "react";
import { ReactSVG } from "react-svg";
import svgLogo from '../../images/wallet-icon.svg';
import svgExit from '../../images/exit-icon.svg';
import style from '../Header/HeaderNav.module.css';

export default function HeaderNav() {
    return (
    
      <header className={style.container} >
            <div className={style.header}>
                 <ReactSVG className={style.logo__svg} src={svgLogo} />
                 <span className={style.logo}>Wallet</span>
            
                  <div className={style.author}>
                     <span className={style.name}>Имя</span>
                     <div className={style.line}></div> 
                      <button
                        className={style.button}
                        type="button" >
                        <ReactSVG className={style.output__svg} src={svgExit} />
                        <span className={style.output}>Выйти</span>
                     </button>
                 </div>
                
           </div>
     </header>
    )
}