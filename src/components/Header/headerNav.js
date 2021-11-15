import React from "react";
import style from '../Header/headerNav.module.css';

export default function HeaderNav() {
    return (
    
      <header className={style.header} >
       
            <svg width='37px' height='29px'>
                <use href=''></use>
            </svg>
            <span className={style.logo}>Wallet</span>
            
            <div className={style.author}>
                  <span className={style.name}>Имя</span>
            
                <button
                    className={style.button}
                    type="button" 
                    onClick>
                    <svg className={style.output__svg} width = '18px' height='18px'>
                        <use href=''></use>
                    </svg>
                    <span className={style.output}>Выйти</span>
               </button>
            </div>
          
    </header>
    )
}
