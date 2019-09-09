import React, {Component} from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div >
        <div className={style.imgWrapper}>
            {/*<img className={style.mainImage}*/}
                 {/*src="https://wallpapercave.com/wp/8jd9EeF.jpg"/>*/}
        </div>
        <div className={style.descriptionBlock}>
            ava + description
        </div>
    </div>
    )
}

export default ProfileInfo