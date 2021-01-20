import React, { useState } from 'react';
import '../../App.css';
import './HeroSection.css';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState('');
  let [unit, setUnit] = useState('imperial');
  const uriEncodedCity = encodeURIComponent(city);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  function getForecast(e) {
    e.preventDefault();
    if (city.length === 0) {
      return setError(true);
    }
    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});

    setLoading(true);

    let uriEncodedCity = encodeURIComponent(city);

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${uriEncodedCity}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f5bba0c546msh01aa24054963d65p158acajsn4137d8605948",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(response => {
        if (response.cod !== 200) {
          throw new Error()
        }
        setResponseObj(response);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
      });
  }

  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1 className="header">Weather Dashboard</h1>
      <Conditions responseObj={responseObj} error={error} loading={loading} />
      <form onSubmit={getForecast}>
        <input
          className="field"
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>

        <button className="field button" type="submit">Get Forecast</button>

      </form>
    </div>
  )
}

export default Forecast;