import React from 'react'
import userPhoto from './../../assets/images/user-icon.svg'
import styles from './users.module.css';
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i<=pagesCount; i++ ) {
        pages.push(i);
    }


    return <div>
        <div className={styles.paginationBlock}>
            {pages.map( p => {
                return <span className={`${props.currentPage === p && styles.selectedPage} ${styles.page}`} onClick={(e) => { props.onPageChanged(p)} }>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div className={styles.usersWrap} key={u.id}>
                <div className={styles.avatarBlock}>
                    <div className={styles.avatar}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </NavLink>
                    </div>

                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }} className={styles.following}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }} className={styles.following}>Follow</button>}

                </div>

                <div className={styles.info}>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>{u.name}</span>
                        <span className={styles.userStatus}>{u.status}</span>
                    </div>
                    <div className={styles.userLocation}>
                        <span className={styles.userCountry}>{"u.location.country"}</span>
                        <span className={styles.userCity}>{"u.location.city"}</span>
                    </div>
                </div>
            </div>)
        }

    </div>
};

export default Users