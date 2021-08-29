/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description HTTP client for all Web requests
 */

import axios from "axios";
const BASE_URL = "https://api.weatherstack.com";

/**
 * @description Request an HTTP GET
 * @param { String } endpoint: Resource endpoint
 * @param { Object } data: API response object
 */
export const get = async (endpoint) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${endpoint}`, {});
    return { data };
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      if (error.message === "Network Error")
        return { error: "Sin conexión al servidor" };
      return { error: error.message };
    }
  }
};

/**
 * @description Request an HTTP POST
 * @param { String } endpoint: Resource endpoint
 * @param { Object } payload: Request object
 * @param { Object } data: API response object
 */
export const post = async (endpoint, payload) => {
  try {
    const { data } = await axios.post(`${BASE_URL}${endpoint}`, payload, {});
    return { data };
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      if (error.message === "Network Error")
        return { error: "Sin conexión al servidor" };
      return { error: error.message };
    }
  }
};
