import React from 'react';
import style from './Sidebar.module.css';
import Friend from "./Friend/Friend";
// import {connect} from "react-redux"

const Sidebar = (props) => {
    let friends = props.friends.map( f => {
        return <Friend name={f.name} avatar={f.avatar} key={f.id}/>
    });

    return (
        <div className={style.sidebar}>
            <span className={style.title}>Friends</span>
            <div className={style.friends}>
                {friends}
            </div>
        </div>
    )
};

// Вот так пишется в реале. И не нужно создавать отдельный файл ComponentContainer
// const mapStateToProps = (state)=> {
//     return {
//         friends: state.sidebar.friends
//     }
// };
//
//
// export default connect(mapStateToProps, null)(Sidebar)

export default Sidebar