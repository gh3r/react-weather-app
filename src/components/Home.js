var React = require('react');
var GetWeather = require('./GetWeather');

function Home() {
  return (
    <div className='home'>
      <h1 className='home-header'>Enter a City and State</h1>
      <GetWeather />
    </div>
  )
};

module.exports = Home;
