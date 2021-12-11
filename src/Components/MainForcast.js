import Table from "./Table";
import React,{ useState, useEffect } from "react";
function MainForcast(props){


    return(
        <div>
        <h5 className="leftSideTitle">Forcast  </h5>           
        <hr/>
        <div style={{display:"flex"}}>
        <div className="day-forcast">{props.forcast}</div>
                <img className="forcasicon" src={props.forcastIcon} alt="forcasicon"></img>
        </div>
        <br/>
        <Table
         title = "MaxTemp"
         value = {props.maxTemp+"°"}
      
        />
        <Table
         title = "MinTemp"
         value = {props.mintemp+"°"}
      
        />

        <Table
         title = "ChanseOfRain"
         value = {props.chanseOfRain+"%"}
      
        />
        <br/>
        <h5 className="leftSideTitle">Weather Details </h5>
        <hr/>
        <Table
         title = "Wind" 
         value = {props.wind + ' kph'}
      
        />
        <Table
         title = "Humidity"
         value = {props.humidity + ' %'}
      
        />
        <Table
         title = "Cloud"
         value = {props.cloud +' %'}
      
        />

<h5 className="leftSideTitle"> Info </h5>
      <hr/>
        <Table
         title = "Precipitation"
         value = {props.precip +' mm'}
      
        />
        <Table
         title = "UV"
         value = {props.uv}
      
        />
       
         
        

    <h5 className="leftSideTitle">Astro </h5>
      <hr/>
      <Table
         title = "Sunrise"
         value = {props.sunrise}
      
        />
         <Table
         title = "SunSet"
         value = {props.sunset}
      
        />
          <Table
         title = "Moon Rise"
         value = {props.moonrise}
      
        />
         <Table
         title = "Moon Set"
         value = {props.moonset}
      
        />
         <Table
         title = "Moon Phase"
         value = {props.moon_phase}
      
        />
         <Table
         title = "Moon Ilomination"
         value = {props.moon_illumination+"%"}
      
        />
         <h5 className="leftSideTitle">Warnings </h5>
      <hr/>
     <div className="warnings">{props.warnings || "no wornings"}</div>
     <br/>
     <br/>
    </div>
    )
}
export default MainForcast;