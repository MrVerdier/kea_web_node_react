import React from 'react'
import { FaCocktail } from 'react-icons/fa';

export default function({online}) {
    return (
      <header>
      <div id="logoMobile"><FaCocktail /></div>
        <h1>Drinkster</h1>
        { online === 1 ? (<div id="onlineCounter">
          <p>
            <span role="img" aria-label="online">&#127865; </span>
            <span>{online} </span>
            person are searching for drinks right now! &#127865;
            </p>
        </div>) 
        : (
          <div id="onlineCounter">
          <p>
            <span role="img" aria-label="online">&#127865; </span>
            <span>{online} </span>
            persons are searching for drinks right now! &#127865;
            </p>
        </div>
        )}
      </header>
    )
}