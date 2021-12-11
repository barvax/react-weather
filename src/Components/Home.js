import {Link} from "react-router-dom";
import MainRightBox from "./MainRightBox";
import "../Components/mainCityBox.css";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import React,{ useState, useEffect } from "react";
import MainLeftBox from "./mainLeftBox";

function Home(props){

    return <div>Home


<Link to="/screen1"> <button >screen1</button></Link>
<Link to="/screen2"> <button >screen2</button></Link>

 

        
        <div>
       <div >   
           
           </div>
              
             <div className="mainBoxRoot">
               <div className="parent">
       
       
               <div className={props.leftScreenClass} >
      
         
                   <MainLeftBox 
                   country= {props.country} 
                 localtime_epoch={props.localtime_epoch}
                 cityName={props.cityName}
                   temp_c={props.temp_c}
                   icon={props.icon}
                   text={props.text}
       
                   
                   />    
                
                
               
       
                 <div className="right-Screen">
                     
                 <MainRightBox 
                   
                    
                     LinkCity={props.LinkCity}
                    
                     TestMe={props.TestMe}
                     forcast={props.forcast}
                     forcastIcon={props.forcastIcon}
                     maxTemp={props.maxTemp}
                     mintemp={props.mintemp}
                     chanseOfRain={props.chanseOfRain}
                     wind={props.wind}
                     humidity={props.humidity}
                     cloud={props.cloud}
                     precip={props.precip}
                     uv={props.uv}
                     sunrise={props.sunrise}
                     sunset={props.sunset}
                     moonrise={props.moonrise}
                     moonset={props.moonset}
                     moon_phase={props.moon_phase}
                     moon_illumination={props.moon_illumination}
                     warnings={props.warnings}
                       />
       <Screen2
             myForcast1={props.myForcast1}
             myForcast2={props.myForcast2}
             myForcast3={props.myForcast3}
             myForcast4={props.myForcast4}
             cityName={props.cityName}
                  
                  />
     
                 </div>
               </div>
             </div>
           </div>
       
             



    </div>
    </div>
}

export default Home