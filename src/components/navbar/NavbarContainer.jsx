import React, {Component} from 'react';
import {connect} from "react-redux"
import Navbar from "./Navbar"


let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
};
// let mapDispatchToProps = () => {};


const NavbarContainer = connect(mapStateToProps)(Navbar);


export default NavbarContainer