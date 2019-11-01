import React, { Component } from 'react';
import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";


const Sidebar = (props) => {
    debugger
    let friends = props.state.friends.map( f => <Friend name={f.name} avatar={f.avatar}/>)

    return (
        <div className={style.sidebar}>
            <span className={style.title}>Friends</span>
            <div className={style.friends}>
                {friends}
            </div>
        </div>
    )
}

export default Sidebar