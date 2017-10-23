import React from 'react';

const GetWeather = () => {
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

export default GetWeather;
