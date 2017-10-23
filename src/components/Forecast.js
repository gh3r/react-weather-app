import React from 'react';
import queryString from 'query-string';

import api from '../utils/api';
import helpers from '../utils/helpers';

const DailyForecast = (props) => {
  const { day } = props;
  const date = helpers.convertTime(day.dt);
  const icon = day.weather[0].icon;

  return (
    <div className='daily-forecast'>
      <img className='weather-icon' src={`/assets/icons/${icon}.svg`} />
      <h2 className='subheader'>{date}</h2>
    </div>
  );
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecastData: {},
      loading: true
    }
  }

  componentDidMount() {
    const { city } = queryString.parse(this.props.location.search);

    api.fetchForcastWeather(city)
      .then(res => {
        this.setState({
          forecastData: res,
          loading: false
        })
      });
  }

  renderForecast = (forecast) => {
    return (
      <div>
        <h1 className='forecast-header'>{forecast.city.name}</h1>
        <div className='forecast'>
          {forecast.list.map((day) => {
            return <DailyForecast key={day.dt} day={day} />
          })}
        </div>
      </div>
    )

  }

  render() {
    const { loading, forecastData } = this.state;

    return loading === true
          ? <h1 className='forecast-header'>Loading</h1>
          : this.renderForecast(forecastData)
  }
}

export default Forecast;
