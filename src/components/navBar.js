import React, { Component } from 'react';
import './countryData.css';
import {NavLink} from 'react-router-dom';

class navBar extends Component {

render() {
    return (
        <div className="navBar">
        <nav>
           
            <ul>
                <li className="siteName">Covid-19 Tracker</li>
                <span className="navOptions">
                    
                    <li><NavLink to={{pathname: '/home'}} exact >Home</NavLink></li>
                    <li><NavLink to={{pathname:'/countryList'}}>List</NavLink></li>
                </span>
             
            </ul>
        </nav>
        </div> 
    );
}
}

export default navBar;