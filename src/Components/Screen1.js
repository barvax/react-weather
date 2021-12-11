
import {Link} from "react-router-dom";
import React,{ useState, useEffect } from "react";
import getMyDate from "../myDate";
import ForcastIcon from "./ForcastItem";
import "../forcast.css"
import MainLeftBox from "./mainLeftBox";


function Screen1(props){

  const localtime_epoch = props.localtime_epoch;
  const[tempIndex , setTempIndex] = useState(0)
const [time , setTime] = useState([props.forcast0,props.forcast1,props.forcast2,props.forcast3,props.forcast4,props.forcast5,props.forcast6,props.forcast7,props.forcast8,props.forcast9,props.forcast10,props.forcast11,props.forcast12,props.forcast13,props.forcast14,props.forcast15])  

console.log(getMyDate(localtime_epoch).timeTolop)


function Delete(){
setTime(prevTime =>{
  
  return prevTime.filter((timeItem , index)=>{
    if(index*3>getMyDate(localtime_epoch).timeTolop){
      setTempIndex(index)
      return ( index<((getMyDate(localtime_epoch).timeTolop)/3)+7);
    }
    
  });
});
  
}
  


useEffect(() => {
    
  Delete();
 
  //    <Link to="/"> <button >home</button></Link>
},[]);
    return  (<div className="forcast-main">
  
     
       
     <div className="forcastHeader">
     <Link to="/" style={{fontFamily:"'Oxygen', sans-serif",color:"darkgrey",fontSize:"12px",listStyle:"none",textDecoration:"none"}}> <h5 className="backBtn" >Back...</h5></Link>
     <h1 style={{paddingLeft:"20px"}}>{props.cityName} {props.country}</h1>
     <div style={{display:"flex"}}>
     <h2 style={{paddingLeft:"20px"}}>{props.temp_c+"°c"}</h2>
        <h4 style={{paddingLeft:"20px",marginTop:"27px"}}>{getMyDate(props.localtime_epoch).d}</h4>
        <img className="forcastImgMain" src={props.icon}/>
     </div>
      
     </div>
       
                <div className="forcast-div">
        { time.map((timeItem ,index)=>{
         
         return( <ForcastIcon
         key={index} id={index}
         time={getMyDate(time[index].time).d}
         temp={time[index].temp+"°c"}
         condition={time[index].condition}
         icon={time[index].icon}
         />)
     
       })}
        </div>
      
       
      </div>)

   
    
    
   
}
export default Screen1