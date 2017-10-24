import React from 'react';
import { Link } from 'react-router-dom';

import GetWeather from './GetWeather';

const Header = () => {
  return (
    <div className='navbar'>
      <Link
        className='navbar-header'
        to='/'
      >
        Weather App
      </Link>
      <GetWeather />
    </div>
  )
}

export default Header;
