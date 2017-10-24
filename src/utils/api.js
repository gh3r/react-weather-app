import axios from 'axios';

const apiKey = process.env.OPEN_WEATHER_API_KEY;
const baseURL = 'http://api.openweathermap.org/data/2.5';

const handleError = (error) => {
  console.warn(error);
  return null;
}

const api = {
  fetchDailyWeather: (city) => {
    return axios.get(`${baseURL}/weather?q=${city}&type=accurate&APPID=${apiKey}&units=metric`)
      .then(results => {
        return results.data;
      })
      .catch(handleError);
  },
  fetchForcastWeather: (city) => {
    return axios.get(`${baseURL}/forecast/daily?q=${city}&type=accurate&APPID=${apiKey}&cnt=5&units=metric`)
      .then(results => {
        return results.data;
      })
      .catch(handleError);
  }
}

export default api;
