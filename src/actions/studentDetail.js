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

export const updateDetail = (id, student_name, phone, syllabus, Class, sub1, sub2, sub3, sub4, sub5, user, image) => async (dispatch) => {
  var form_data = new FormData();
  form_data.append('id', id);
  form_data.append('student_name', student_name);
  form_data.append('phone', phone);
  form_data.append('syllabus', syllabus);
  form_data.append('Class', Class);
  form_data.append('sub1', sub1);
  form_data.append('sub2', sub2);
  form_data.append('sub3', sub3);
  form_data.append('sub4', sub4);
  form_data.append('sub5', sub5);
  form_data.append('user', user);
  // for (var pair of form_data.entries()) {
  //   console.log(pair[0]+ ', ' + pair[1]); 
  // }
  console.log(form_data);
  dispatch({ type: DETAIL_LOADING });
  try {
    const res = await axios.put(`${API_URL}/students/detail/${user}`, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
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

export const CreateStudentProfile = (student_name, phone, syllabus, Class, user, sub1, sub2, sub3, sub4, sub6) => async (dispatch) => {
  const body = JSON.stringify({student_name, phone, syllabus, Class, user, sub1, sub2, sub3, sub4, sub6});

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