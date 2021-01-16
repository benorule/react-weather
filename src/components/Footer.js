import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-logo'>
        <a href='https://github.com/benorule' className='social-logo'>
          Click here to view more projects by Benjamin Turnbull
        </a>
      </div>
    </div>
  );
}

export default Footer;
