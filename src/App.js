import logo from './logo.svg';
import './App.css';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';

import MainLeftBox from './Components/mainLeftBox';
import MainRightBox from './Components/MainRightBox';
import clear from './Images/clear.jpg'
import cloud from './Images/cloudy.jpg'
import rain from './Images/rain.jpg'
import snow from './Images/snow.jpg'
import elseWeather from './Images/elseWeather.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Links from './Components/Links';
import axios from "axios";
import getMyDate from "./myDate";
import React,{ useState, useEffect } from "react";
import Loading from './Components/Loading';

function App() {

  //const [myClass,setMyClass] = useState("");
  const [cityLink, setCityLink] = useState("tel aviv");
  //const [error, setEroor] = useState("");
  const [gai, setGai] = useState({});
  const [weather, setWeather] = useState();
  
  function LinkCity(id) {
    setCityLink(id);
    console.log("link city" + cityLink)
  
  }
      /*
  function TestMe(index) {
    setCityLink(index);
    console.log("link city" + cityLink)
  }
*/
  const Show = () => {

       
    getMyDate();
  

     axios.get("https://api.weatherapi.com/v1/forecast.json?key=0a999350705440169d581411210111&q=" +
     cityLink +
     "&days=3&aqi=yes&alerts=yes")
       .then((response) => {
         const weather = response.data;
         console.log(weather)              
              setWeather(response.data)
             
        var mosh =  {
           wind: weather.current.wind_kph,
           humidity: weather.current.humidity,
           cloud: weather.current.cloud,
           uv: weather.current.uv,
           icon: weather.current.condition.icon,
           country: weather.location.country,
           precip: weather.current.precip_mm,
           maxTemp: weather.forecast.forecastday[0].day.maxtemp_c,
           mintemp: weather.forecast.forecastday[0].day.mintemp_c,
           chanseOfRain: weather.forecast.forecastday[0].day.daily_chance_of_rain,
           forcast: weather.forecast.forecastday[0].day.condition.text,
           sunrise: weather.forecast.forecastday[0].astro.sunrise,
           sunset: weather.forecast.forecastday[0].astro.sunset,
           moonrise: weather.forecast.forecastday[0].astro.moonrise,
           moonset: weather.forecast.forecastday[0].astro.moonset,
           moon_phase: weather.forecast.forecastday[0].astro.moon_phase,
           moon_illumination:
             weather.forecast.forecastday[0].astro.moon_illumination,
           forcastIcon: weather.forecast.forecastday[0].day.condition.icon,
           temp_c:weather.current.temp_c,
           cityName : weather["location"]["name"],
           localtime_epoch:weather.location.localtime_epoch,
           text : weather.current.condition.text,
           nextForcast0: {
             time: weather.forecast.forecastday[0].hour[0].time_epoch,
             temp:14,
             text:weather.forecast.forecastday[0].hour[0].condition.text,
             icon:weather.forecast.forecastday[0].hour[0].condition.icon
           },
           nextForcast1:
           {
            time: weather.forecast.forecastday[0].hour[3].time_epoch,
            temp:weather.forecast.forecastday[0].hour[3].temp_c,
            text:weather.forecast.forecastday[0].hour[3].condition.text,
            icon:weather.forecast.forecastday[0].hour[3].condition.icon
            
           },
           nextForcast2:
           {
            time: weather.forecast.forecastday[0].hour[6].time_epoch,
            temp:weather.forecast.forecastday[0].hour[6].temp_c,
            text:weather.forecast.forecastday[0].hour[6].condition.text,
            icon:weather.forecast.forecastday[0].hour[6].condition.icon
           },
           nextForcast3:
           {
            time: weather.forecast.forecastday[0].hour[9].time_epoch,
            temp:weather.forecast.forecastday[0].hour[9].temp_c,
            text:weather.forecast.forecastday[0].hour[9].condition.text,
            icon:weather.forecast.forecastday[0].hour[9].condition.icon
           },
           nextForcast4:
           {
            time: weather.forecast.forecastday[0].hour[12].time_epoch,
            temp:weather.forecast.forecastday[0].hour[12].temp_c,
            text:weather.forecast.forecastday[0].hour[12].condition.text,
            icon:weather.forecast.forecastday[0].hour[12].condition.icon
           },
           nextForcast5:
           {
            time: weather.forecast.forecastday[0].hour[15].time_epoch,
            temp:weather.forecast.forecastday[0].hour[15].temp_c,
            text:weather.forecast.forecastday[0].hour[15].condition.text,
            icon:weather.forecast.forecastday[0].hour[15].condition.icon
           },
           nextForcast6:
           {
            time: weather.forecast.forecastday[0].hour[18].time_epoch,
            temp:weather.forecast.forecastday[0].hour[18].temp_c,
            text:weather.forecast.forecastday[0].hour[18].condition.text,
            icon:weather.forecast.forecastday[0].hour[18].condition.icon
           },
           nextForcast7:
           {
            time: weather.forecast.forecastday[0].hour[21].time_epoch,
            temp:weather.forecast.forecastday[0].hour[21].temp_c,
            text:weather.forecast.forecastday[0].hour[21].condition.text,
            icon:weather.forecast.forecastday[0].hour[21].condition.icon
           },
           nextForcast8:
           {
            time: weather.forecast.forecastday[1].hour[0].time_epoch,
            temp:weather.forecast.forecastday[1].hour[0].temp_c,
            text:weather.forecast.forecastday[1].hour[0].condition.text,
            icon:weather.forecast.forecastday[1].hour[0].condition.icon
           },
           nextForcast9:
           {
            time: weather.forecast.forecastday[1].hour[3].time_epoch,
            temp:weather.forecast.forecastday[1].hour[3].temp_c,
            text:weather.forecast.forecastday[1].hour[3].condition.text,
            icon:weather.forecast.forecastday[1].hour[3].condition.icon
           },
           nextForcast10:
           {
            time: weather.forecast.forecastday[1].hour[6].time_epoch,
            temp:weather.forecast.forecastday[1].hour[6].temp_c,
            text:weather.forecast.forecastday[1].hour[6].condition.text,
            icon:weather.forecast.forecastday[1].hour[6].condition.icon
           },
           nextForcast11:
           {
            time: weather.forecast.forecastday[1].hour[9].time_epoch,
            temp:weather.forecast.forecastday[1].hour[9].temp_c,
            text:weather.forecast.forecastday[1].hour[9].condition.text,
            icon:weather.forecast.forecastday[1].hour[9].condition.icon
           },
           nextForcast12:
           {
            time: weather.forecast.forecastday[1].hour[12].time_epoch,
            temp:weather.forecast.forecastday[1].hour[12].temp_c,
            text:weather.forecast.forecastday[1].hour[12].condition.text,
            icon:weather.forecast.forecastday[1].hour[12].condition.icon
           },
           nextForcast13:
           {
            time: weather.forecast.forecastday[1].hour[15].time_epoch,
            temp:weather.forecast.forecastday[1].hour[15].temp_c,
            text:weather.forecast.forecastday[1].hour[15].condition.text,
            icon:weather.forecast.forecastday[1].hour[15].condition.icon
           },
           nextForcast14:
           {
            time: weather.forecast.forecastday[1].hour[18].time_epoch,
            temp:weather.forecast.forecastday[1].hour[18].temp_c,
            text:weather.forecast.forecastday[1].hour[18].condition.text,
            icon:weather.forecast.forecastday[1].hour[18].condition.icon
           },
           nextForcast15:
           {
            time: weather.forecast.forecastday[1].hour[21].time_epoch,
            temp:weather.forecast.forecastday[1].hour[21].temp_c,
            text:weather.forecast.forecastday[1].hour[21].condition.text,
            icon:weather.forecast.forecastday[1].hour[21].condition.icon
           },
           
          
          
 
            };
        setGai(mosh)
       
       console.log(gai)
       console.log("----------")
       console.log(weather)
       console.log("----------")
      
       //  setEroor("");
       })
       .catch(function (error) {
         console.log(error);
        // setEroor("try agine..");
       });     
   };
   useEffect(() => {
    
    Show();
    
    
},[cityLink]);


 

  
function ron(){
let code=weather.current.condition.code;
  if(code<1003){
    return clear;
  }else if(code<1180){
return cloud;
  }else if(code<1210){
return rain;
  }else if(code<1240){
    return snow;
      }
      return elseWeather;
}
  return (
    <div className="App">
      <Switch>
      {(typeof weather!="undefined" ? 
    <div  className="App1"  style={{ backgroundImage: `url(${ron()})` }}>
     
      <Route path={"/"} exact render={()=>
      
        <MainLeftBox
        localtime_epoch={weather.location.localtime_epoch}
        country={weather.location.country}
        temp_c={weather.current.temp_c}
        icon={weather.current.condition.icon}
        cityName={weather.location.name}
        
        />}    
      
      />  <Route path={"/screen1"} exact render={()=>
        <Screen1
        forcast0={gai.nextForcast0}
        forcast1={gai.nextForcast1}
        forcast2={gai.nextForcast2}
        forcast3={gai.nextForcast3}
        forcast4={gai.nextForcast4}
        forcast5={gai.nextForcast5}
        forcast6={gai.nextForcast6}
        forcast7={gai.nextForcast7}
        forcast8={gai.nextForcast8}
        forcast9={gai.nextForcast9}
        forcast10={gai.nextForcast10}
        forcast11={gai.nextForcast11}
        forcast12={gai.nextForcast12}
        forcast13={gai.nextForcast13}
        forcast14={gai.nextForcast14}
        forcast15={gai.nextForcast15}
        cityName={gai.cityName}
   icon={gai.icon}
        localtime_epoch = {weather.location.localtime_epoch}
        temp_c={gai.temp_c}
        country={weather.location.country}
        />  
        } /> </div> 
        :<div>wow</div>)}
       
    </Switch>
    <div className="App2">
      <Links
      city1="Tel-Aviv"
      city2 = "Jerusalem"
      city3="London"
      city4 = "Amsterdam"
     
      cityLink={LinkCity}
    /></div>
    <Switch>
    {(typeof weather!="undefined" ?
    <div className="App3">
    
       <Route path={"/screen1"} exact render={()=>
      <Screen2
      myForcast1={{day:weather.forecast.forecastday[0].date, icon:weather.current.condition.icon,minTemp:weather.forecast.forecastday[0].day.mintemp_c,maxTemp:weather.forecast.forecastday[0].day.maxtemp_c}}
     myForcast2={{day:weather.forecast.forecastday[1].date, icon:weather.forecast.forecastday[1].day.condition.icon ,minTemp:weather.forecast.forecastday[1].day.mintemp_c, maxTemp:weather.forecast.forecastday[1].day.maxtemp_c}}
     myForcast3={{day:weather.forecast.forecastday[2].date, icon:weather.forecast.forecastday[2].day.condition.icon,minTemp:weather.forecast.forecastday[2].day.mintemp_c,maxTemp:weather.forecast.forecastday[2].day.maxtemp_c}}
      cityName={weather.location.name}
      
      />} /> 
       <Route path={"/"} exact render={()=>
        
        <MainRightBox
        forcast={weather["location"]["name"]}
        forcastIcon={gai.forcastIcon}
        maxTemp={gai.maxTemp}
        mintemp={gai.mintemp}
        chanseOfRain={gai.chanseOfRain}
        wind ={gai.wind}
        humidity={gai.humidity}
        cloud = {gai.cloud}
        precip= {gai.precip}
        uv={gai.uv}
        sunrise = {gai.sunrise}
        sunset={gai.sunset}
        moonrise = {gai.moonrise}
        moonset = {gai.moonset}
        moon_phase = {gai.moon_phase}
        moon_illumination={gai.moon_illumination}
        warnings = {gai.warnings}
        />}    
      
      />
       
        </div>

:<div>sgadrgadz</div>)}
    </Switch>
   

      
        
      
      
      
        
     
        <div>
     
  
 
    
     
 
     </div>
    </div>
  );
}

export default App;
