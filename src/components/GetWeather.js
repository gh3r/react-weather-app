import React from 'react';

import api from '../utils/api';

class GetWeather extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      city: ''
    };
  }

  handleWeatherSearch = () => {
    api.fetchDailyWeather(this.state.city)
      .then(res => {
        console.log(res);
      })
  }

  handleInputUpdate = (e) => {
    const city = e.target.value;

    this.setState({
        city
    })
  }

  render() {
    return (
      <div className='get-weather'>
        <input
          type='text'
          placeholder='St. George, Utah'
          className='input'
          onChange={this.handleInputUpdate}
          value={this.state.city}
        />
        <button
          type='button'
          className='btn'
          onClick={this.handleWeatherSearch}
        >
          Get Weather
        </button>
      </div>
    )
  };
}

export default GetWeather;
