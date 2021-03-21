import React, {  Component } from 'react';
import axios from 'axios';
import ShowDataTotal from './components/showDataTotal';
import CountryData from './components/countryData';
import SearchCountry from './components/searchCountry';
import CountryListData from './components/countryListData';
import Spinner from './UI/Spinner';
import NavBar from './components/navBar';
import {Route,NavLink, Switch, Redirect,HashRouter} from 'react-router-dom';
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
  dataOFcountrys:[],
  sortBy:'cases',
  spinner:true

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

  axios.get('https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort='+this.state.sortBy+'&allowNull=false').then((response) => {
      console.log(response);

      const temp =response.data.slice(0,500);
      this.setState({dataOFcountrys : temp});
      //console.log(this.state.dataOFcountrys);
  }).catch((error) => {
      console.log(error);
  });
};

CountryResult = () => {

  this.setState({spinner:true});

  console.log("COvid-19");
  axios.get('https://disease.sh/v3/covid-19/countries/'+this.state.serachCountry+'?yesterday=false&twoDaysAgo=false&strict=true&allowNull=true').then((response) => {
    console.log(response);
    this.setState({
        countryData:{
          Cases: response.data.cases,
          Deaths: response.data.deaths,
          Recovered: response.data.recovered,
          TodayCases: response.data.todayCases==null ? "X": response.data.todayCases,
          TodayDeaths: response.data.todayDeaths==null ? "X": response.data.todayDeaths,
          TodayRecovered: response.data.todayRecovered==null ? "X": response.data.todayRecovered,
          populations:response.data.population,
          flag: response.data.countryInfo.flag,
          continent:response.data.continent,
          countryName: response.data.country


        },error:false,spinner:false
    });

  }).catch((error) => {

    console.log(error);
    this.setState({error: true,spinner:false})
  });
};

setCountry=(event)=>{
  event.preventDefault();
  this.setState({serachCountry: event.target.value});
  //console.log(this.state.serachCountry);
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

shortByPropulationHandler=()=>{
  this.setState({sortBy : 'population'}, () =>this.RasultOFcountryList());
}

shortByDeathsHandler=()=>{
  this.setState({sortBy : 'deaths'}, () =>this.RasultOFcountryList());
}

shortByRecoverdHandler=()=>{
  this.setState({sortBy : 'recovered'}, () =>this.RasultOFcountryList());
}

shortByCasesHandler=()=>{
  this.setState({sortBy : 'cases'}, () =>this.RasultOFcountryList());
}

shortByDropDownHandler=(event)=>{
  this.setState({sortBy:event.target.value}, () =>this.RasultOFcountryList() )
}

button =()=>{
  this.RasultOFcountryList();
}

  render() {
    const GitHublink = "covid19_tracker_React.js/";
    const GitHublinkHome = "covid19_tracker_React.js/home";


    let countryDataSpinner=null;

    if(this.state.spinner){
      countryDataSpinner=<Spinner/>
    }else{
      countryDataSpinner=<CountryData state={this.state} />;

      if(this.state.error){
        countryDataSpinner=<p>Not Found</p>;

      }
    }
   

    return (
      <div>
        <div className="dataBody">


          <NavBar/>

       
          <Redirect from={'/'} to={{pathname:'/home'}}/> 

         
          <Route path={'/home'}
          //exact
          render={(props)=>
          (<ShowDataTotal state={this.state}/>)
          }/>

          <Route path={'/home'} 
         // exact
          render={()=>
          (<SearchCountry  
            setCountry={this.setCountry}
            loadCountryData={this.CountryResult}
            getGeoInfo={this.trackLocation} /> )  
          }/>
          
          <Route path={'/home'} 
          render={()=>
          (countryDataSpinner)
          }/>
        


        <Route path={'/countryList'} 
          render={()=>
          (<CountryListData data={this.state.dataOFcountrys}

            shortByPropulation={this.shortByPropulationHandler}
            shortByDeaths={this.shortByDeathsHandler}
            shortByRecoverd={this.shortByRecoverdHandler}
            shortByCases={this.shortByCasesHandler}
            serachCountry={this.state.countryData.countryName}
            shortByDropDown={(event)=>this.shortByDropDownHandler(event)}
            button={this.button}
            sortBy={this.state.sortBy}/>)
          }/>
    
        </div>

      </div>
      
    );
  }
}

export default App;