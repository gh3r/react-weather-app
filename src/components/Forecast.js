import React from 'react';
import queryString from 'query-string';

import DailyForecast from './DailyForecast'
import Loading from './Loading';
import Error from './Error';
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
    const city = forecastData ? forecastData.city.name : null;

    if(!city) {
      return <Error name='Unexpected error!' description='Sorry, something went wrong, please try again later.'/>
    }

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
          ? <Loading />
          : this.renderForecast()
  }
}

export default Forecast;
