import React from 'react';

import GetWeather from './GetWeather';

const Header = () => {
  return (
    <div className='navbar'>
      <h1>
        Weather App
      </h1>
      <GetWeather />
    </div>
  )
}

export default Header;
