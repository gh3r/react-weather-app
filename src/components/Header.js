var React = require('react');
var GetWeather = require('./GetWeather');

function Header() {
  return (
    <div className='navbar'>
      <h1>
        Weather App
      </h1>
      <GetWeather />
    </div>
  )
}

module.exports = Header;
