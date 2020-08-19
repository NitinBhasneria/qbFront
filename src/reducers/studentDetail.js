import {
    DETAIL_LOADING,
    DETAIL_LOADED,
    DETAIL_FAIL
  } from '../actions/types';
// import action from './../actions/syllabus'

  const initialState = {
    isLoading: false,
    data: {},
    isDetailLoaded: false
  };

  export default function (state = initialState, action) {
    switch (action.type) {
      case DETAIL_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case DETAIL_LOADED:
        return {
          isLoading: false,
          data: action.payload,
          isDetailLoaded: true
        };
      case DETAIL_FAIL:
      default:
        return state;
    }
  }