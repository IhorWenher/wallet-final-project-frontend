import React from "react";
import { NavLink } from "react-router-dom";
//import style from '../Novigation/Novigation.module';

export default function Navigation() {
    return (
    <nav>
        <NavLink to="/home" exact>Главная</NavLink>
        <NavLink to="/diagram" exact>Статистика</NavLink>
    </nav>
    )
}