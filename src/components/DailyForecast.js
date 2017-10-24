import React from 'react';
import helpers from '../utils/helpers';

const DailyForecast = (props) => {
  const { day } = props;
  const date = helpers.convertTime(day.dt);
  const icon = day.weather[0].icon;
  const iconPath = require(`Assets/icons/${icon}.svg`);

  return (
    <div
      className='daily-forecast'
      onClick={props.onClick}
    >
      <img className='weather-icon' src={iconPath} />
      <h2 className='subheader'>{date}</h2>
    </div>
  );
}

export default DailyForecast;
