import axios from 'axios';
import {API_URL} from './../statics/constant/api_urls';

import {
    SYLLABUS_ERROR,
    SYLLABUS_LOADED,
    SYLLABUS_LOADING,
} from './types'

export const loadSyllabus = () => async (dispatch) => {
    dispatch({type: SYLLABUS_LOADING });
    try{
        const res = await axios.get(`${API_URL}/students/syllabus/`);
        dispatch({
            type: SYLLABUS_LOADED,
            payload: res.data,
            dataLoaded: true
        });
        return res.data;
    }
    catch(err) {
        dispatch({
            type: SYLLABUS_ERROR,
        });
    }
}
