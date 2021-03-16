import React, { useEffect, Component } from 'react';
import axios from 'axios';
import './countryData.css';
import loc from '../icon/loc.png';
import search from '../icon/search.png';

class searchCountry extends Component {

render() {
    return (
        <div className="">
            <h2>Find Specific Country Data</h2>
            <br></br>
            
            <div>
                <input className="search" type="text" onChange={this.props.setCountry} />

                <button className="button"  
                onClick={this.props.loadCountryData}>
                <img src={search} className="serachIcon"/></button>

                <button  className="button"
                onClick={this.props.getGeoInfo}
                ><img src={loc} className="serachIcon"/></button>
            </div>
        </div> 
    );
}
}

export default searchCountry;