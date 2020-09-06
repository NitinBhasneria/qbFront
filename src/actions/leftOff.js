import axios from 'axios';
import {API_URL} from './../statics/constant/api_urls';

import {
    LEFTOFF_LOADING,
    LEFTOFF_LOADED,
    LEFTOFF_ERROR,
    LEFTOFF_CREATING,
    LEFTOFF_CREATED,
    LEFTOFF_CREATE_ERROR,
    LEFTOFF_UPDATED,
    LEFTOFF_UPDATING
} from './types'


export const getLeftOff = (user) => async (dispatch) => {
    dispatch({type: LEFTOFF_LOADING });
    try{    
        const res = await axios.get(`${API_URL}/students/leftOff/${user}`)
        dispatch({
            type: LEFTOFF_LOADED,
            payload: res.data,
            dataLoaded: true
        })
        // console.log(res.data)
    } catch(err) {
        dispatch({
            type: LEFTOFF_ERROR,
        })
    }
}

export const createLeftOff = (user, Year, Subject) => async (dispatch) => {
    const body = JSON.stringify({ user, Subject, Year });
    console.log(body)
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

    dispatch({type: LEFTOFF_CREATING });
    try{    
        const res = await axios.post(`${API_URL}/students/leftOff/`, body, config)
        dispatch({
            type: LEFTOFF_CREATED,
        })
    } catch(err) {
        console.log(err);
        dispatch({
            type: LEFTOFF_CREATE_ERROR,
        })
    }
}
export const updateLeftOff = (user, Year, Subject) => async (dispatch) => {
    const body = JSON.stringify({ user, Subject, Year });
    console.log(body)
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

    dispatch({type: LEFTOFF_UPDATING });
    try{    
        const res = await axios.put(`${API_URL}/students/leftOff/${user}`, body, config)
        dispatch({
            type: LEFTOFF_UPDATED,
            payload: res.data,
            dataLoaded: true
        })
        return true;
    } catch(err) {
        dispatch({
            type: LEFTOFF_ERROR,
        })
        return false;
    }
}

