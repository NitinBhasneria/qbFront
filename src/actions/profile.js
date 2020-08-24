import axios from 'axios';
import {API_URL} from './../statics/constant/api_urls';

import {
    PROFILE_LOADED,
    PROFILE_LOADING,
    PROFILE_ERROR

} from './types';

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export const loadProfile = (id) => async (dispatch) => {
    dispatch({ type: PROFILE_LOADING });
      try {
        const res = await axios.get(`${API_URL}/students/profile/${id}`);
        dispatch({
          type: PROFILE_LOADED,
          payload: res.data,
          dataLoaded: true
        });
        return res.data;
      } catch (err) {
        dispatch({
          type: PROFILE_ERROR,
        });
      }
  }
  
  export const updateProfile = (user, image) => async (dispatch) => {
    var form_data = new FormData();
    form_data.append('image', image);
    form_data.append('user', user);
    dispatch({ type: PROFILE_LOADING });
    try {
      const res = await axios.put(`${API_URL}/students/profile/${user}`, form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      dispatch({
        type: PROFILE_LOADED,
        payload: res.data,
        dataLoaded: true
      });
      return res.data;
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
      });
    }
  };
  
  export const CreateProfile = (user, image) => async (dispatch) => {
    var form_data = new FormData();
    form_data.append('image', image);
    form_data.append('user', user);
    dispatch({ type: PROFILE_LOADING });
    for (var pair of form_data.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
  
    try {
      const res = await axios.post(`${API_URL}/students/profile/`, form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      dispatch({
        type: PROFILE_LOADED,
        payload: res.data,
      });
      return res.data;
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
      });
      return err;
    }
  };
  