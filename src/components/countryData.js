import React, { Component } from 'react';
import './countryData.css';

class countryData extends Component {

render() {
    return (
        <div className="countryData">
            
            <br></br>
{/*             
            <div>
                <input className="search" type="text" onChange={this.props.setCountry} />

                <button className="button"  
                onClick={this.props.loadCountryData}>
                <img src={search} className="serachIcon"/></button>

                <button  className="button"
                onClick={this.props.getGeoInfo}
                ><img src={loc} className="serachIcon"/></button>

            </div> */}

            <br/>
            <div className="dataBlock co-1-row-0">
                    <div className="BlockHeader">
                        <p>Population</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.countryData.populations}</p>
                    </div>
                </div>
                <div className="dataBlock co-1-row-1">
                    <div  className="BlockData">
                        <img className="flag" src={this.props.state.countryData.flag} height="100px" />
                        <div className="countryNameUnderFlag">{this.props.state.countryData.countryName}</div>
                    </div>
                </div>
                <div className="dataBlock co-1-row-2">
                    <div className="BlockHeader">
                        <p>Continent</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.countryData.continent}</p>
                    </div>
                </div>

            <div className="WorldData">
                <div className="dataBlock co-2-row-0">
                    <div className="BlockHeader">
                        <p>Total Cases</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.countryData.Cases}</p>
                    </div>
                </div>
                <div className="dataBlock co-2-row-1">
                    <div className="BlockHeader">
                        <p>Total Deaths</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.countryData.Deaths}</p>
                    </div>
                </div>
                <div className="dataBlock co-2-row-2">
                    <div className="BlockHeader">
                        <p>Total Recovered</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.countryData.Recovered}</p>
                    </div>
                </div>
                <div className="dataBlock co-3-row-0">
                    <div className="BlockHeader ">
                        <p>Today's Cases</p>
                    </div>
                    <div  className="BlockData todayCases">
                        <p>{this.props.state.countryData.TodayCases}</p>
                    </div>
                </div>
                <div className="dataBlock co-3-row-1">
                    <div className="BlockHeader ">
                        <p>Today's Deaths</p>
                    </div>
                    <div  className="BlockData todayDeaths">
                        <p>{this.props.state.countryData.TodayDeaths}</p>
                    </div>
                </div>
                <div className="dataBlock co-3-row-2">
                    <div className="BlockHeader ">
                        <p>Today's Recovered</p>
                    </div>
                    <div  className="BlockData todayRecovered">
                        <p>{this.props.state.countryData.TodayRecovered}</p>
                    </div>
                </div>

            </div>
        </div> 
    );
}
}

export default countryData;