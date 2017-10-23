import axios from 'axios';

import config from './config';

const { apiKey } = config;
const baseURL = 'http://api.openweathermap.org/data/2.5';

const handleError = (error) => {
  console.warn(error);
  return null;
}

const api = {
  fetchDailyWeather: (city) => {
    return axios.get(`${baseURL}/weather?q=${city}&type=accurate&APPID=${apiKey}`)
      .then(results => {
        return results.data;
      })
      .catch(handleError);
  },
  fetchForcastWeather: (city) => {
    return axios.get(`${baseURL}/forecast/daily?q=${city}&type=accurate&APPID=${apiKey}&cnt=5`)
      .then(results => {
        return results.data;
      })
      .catch(handleError);
  }
}

export default api;