import React, { Component } from 'react';
import style from './Post.module.css';



const Post = (props) => {

    return (
        <div className={style.item}>
            <img src='https://sadanduseless.b-cdn.net/wp-content/uploads/2018/12/cat-on-glass10.jpg'></img>
            {props.message}
            <div>
                <span>Like</span> {props.likeCount}
            </div>
        </div>
    )

}

export default Post