import React, { useEffect, Component } from 'react';
import axios from 'axios';
import './countryData.css';
import loc from '../icon/loc.png';
import search from '../icon/search.png';

class countryListData extends Component {

render() {
    let serialNum=0;
    return (
        <div className="">
            <h2>50 Countrys Data</h2>
            <div className="sortBy">
                <span>Sort By: </span>
                <select onChange={this.props.shortByDropDown}>
                    <option value="cases" selected>Cases</option>
                    <option value="recovered">Recovered</option>
                    <option value="deaths">Deaths</option>
                    <option value="population">Propulation</option>  
                </select>
            </div>
        
            {/* <button onClick={this.props.button}>Click</button> */}
            <table className="">
                <th>Name</th>
                <th onClick={this.props.shortByPropulation}>Propulation</th>
                <th onClick={this.props.shortByCases}>Cases</th>
                <th>Today Cases</th>
                <th onClick={this.props.shortByRecoverd}>Recovered</th>
                <th>Today Recovered</th>
                <th onClick={this.props.shortByDeaths}>Deaths</th>
                <th>Today Deaths</th>
                {this.props.data.map(p =>{
                 return(   
                    <tr>
                        <td>{p.country}</td>
                        <td>{p.population}</td>
                        <td>{p.cases}</td>
                        <td>{p.todayCases}</td>
                        <td>{p.recovered}</td>
                        <td>{p.todayRecovered}</td>
                        <td>{p.deaths}</td>
                        <td>{p.todayDeaths}</td>
                    </tr>
                    
                 )
                 
                })}

            </table>
  
        </div> 
    );
}
}

export default countryListData;