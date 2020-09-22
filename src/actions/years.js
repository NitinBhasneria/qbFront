import axios from 'axios';
import {API_URL} from './../statics/constant/api_urls';

import {
    YEAR_LOADING,
    YEAR_LOADED,
    YEAR_ERROR
} from './types'


export const getYear = (Class) => async (dispatch) => {
    dispatch({type: YEAR_LOADING });
    try{
        const res = await axios.get(`${API_URL}/students/${Class}/year/`)
        dispatch({
            type: YEAR_LOADED,
            payload: res.data,
            dataLoaded: true
        })
    } catch(err) {
        dispatch({
            type: YEAR_ERROR,
        })
    }
}