import React, { useEffect, Component } from 'react';
import axios from 'axios';
import './countryData.css';
import loc from '../icon/loc.png';
import search from '../icon/search.png';

class searchCountry extends Component {

render() {
    return (
        <div className="">
            <h2>Search Country</h2>
            <br></br>
            
            <div>
                <input className="search" type="text" onChange={this.props.setCountry} placeholder="Enter Country Name"/>

                {/* <button className="button"  
                onClick={this.props.loadCountryData}>
                <img src={search} className="serachIcon"/></button> */}

                <button className="button"  
                onClick={this.props.loadCountryData}>
               <i class="fa fa-search" ></i></button>

                <button  className="button findLoction"
                onClick={this.props.getGeoInfo}
                ><i class="material-icons">my_location</i></button>
                
            </div>
        </div> 
    );
}
}

export default searchCountry;