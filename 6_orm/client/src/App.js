/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import TrafficLight from './components/TrafficLight'
import './App.css'
// import FOAAS from './components/FOAAS';
import IsAuthorizedHOC from './components/isAuthorizedHOC'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {/* <FOAAS /> */}
      <TrafficLight myData="Something" myData2="Something2" />
    </div>
  );
}

export default App
