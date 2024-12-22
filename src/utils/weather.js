import axios from "axios";

const API_KEY = "66f78083e23134c2acdf796c77202c69";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
