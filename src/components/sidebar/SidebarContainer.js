import React from 'react';
import {connect} from "react-redux";
import Sidebar from "./Sidebar";


let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
};


const SidebarContainer = connect( mapStateToProps, null)(Sidebar);


export default SidebarContainer;
