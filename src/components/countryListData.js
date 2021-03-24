import React, { Component } from 'react';
import './countryData.css';


class countryListData extends Component {

render() {
    let serialNum=0;
    const arrowRight = <div className="arrowRight">→</div>
    return (
        <div className="">

            <h2 className="headerOFdataTable">Reported Cases,Deaths and Recovered by Country </h2>

            <div className="sortBy" >
                        <span>Sort By: </span>
                        {/* <select onChange={this.props.shortByDropDown} defaultValue={'cases'}>
                            <option value="cases" selected={this.props.sortBy==="cases"?true:false}>Cases</option>
                            <option value="recovered" selected={this.props.sortBy==="recovered"?true:false}>Recovered</option>
                            <option value="deaths"  selected={this.props.sortBy==="deaths"?true:false}>Deaths</option>
                            <option value="population"  selected={this.props.sortBy==="population"?true:false}>Propulation</option>  
                        </select> */}

                        <select onChange={this.props.shortByDropDown} value={this.props.sortBy}>
                            <option value="cases" >Cases</option>
                            <option value="recovered" >Recovered</option>
                            <option value="deaths"  >Deaths</option>
                            <option value="population"  >Propulation</option>  
                        </select>
            </div>
        
            {/* <button onClick={this.props.button}>Click</button> */}
            <table className="dataTable">
                <tbody>
                <tr>
                    <th>Serial No.</th>
                    <th>Name</th>
                    <th onClick={this.props.shortByPropulation}>{this.props.sortBy==="population"?"Population ↑":"Population ↕"}</th>
                    <th onClick={this.props.shortByCases}>{this.props.sortBy==="cases"?"Cases ↑":"Cases ↕"}</th>
                    <th>Today Cases</th>
                    <th onClick={this.props.shortByRecoverd}>{this.props.sortBy==="recovered"?"Recovered ↑":"Recovered ↕"}</th>
                    <th>Today Recovered</th>
                    <th onClick={this.props.shortByDeaths}>{this.props.sortBy==="deaths"?"Deaths ↑":"Deaths ↕"}</th>
                    <th>Today Deaths</th>
                </tr>
                {this.props.data.map(p =>{
                    serialNum++;
                return(   
                    <tr key={p.country}>
                        <td className="serialNo">{p.country === this.props.serachCountry ? arrowRight:serialNum}</td>
                        <td className="countryName">{p.country}</td>
                        <td>{p.population.toLocaleString()}</td>
                        <td>{p.cases.toLocaleString()}</td>
                        <td className="todayCases">{p.todayCases===0? "": "+"+p.todayCases.toLocaleString()}</td>
                        <td>{p.recovered.toLocaleString()}</td>
                        <td className="todayRecovered">{p.todayRecovered===0 ? "":"+"+p.todayRecovered.toLocaleString()}</td>
                        <td>{p.deaths.toLocaleString()}</td>
                        <td className="todayDeaths">{p.todayDeaths===0 ? "":"+"+p.todayDeaths.toLocaleString()}</td>
                    </tr>
                    
                ) 
                })}
                </tbody>
            </table>
        </div> 
    );
}
}

export default countryListData;