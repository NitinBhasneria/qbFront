import axios from 'axios';
import {API_URL} from '../statics/constant/api_urls';

import {
    QUESTION_LOADING,
    QUESTION_LOADED,
    QUESTION_ERROR
} from './types'


export const getQuestion = (subject, Class) => async (dispatch) => {
        console.log(subject);
        dispatch({type: QUESTION_LOADING });
        try{
            const res = await axios.get(`http://127.0.0.1:8000/students/${subject}/science/`)
            dispatch({
                type: QUESTION_LOADED,
                payload: res.data,
                dataLoaded: true
            })
        } catch(err) {
            dispatch({
                type: QUESTION_ERROR,
            })
        }
}