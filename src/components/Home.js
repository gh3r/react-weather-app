import React from 'react';

import GetWeather from './GetWeather';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='home-header'>Enter a City and State</h1>
      <GetWeather />
    </div>
  )
};

export default Home;
