import axios from 'axios';
import {API_URL} from './../statics/constant/api_urls';

import {
    SOLVED_LOADING,
    SOLVED_LOADED,
    SOLVED_ERROR,
    SOLVED_CREATING,
    SOLVED_CREATED,
    SOLVED_CREATE_ERROR,
    SOLVED_DELETE_ERROR,
} from './types'


export const getSolved = (user) => async (dispatch) => {
    dispatch({type: SOLVED_LOADING });
        try{    
            const res = await axios.get(`${API_URL}/students/solved/${user}/`)
            dispatch({
                type: SOLVED_LOADED,
                payload: res.data,
                dataLoaded: true
            })
        } catch(err) {
            dispatch({
                type: SOLVED_ERROR,
            })
        }
}

export const createSolved = (user, qid, yearsub) => async (dispatch) => {
    const body = JSON.stringify({ user, qid, yearsub });
    console.log(body);
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    // console.log(body)
    dispatch({type: SOLVED_CREATING });
    try{    
        const res = await axios.post(`${API_URL}/students/solved/`, body, config)
        dispatch({
            type: SOLVED_CREATED,
        })
    } catch(err) {
        console.log(err);
        dispatch({
            type: SOLVED_CREATE_ERROR,
        })
    }
}