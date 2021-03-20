import React, { useEffect, Component } from 'react';
import axios from 'axios';
import './countryData.css';
import {Route,NavLink, Switch, Redirect} from 'react-router-dom';

class navBar extends Component {

render() {
        const GitHublinkHome = "covid19_tracker_React.js/home";
    const GitHublinkList = "covid19_tracker_React.js/list";
    return (
        <div className="navBar">
        <nav>
           
            <ul>
                <li className="siteName">Covid-19 Tracker</li>
                <span className="navOptions">
                    
                    <li><NavLink to="/hocovid19_tracker_React.js/home" exact >Home</NavLink></li>
                    <li><NavLink to="/countryList">List</NavLink></li>
                </span>
             
            </ul>
        </nav>
        </div> 
    );
}
}

export default navBar;