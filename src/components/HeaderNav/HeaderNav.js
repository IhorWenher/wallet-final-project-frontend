import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { ReactSVG } from 'react-svg';
import svgLogo from '../../images/wallet-icon.svg';
import svgExit from '../../images/exit-icon.svg';
import style from './HeaderNav.module.css';

export default function HeaderNav() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <ReactSVG className={style.logo__svg} src={svgLogo} />
        <span className={style.logo}>Wallet</span>

        <div className={style.author}>
          <span className={style.name}>{name}</span>
          <div className={style.line}></div>
          <button className={style.button} type="button">
            onClick={() => dispatch(authOperations.logout())}
            <ReactSVG className={style.output__svg} src={svgExit} />
            <span className={style.output}>Выйти</span>
          </button>
        </div>
      </div>
    </div>
  );
}
