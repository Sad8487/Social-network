import React, {Component} from 'react';
import style from './Friend.module.css';
import {NavLink} from "react-router-dom";





const Friend = (props) => {
    return (
        <div className={style.friend}>
            <div className={style.friendAvatar}
                 style={{backgroundImage: `url(${props.avatar})`}}>
            </div>
            <div className={style.friendName}>{props.name}</div>
        </div>
    )
}

export default Friend