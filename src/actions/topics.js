import axios from 'axios';
import {API_URL} from './../statics/constant/api_urls';

import {
    TOPIC_LOADING,
    TOPIC_LOADED,
    TOPIC_ERROR
} from './types'


export const getTopic = (Class) => async (dispatch) => {
    dispatch({type: TOPIC_LOADING });
    try{
        const res = await axios.get(`${API_URL}/students/commerce/topic/`)
        dispatch({
            type: TOPIC_LOADED,
            payload: res.data,
            dataLoaded: true
        })
    } catch(err) {
        dispatch({
            type: TOPIC_ERROR,
        })
    }
}