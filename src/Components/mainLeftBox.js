
import getMyDate from "../myDate";
//import "./button.css"
import React ,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MainLeftBox(props) {
    const localtime_epoch = props.localtime_epoch;
    return (
        <div>

            <div className="mainCity-country">{props.country} </div>
          




            <div className="mainData ">
                <div className="line">
                    <div className="mainTemp">{props.temp_c}°</div>
                    <div className="Namemain-cityName">
                        {props.cityName}
                        <br />
                        <div className="main-data">
                            {getMyDate(localtime_epoch).d + "-"}
                            {getMyDate(localtime_epoch).day + ","}
                            {"" + getMyDate(localtime_epoch).dayOfMonth + " "}
                            {getMyDate(localtime_epoch).myMonth + " "}
                        </div>
                    </div>
                    <div className="left-min600-buttom">
                    <img className="icon" src={props.icon} alt="icon"></img>
                    <h5 className="left-min600-buttom-text">{props.text}</h5>
                    </div>
                    

                </div>

                <div>


                </div>
                <div className="linkToMoreInfoButton"><Link style={{fontFamily:"'Oxygen', sans-serif",color:"white",fontSize:"12px",listStyle:"none",textDecoration:"none"}} to="/screen1">click for more info...</Link></div>
            </div>
            
        </div>




    )
}

export default MainLeftBox

