import React from 'react';
import queryString from 'query-string';

import api from '../utils/api';

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
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

        console.log(res);
      })
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        {loading === true
          ? <p>Loading</p>
          : <p>Forecast Component</p>
        }
      </div>
    )
  }
}

export default Forecast;
