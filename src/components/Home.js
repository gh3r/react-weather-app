import React from 'react';

import GetWeather from './GetWeather';

const bgImage = require(`../../assets/pattern.svg`);
const styles = {
  backgroundImage: `url('${bgImage}')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

const Home = () => {
  return (
    <div className='home' style={styles}>
      <h1 className='home-header'>Enter a City and State</h1>
      <GetWeather />
    </div>
  )
};

export default Home;
