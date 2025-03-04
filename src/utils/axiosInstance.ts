import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 10000,
});


api.interceptors.request.use((config) => {
  const cacheKey = `${config.url}?${new URLSearchParams(config.params).toString()}`;
  const cachedResponse = Cookies.get(cacheKey);

  if (cachedResponse) {
    return Promise.reject(JSON.parse(cachedResponse));
  }

  return config;
});

api.interceptors.response.use((response) => {
  const cacheKey = `${response.config.url}?${new URLSearchParams(response.config.params).toString()}`;

  Cookies.set(cacheKey, JSON.stringify(response), { expires: 5 / (24 * 60) });

  return response;
});

export default api;
