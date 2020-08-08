import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS
  } from '../actions/types';
  
  const initialState = {
    isLoading: false,
    isAuthenticated: null,
    user: {
      user: {
        username:''
      }
    },
    token: null,
    logoutButtonDisplay: false
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case REGISTER_SUCCESS:
      case REGISTER_FAIL:
      case USER_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case USER_LOADED:
        return {
          ...state,
          isLoading: false,
          isAuthenticated: true,
          user: action.payload,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isAuthenticated: true,
          logoutButtonDisplay:true,
          user:action.payload,
          token: action.payload['token']
        };
      case AUTH_ERROR:
      case LOGIN_FAIL:
        return {
          ...state,
          isLoading: false,
          isAuthenticated: false,
          user: null,
          token: null
        };
      case LOGOUT_SUCCESS:
        return {  
          ...state,
          logoutButtonDisplay:false,
          isLoading: false,
          isAuthenticated: false,
          user: null,
          token: null
        };
      default:
        return state;
    }
  }