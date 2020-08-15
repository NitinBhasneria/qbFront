import axios from 'axios';
import {API_URL} from './../statics/constant/api_urls';

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from './types';

// LOAD USER
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  
  try {
    const res = await axios.get(`${API_URL}/auth/user`, tokenConfig(getState));
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// LOGIN USER
export const login = ({ email, password }) => async dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request Body
  const body = JSON.stringify({ email, password });
  console.log('login');
  try {
    const res = await axios.post('http://127.0.0.1:8000/auth/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// REGISTER USER
export const register = ({ email, password }) => async dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request Body
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${API_URL}/auth/register/`, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    return (res.data.user.id);
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// LOGOUT USER
export const logout = () => async (dispatch, getState) => {
    // await axios.post(`${API_URL}/auth/logout`, null, tokenConfig(getState));
    console.log('logout');
    dispatch({
      type: LOGOUT_SUCCESS
    });
  };

// helper function
export const tokenConfig = getState => {
  // Get token
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};