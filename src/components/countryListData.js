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
                    <option value="cases" selected={this.props.sortBy=="cases"?true:false}>Cases</option>
                    <option value="recovered" selected={this.props.sortBy=="recovered"?true:false}>Recovered</option>
                    <option value="deaths"  selected={this.props.sortBy=="deaths"?true:false}>Deaths</option>
                    <option value="population"  selected={this.props.sortBy=="population"?true:false}>Propulation</option>  
                </select>
            </div>
        
            {/* <button onClick={this.props.button}>Click</button> */}
            <table className="">
                <th>Serial No.</th>
                <th>Name</th>
                <th onClick={this.props.shortByPropulation}>Propulation</th>
                <th onClick={this.props.shortByCases}>{this.props.sortBy=="cases"?"Cases ↑":"Cases ↕"}</th>
                <th>Today Cases</th>
                <th onClick={this.props.shortByRecoverd}>Recovered</th>
                <th>Today Recovered</th>
                <th onClick={this.props.shortByDeaths}>Deaths</th>
                <th>Today Deaths</th>
                {this.props.data.map(p =>{
                    serialNum++;
                return(   
                    <tr>
                        <td className="serialNo">{serialNum}</td>
                        <td className="countryName">{p.country}</td>
                        <td>{p.population.toLocaleString()}</td>
                        <td>{p.cases.toLocaleString()}</td>
                        <td className="todayCases">{p.todayCases==0? "": "+"+p.todayCases.toLocaleString()}</td>
                        <td>{p.recovered.toLocaleString()}</td>
                        <td className="todayRecovered">{p.todayRecovered==0 ? "":"+"+p.todayRecovered.toLocaleString()}</td>
                        <td>{p.deaths.toLocaleString()}</td>
                        <td className="todayDeaths">{p.todayDeaths==0 ? "":"+"+p.todayDeaths.toLocaleString()}</td>
                    </tr>
                    
                 )
                 
                })}

            </table>
  
        </div> 
    );
}
}

export default countryListData;