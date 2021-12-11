import React,{ useState, useEffect } from "react";

function NextDayForcast(props){
    return <div className="nextDayHead">
        <h5>{props.day}</h5>
        <img src={props.icon}/>
        <h5>{props.minTemp}</h5>
        <h5>{props.maxTemp}</h5>



        </div>
}

export default NextDayForcast