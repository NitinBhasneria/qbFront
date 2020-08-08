import axios from 'axios';
import {API_URL} from './../statics/constant/api_urls';

import {
    SUBJECT_LOADING,
    SUBJECT_LOADED,
    SUBJECT_ERROR
} from './types'


export const getSubject = (syllabus_id) => async (dispatch) => {
    dispatch({type: SUBJECT_LOADING });
    try{
        const res = await axios.get(`${API_URL}/students/subject/${syllabus_id}/`)
        dispatch({
            type: SUBJECT_LOADED,
            payload: res.data,
            dataLoaded: true
        })
    } catch(err) {
        dispatch({
            type: SUBJECT_ERROR,
        })
    }
}