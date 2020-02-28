import React, {Component} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";



const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div >
        <div className={style.imgWrapper}>
            {/*<img className={style.mainImage}*/}
                 {/*src="https://wallpapercave.com/wp/8jd9EeF.jpg"/>*/}
        </div>
        <div className={style.descriptionBlock}>
            <img className={style.profileAvatar} src={props.profile.photos.large} alt=""/>
            <div className={style.description}>
                <span>Name: {props.profile.fullName}</span>
                <span>About me: {props.profile.aboutMe}</span>
                <span>Looking for a job: {props.profile.lookingForAJobDescription}</span>
            </div>

        </div>
    </div>
    )
}

export default ProfileInfo