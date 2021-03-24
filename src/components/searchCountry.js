import React, {Component } from 'react';

import './countryData.css';


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
               <i className="fa fa-search" ></i></button>

                <button  className="button findLoction"
                onClick={this.props.getGeoInfo}
                ><i className="material-icons">my_location</i></button>
                
            </div>
        </div> 
    );
}
}


export default searchCountry;