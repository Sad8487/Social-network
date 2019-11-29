import React, { Component } from 'react';
import style from './Header.module.css';
import logo from './../../images/owl-white.2dce1ae96856.png'

const Header = () => {
    return  <header className={style.header}>
        <img src={logo} />
    </header>
}

export default Header