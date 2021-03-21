import React, { useEffect, Component } from 'react';
import axios from 'axios';
import './showData.css';
class showDataTotal extends Component {
  


render() {
    return (
        <div>
            <h2>World Statistics</h2>
            <div className="WorldData">
                <div className="dataBlock">
                    <div className="BlockHeadert">
                        <p>Total Cases</p>
                    </div>
                    <div  className="BlockDatat">
                        <p>{this.props.state.totalCases}</p>
                    </div>
                </div>
                <div className="dataBlock co-1t">
                    <div className="BlockHeadert">
                        <p>Total Deaths</p>
                    </div>
                    <div  className="BlockDatat">
                        <p>{this.props.state.totalDeaths}</p>
                    </div>
                </div>
                <div className="dataBlock co-1-row-2t">
                    <div className="BlockHeadert">
                        <p>Total Recovered</p>
                    </div>
                    <div  className="BlockDatat">
                        <p>{this.props.state.totalRecovered}</p>
                    </div>
                </div>
                <div className="dataBlock co-2-row-0t">
                    <div className="BlockHeadert ">
                        <p>Today's Cases</p>
                    </div>
                    <div  className="BlockDatat todayCases">
                        <p>{this.props.state.totalTodayCases}</p>
                    </div>
                </div>
                <div className="dataBlock co-2-row-1t">
                    <div className="BlockHeadert">
                        <p>Today's Deaths</p>
                    </div>
                    <div  className="BlockDatat todayDeaths">
                        <p>{this.props.state.totalTodayDeaths}</p>
                    </div>
                </div>
                <div className="dataBlock co-2-row-2t">
                    <div className="BlockHeadert">
                        <p>Today's Recovered</p>
                    </div>
                    <div  className="BlockDatat todayRecovered">
                        <p>{this.props.state.totalTodayRecovered}</p>
                    </div>
                </div>
            </div>
        </div> 
    );
}
}

export default showDataTotal;