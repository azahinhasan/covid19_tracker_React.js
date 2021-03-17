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
            <span>Sort By: </span>
            <select onChange={this.props.shortByDropDown}>
                <option value="cases" selected>cases</option>
                <option value="recovered">recovered</option>
                <option value="deaths">deaths</option>
                <option value="population">propulation</option>  
            </select>
            <button className="">Click</button>
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