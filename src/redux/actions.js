/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Dispatch all actions with thunks
 */

import { get } from "api";
import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR,
} from "./actionTypes";

/**
 * @description Thunk for fetch the weather response
 * @param { Function } payload: Data payload to set into state
 */
export const getCurrentAction = (payload) => async (dispatch) => {
  dispatch({ type: GET_WEATHER_REQUEST });

  try {
    const { data, error } = await get(
      `/current?access_key=c7a267ee85d7df095a7c478ab0a8b82e&query=${payload}`
    );
    if (error || data?.error) throw error;
    dispatch({
      type: GET_WEATHER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_WEATHER_ERROR,
      payload: "Sorry we can't find it, try another city",
    });
  }
};
