import axios from 'axios';
import {API_URL} from '../statics/constant/api_urls';

import {
    QUESTION_LOADING,
    QUESTION_LOADED,
    QUESTION_ERROR
} from './types'

var Commerce = ['Economics', 'Accountancy', 'Business Studies', 'Mathematics']
var Science = ['Physics', 'Biology', 'Chemistry']

export const getQuestion = (subject, Class) => async (dispatch) => {
    if(Class == 'Class 12'){
        if(Commerce.includes(subject))
            Class = 'commerce'
        else if(Science.includes(subject))
            Class = 'science'
    }
    else if(Class = 'Class 10')
        Class = 'class10'
    if(subject!=''){
    dispatch({type: QUESTION_LOADING });
        try{
            const res = await axios.get(`${API_URL}/${subject}/${Class}/`)
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
}