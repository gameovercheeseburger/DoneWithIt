import axios from 'axios';


const apiKey = 'dd21c48ae29d116c5e7464f3fc6fc5b3';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        lat,
        lon,
        appid: apiKey,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error.response || error.message);
    return null;
  }
};