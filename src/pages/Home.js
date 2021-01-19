import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection/HeroSection.js';
import Footer from '../components/Footer/Footer.js';
import Conditions from '../components/Conditions/Conditions.js';


function Home() {
  return (
    <>
      <HeroSection />
      {/* <Conditions /> */}
      <Footer />
    </>
  );
}

export default Home;
