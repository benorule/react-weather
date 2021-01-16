import React from 'react';
import '../../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1 className="header">Weather Dashboard</h1>
      <div>
        <input className="field"
          type="text"
          placeholder="Enter a city"></input>
      </div>
    </div>
  );
}

export default HeroSection;
