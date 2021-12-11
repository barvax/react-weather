
import React,{ useState, useEffect } from "react";

function Table(props){


    return <div>
        <table >
        <tbody>
  <tr>
  
    <td>{props.title}</td>
    <td className="tdValue">{props.value}</td>
   
  </tr>
 
  </tbody>
</table>
    </div>
    
}

export default Table;