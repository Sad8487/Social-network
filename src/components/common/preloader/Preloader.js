import React from 'react'
import styles from './Preloader.module.css'
import preloader from '../../../assets/images/loading1.gif'



const Preloader = (props) => {

    return <div className={styles.preloader}>
        <img src={preloader} />
    </div>
};


export default Preloader