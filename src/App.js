import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";


// let NewsComponent = ()=> <News />

const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-content">

                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>

                    <Route path='/profile'
                           render={() => <ProfileContainer />}/>

                    <Route path='/news' component={() => <News />}/>
                    {/*<Route path='/news' render={ NewsComponent }/>*/}
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                </div>
            </div>
    );

};

export default App;
