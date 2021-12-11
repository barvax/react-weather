import React,{ useState } from "react"
import {Link} from "react-router-dom";

function Links(props) {

const [input,setInput] = useState("")


function HandleInput(e){
let i = e.target.value

console.log(i)
setInput(i)
}

function HandleClick(event){
   
    

    props.cityLink(input);
    setInput("")
    event.preventDefault();
}

    return <div>
        <h5 className="leftSideTitle">Another Location</h5>
            <hr/>
            <ul>

<form>
    <br/>
        <li><input onChange={HandleInput} value={input} placeholder="Enter location"/></li>
        <Link  to ="/"><li><button  onClick={HandleClick}>Go..</button></li></Link>
        </form>
        <div className="links">
             <Link style={{fontFamily:"'Oxygen', sans-serif",color:"darkgrey",fontSize:"12px",listStyle:"none",textDecoration:"none"}} to="/"><li onClick={() => {
           { props.cityLink('tel Aviv') }
        }}>{props.city1}
        </li></Link></div>
       
        <div className="links">
        <Link  style={{fontFamily:"'Oxygen', sans-serif",color:"darkgrey",fontSize:"12px",listStyle:"none",textDecoration:"none"}} to="/"><li onClick={() => {
            { props.cityLink('jerusalem') }
        }}>{props.city2}
        </li></Link>
        </div>
        <div className="links">
        <Link  style={{fontFamily:"'Oxygen', sans-serif",color:"darkgrey",fontSize:"12px",listStyle:"none",textDecoration:"none"}} to="/"><li onClick={() => {
           { props.cityLink('london') }
        }}>{props.city3}
        </li></Link>
        </div>
        
        <div className="links">
        <Link  style={{fontFamily:"'Oxygen', sans-serif",color:"darkgrey",fontSize:"12px",listStyle:"none",textDecoration:"none"}} to="/"><li onClick={() => {
            { props.cityLink('amsterdam') }
        }}>{props.city4}
        </li></Link>
        </div>


    </ul>
        </div>
}

export default Links;