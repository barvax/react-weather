import { Link} from "react-router-dom";
import Table from "./Table";
import NextDayForcast from "./NextDayForcast";


import React,{ useState, useEffect } from "react";

/*{day:1,icon:"rob" , minTemp:"12", maxTemp:"80"},{day:1,icon:"r44b" , minTemp:"7", maxTemp:"40"}*/ 
 
function Screen2(props){
  const [day , setDay] = useState([(props.myForcast1),(props.myForcast2),(props.myForcast3)]) 
    return<div>
       
       <h5 style={{marginLeft:"45px"}}>Next Day Forcast in {props.cityName}</h5>
       <div style={{display: "flex",justifyContent: " space-around" ,margin:"0"}}><h5>Date</h5><h5>Forcast</h5><h5>Min </h5><h5>Max</h5></div>
      
     { day.map((id,index)=>{
     
        return  <NextDayForcast
        key={index}
        day={day[index].day}
        icon={day[index].icon}
        minTemp={day[index].minTemp+"°c"}
        maxTemp={day[index].maxTemp+"°c"}
        />
      })}
        

        </div>

   
    
    
   
}
export default Screen2