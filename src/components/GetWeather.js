var React = require('react');

function GetWeather() {
  return (
    <div className='get-weather'>
      <input
        type='text'
        placeholder='St. George, Utah'
        className='input'
      />
      <button type='button' className='btn'>Get Weather</button>
    </div>
  )
};

module.exports = GetWeather;
