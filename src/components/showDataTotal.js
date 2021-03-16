import React, { useEffect, Component } from 'react';
import axios from 'axios';
import './showData.css';
class showDataTotal extends Component {
  


render() {
    return (
        <div>
            <h2>Total World Data</h2>
            <div className="WorldData">
                <div className="dataBlock">
                    <div className="BlockHeader">
                        <p>Total Cases</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.totalCases}</p>
                    </div>
                </div>
                <div className="dataBlock co-1">
                    <div className="BlockHeader">
                        <p>Total Deaths</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.totalDeaths}</p>
                    </div>
                </div>
                <div className="dataBlock co-1-row-2">
                    <div className="BlockHeader">
                        <p>Total Cases</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.totalRecovered}</p>
                    </div>
                </div>
                <div className="dataBlock co-2-row-0">
                    <div className="BlockHeader">
                        <p>Today's Cases</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.totalTodayCases}</p>
                    </div>
                </div>
                <div className="dataBlock co-2-row-1">
                    <div className="BlockHeader">
                        <p>Today's Deaths</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.totalTodayDeaths}</p>
                    </div>
                </div>
                <div className="dataBlock co-2-row-2">
                    <div className="BlockHeader">
                        <p>Today's Recovered</p>
                    </div>
                    <div  className="BlockData">
                        <p>{this.props.state.totalTodayRecovered}</p>
                    </div>
                </div>
            </div>
        </div> 
    );
}
}

export default showDataTotal;