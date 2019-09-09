import React, {Component} from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

console.log(style)

// module.css - это объект, у которого есть свойства 'ключ': 'значение'.
// let style = {
//     'nav': 'Navbar_nav__2oTQG',
//     'item': 'Navbar_item__3Akiq'
// }

// Интерполяция
// let c1 = 'item';
// let c2 = 'ative';
// 'item active':
// let classes = "c1 + " " + c2"
// let newClasses = `${c1} ${c2}`
// let ourClasses = {`${style.item} ${style.active}`}


const Navbar = (props) => {

    return <nav className={style.nav}>
        <div className={style.navItems}>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
            </div>
        </div>
        <Sidebar state={props.state}/>
    </nav>
}

export default Navbar