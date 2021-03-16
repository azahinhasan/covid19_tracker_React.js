import React, { useEffect, Component } from 'react';
import axios from 'axios';
import ShowDataTotal from './components/showDataTotal';
import CountryData from './components/countryData';
import SearchCountry from './components/searchCountry';
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
    populations:'',
    error:false,
  },
  trackLocation:false,
  giveAcessToTrackLocation:false,
  dataOFcountrys:[]

}
componentDidMount(){
  this.TotalResult();
  this.CountryResult();
  this.RasultOFcountryList();
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

RasultOFcountryList = () => {
  console.log("COvid-19");
  axios.get('https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases&allowNull=false').then((response) => {
      console.log(response);

      const temp =response.data.list.slice(0,50);
      this.setState({dataOFcountrys : temp});
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


        },error:false
    });

  }).catch((error) => {
    console.log(error);
    this.setState({error: true})
  });
};

setCountry=(event)=>{
  event.preventDefault();
  this.setState({serachCountry: event.target.value});
  console.log(this.state.serachCountry);
}

getGeoInfo = () => {
  axios.get('https://extreme-ip-lookup.com/json/').then((response) => {
      //console.log(response);
 if(this.state.trackLocation == true){
      this.setState({serachCountry:response.data.country ,trackLocation : false})
      this.CountryResult();
 }
  }).catch((error) => {
      console.log(error);
  });
 
};


trackLocation=()=>{
  
  if(this.state.giveAcessToTrackLocation == false){
    var confirmAlert =  window.confirm("It will Track your Loaction!");
  }


  if(this.state.giveAcessToTrackLocation ||  confirmAlert){
    this.setState({trackLocation : true,giveAcessToTrackLocation : true});
    this.getGeoInfo();
  }

}

  render() {
    return (
      <div>
        <div className="dataBody">
          <ShowDataTotal state={this.state} />
          <hr />
          <SearchCountry
            setCountry={this.setCountry}
            loadCountryData={this.CountryResult}
            getGeoInfo={this.trackLocation}
          />
          {this.state.error ? <p>Not Found</p>:
          
          < CountryData state={this.state} />}
         
        </div>

      </div>
      
    );
  }
}

export default App;