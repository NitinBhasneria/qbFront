import axios from 'axios';
import {API_URL} from './../statics/constant/api_urls';

import {
    DETAIL_FAIL,
    DETAIL_LOADED,
    DETAIL_LOADING,
    STUDENT_PROFILE_CREATED,
    STUDENT_PROFILE_ERROR,

} from './types';

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

// LOAD STUDENTS DETAIL
export const loadDetail = (id) => async (dispatch) => {
    dispatch({ type: DETAIL_LOADING });
    try {
      const res = await axios.get(`${API_URL}/students/detail/${id}`);
      dispatch({
        type: DETAIL_LOADED,
        payload: res.data,
        dataLoaded: true
      });
      return res.data;
    } catch (err) {
      dispatch({
        type: DETAIL_FAIL,
      });
    }
  };

export const updateDetail = (id, student_name, phone, syllabus, Class, sub1, sub2, sub3, sub4, sub5, user ) => async (dispatch) => {
  const body = JSON.stringify({id, student_name, phone, syllabus, Class, sub1, sub2, sub3, sub4, sub5, user });
  console.log(body);
  dispatch({ type: DETAIL_LOADING });
  try {
    const res = await axios.put(`${API_URL}/students/detail/${user}`, body, config);
    dispatch({
      type: DETAIL_LOADED,
      payload: res.data,
      dataLoaded: true
    });
    return res.data;
  } catch (err) {
    dispatch({
      type: DETAIL_FAIL,
    });
  }
};

export const CreateStudentProfile = (student_name, phone, syllabus, Class, user) => async (dispatch) => {
  const body = JSON.stringify({student_name, phone, syllabus, Class, user});

  try {
    const res = await axios.post(`${API_URL}/students/`, body, config);
    dispatch({
      type: STUDENT_PROFILE_CREATED,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    dispatch({
      type: STUDENT_PROFILE_ERROR,
    });
    return err;
  }
};