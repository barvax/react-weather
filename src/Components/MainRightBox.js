
import "../Components/mainCityBox.css"
import React ,{ useState, useEffect } from "react";


import Links from "./Links";
import MainForcast from "./MainForcast";
function MainRightBox(props) {

   
    return (<div>
        
       
            
          

           
           
         
        <MainForcast
        forcast={props.forcast}
        forcastIcon={props.forcastIcon}
        maxTemp={props.maxTemp}
        mintemp={props.mintemp}
        chanseOfRain={props.chanseOfRain}
        wind ={props.wind}
        humidity={props.humidity}
        cloud = {props.cloud}
        precip= {props.precip}
        uv={props.uv}
        sunrise = {props.sunrise}
        sunset={props.sunset}
        moonrise = {props.moonrise}
        moonset = {props.moonset}
        moon_phase = {props.moon_phase}
        moon_illumination={props.moon_illumination}
        warnings = {props.warnings}
        />

    </div>)

    
}

export default MainRightBox
