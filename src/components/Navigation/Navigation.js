import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { authSelectors } from '../../redux/auth';
import svgHome from '../../images/home-icon.svg';
import svgStats from '../../images/stats-icon.svg';
import svgCurren from '../../images/dollar-icon.svg';
import style from '../Navigation/Navigation.module.css';

export default function Navigation() {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  const displayWidth = window.innerWidth <= 768;

  return (
    <nav className={style.container}>
      <div className={style.nav__link}>
        {isLogin && (
          <NavLink to="/" exact className={style.home}>
            <ReactSVG className={style.home__svg} src={svgHome} />
            <span className={style.home__word}>Главная</span>
          </NavLink>
        )}
        {isLogin && (
          <NavLink to="/statistic" exact className={style.statis}>
            <ReactSVG className={style.statis__svg} src={svgStats} />
            <span className={style.statis__word}>Статистика</span>
          </NavLink>
        )}

        {displayWidth && isLogin && (
          <NavLink to="/diagram" exact className={style.curren}>
            <ReactSVG className={style.curren__svg} src={svgCurren} />
          </NavLink>
        )}
      </div>
    </nav>
  );
}
