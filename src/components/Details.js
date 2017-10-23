import React from 'react';

import DailyForecast from './DailyForecast'


const Details = (props) => {
  const day = props.location.state;
  const { city } = props.match.params;

  return (
    <div className='details-container'>
      <DailyForecast day={day} />
      <p>{city}</p>
      <p>{day.weather[0].description}</p>
      <p>{`min temp: ${Math.round(day.temp.min)} degrees`}</p>
      <p>{`max temp: ${Math.round(day.temp.max)} degrees`}</p>
      <p>{`humidity: ${day.humidity}`}</p>
    </div>
  )
}

export default Details;
