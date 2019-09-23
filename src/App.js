import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";


// let NewsComponent = ()=> <News />

const App = (props) => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className="app-content">

                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogsPage={props.state.dialogsPage}
                               dispatch={props.dispatch} />}/>

                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}/>}/>

                    <Route path='/news' component={() => <News/>}/>
                    {/*<Route path='/news' render={ NewsComponent }/>*/}
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
    );

};

export default App;
