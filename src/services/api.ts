import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    lang: "pt_br",
    units: "metric",
    appid: import.meta.env.VITE_WEATHER_APP_API,
  },
});