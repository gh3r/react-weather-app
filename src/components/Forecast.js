import React from 'react';
import queryString from 'query-string';

import DailyForecast from './DailyForecast'
import api from '../utils/api';

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

  handleDetailClick = (day, city) => {
    this.props.history.push({
      pathname: '/details/' + city,
      state: day
    })
  }

  renderForecast = () => {
    const { forecastData } = this.state;
    const city = forecastData.city.name;

    return (
      <div>
        <h1 className='forecast-header'>{city}</h1>
        <div className='forecast'>
          {forecastData.list.map((day) => {
            return <DailyForecast key={day.dt} day={day} onClick={() => this.handleDetailClick(day, city)} />
          })}
        </div>
      </div>
    )

  }

  render() {
    const { loading } = this.state;

    return loading === true
          ? <h1 className='forecast-header'>Loading</h1>
          : this.renderForecast()
  }
}

export default Forecast;
