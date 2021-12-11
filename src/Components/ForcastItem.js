
import React,{ useState, useEffect } from "react";
function ForcastIcon(props){

    return <div >
    <h5 className="forcastTemp">{props.temp}</h5>
    <h5>{props.condition}</h5>
   <img className="forcastImg" src={props.icon} alt="icon"></img>
   <h5 className="forcastTime"> {props.time}</h5>
   </div>
}

export default ForcastIcon