import React, { useEffect, Component } from 'react';
import axios from 'axios';
import './countryData.css';
class countryData extends Component {

render() {
    return (
        <div>
            <h2>Bangladesh Covid-19 Data</h2>
            <br></br>
            <div className="dataBlock co-1-row-0">
                    <div className="BlockHeader">
                        <p>Populations</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.countryData.populations}</p>
                    </div>
                </div>
                <div className="dataBlock co-1-row-1">
                    <div  className="BlockData">
                        <img src={this.props.state.countryData.flag} height="100px" />
                        <div className="countryNameUnderFlag">Bangldesh</div>
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
                    <div className="BlockHeader">
                        <p>Today's Cases</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.countryData.TodayCases}</p>
                    </div>
                </div>
                <div className="dataBlock co-3-row-1">
                    <div className="BlockHeader">
                        <p>Today's Deaths</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.countryData.TodayDeaths}</p>
                    </div>
                </div>
                <div className="dataBlock co-3-row-2">
                    <div className="BlockHeader">
                        <p>Today's Recovered</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.countryData.TodayRecovered}</p>
                    </div>
                </div>

            </div>
        </div> 
    );
}
}

export default countryData;