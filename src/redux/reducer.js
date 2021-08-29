/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Pure components state managment (Reducers)
 */
import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR,
} from "./actionTypes";

const initialState = {
  weather: false,
  loading: false,
  error: false,
};

const rootReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: payload,
        error: false,
        loading: false,
      };

    case GET_WEATHER_ERROR:
      return {
        ...state,
        payload: false,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
