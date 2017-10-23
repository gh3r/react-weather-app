import React from 'react';
import { Link } from 'react-router-dom';

class GetWeather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    };
  }

  handleInputUpdate = (e) => {
    const city = e.target.value;

    this.setState({
        city
    });
  }

  render() {
    const { city } = this.state;

    return (
      <div className='get-weather'>
        <input
          type='text'
          placeholder='St. George, Utah'
          className='input'
          onChange={this.handleInputUpdate}
          value={city}
        />
        <Link
          className='btn'
          to={{
            pathname: `/forecast`,
            search: `?city=${city}`
          }}
        >
          Get Weather
        </Link>
      </div>
    )
  };
}

export default GetWeather;
