import React, { useState } from 'react';
import '../../App.css';
import './HeroSection.css';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});

  function getForecast() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f5bba0c546msh01aa24054963d65p158acajsn4137d8605948",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(response => {
        setResponseObj(response)
      })
  }

  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1 className="header">Weather Dashboard</h1>
      <input className="field"
        type="text"
        placeholder="Enter a city"></input>
      <button className="field button" onClick={getForecast}>Get Forecast</button>
      <Conditions responseObj={responseObj}/>
    </div>
  )
}

export default Forecast;