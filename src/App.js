import React, { useEffect, Component } from 'react';
import axios from 'axios';
import ShowDataTotal from './components/showDataTotal';
import CountryData from './components/countryData';
import './App.css';
class App extends Component {
  
state={
  totalCases:'',
  totalDeaths:'',
  totalRecovered:'',
  totalTests:'',
  totalTodayCases:'',
  totalTodayDeaths:'',
  totalTodayRecovered:'',
  serachCountry:'Bangladesh',
  countryData:{
    countryName:'',
    Cases:'',
    Deaths:'',
    Recovered:'',
    Tests:'',
    TodayCases:'',
    TodayDeaths:'',
    TodayRecovered:'',
    flag:'',
    continent:'',
    populations:''
  }

}
componentDidMount(){
  this.TotalResult();
  this.CountryResult();
}
TotalResult = () => {
  console.log("COvid-19");
  axios.get('https://disease.sh/v3/covid-19/all?yesterday=false&twoDaysAgo=false&allowNull=true').then((response) => {
      console.log(response);
      this.setState({
        totalCases: response.data.cases,
        totalDeaths: response.data.deaths,
        totalRecovered: response.data.recovered,
        totalTodayCases: response.data.todayCases,
        totalTodayDeaths: response.data.todayDeaths,
        totalTodayRecovered: response.data.todayRecovered
      
      });
  }).catch((error) => {
      console.log(error);
  });
};

CountryResult = () => {
  console.log("COvid-19");
  axios.get('https://disease.sh/v3/covid-19/countries/'+this.state.serachCountry+'?yesterday=false&twoDaysAgo=false&strict=true&allowNull=true').then((response) => {
    console.log(response);
    this.setState({
        countryData:{
          Cases: response.data.cases,
          Deaths: response.data.deaths,
          Recovered: response.data.recovered,
          TodayCases: response.data.todayCases==null ? "Data not Yet": response.data.todayCases,
          TodayDeaths: response.data.todayDeaths==null ? "Data not Yet": response.data.todayDeaths,
          TodayRecovered: response.data.todayRecovered==null ? "Data not Yet": response.data.todayRecovered,
          populations:response.data.population,
          flag: response.data.countryInfo.flag,
          continent:response.data.continent,
          countryName: response.data.country


        }
    });

  }).catch((error) => {
    console.log(error);
  });
};

  render() {
    return (
      <div>
        <div className="dataBody">
          <ShowDataTotal state={this.state} />
          <hr />
          <CountryData state={this.state} />
        </div>

      </div>
      
    );
  }
}

export default App;