import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import style from '../Navigation/Navigation.module.css';
import { ReactComponent as Homesvg } from '../../images/home.svg';
import { ReactComponent as Statissvg } from '../../images/statis.svg';
import { ReactComponent as Dollarsvg } from '../../images/dollar-icon.svg';

export default function Navigation() {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={style.container}>
      <div className={style.nav__link}>
        {isLogin && (
          <>
            <NavLink to="/home" className={style.home}>
                <Homesvg className={style.home__svg} />
                <span className={style.home__word}>Главная</span>
            </NavLink>

            <NavLink to="/statistic" className={style.statis}>
              <Statissvg className={style.statis__svg} />
              <span className={style.statis__word}>Статистика</span>
            </NavLink>

            <NavLink to="/diagram" className={style.curren}>
              <Dollarsvg className={style.curren__svg} />
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
