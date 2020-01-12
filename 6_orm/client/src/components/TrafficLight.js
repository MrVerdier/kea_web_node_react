import React, { useState } from 'react'

export default function TrafficLight({myData, myData2}) {
  const [trafficLight, changeTrafficLight] = useState("RED") // 

  function changeTheTrafficLight() {
        debugger;
        trafficLight === "RED" ? changeTrafficLight('GREEN') : changeTrafficLight('RED')
        let test = "adf"
    }

    return (
        <div id="trafficLight">
            <h1 style={{ "color": trafficLight}}>{ trafficLight }</h1>
            <button onClick={changeTheTrafficLight}>Change Traffic Light</button>

            {/* <button style={{"backgroundColor": "red"}} onClick={()=> {changeTrafficLight("RED")}}>Red</button>
            <button style={{"backgroundColor": "yellow"}} onClick={()=> {changeTrafficLight("YELLOW")}}>Yellow</button>
            <button style={{"backgroundColor": "green"}} onClick={()=> {changeTrafficLight("GREEN")}}>Green</button> */}
        </div>
    )
}
