import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='https://github.com/benorule' className='navbar-logo'>
            Weather Dashboard by Benjamin Turnbull
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
