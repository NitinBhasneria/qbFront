import axios from 'axios';
import {API_URL} from './../statics/constant/api_urls';

import {
    BOOKMARK_LOADING,
    BOOKMARK_LOADED,
    BOOKMARK_ERROR,
    BOOKMARK_CREATING,
    BOOKMARK_CREATED,
    BOOKMARK_CREATE_ERROR,
    BOOKMARK_DELETE_ERROR,
    BOOKMARK_DELETING,
    BOOKMARK_DELETED
} from './types'


export const getBookmark = (user) => async (dispatch) => {
    dispatch({type: BOOKMARK_LOADING });
        try{    
            const res = await axios.get(`${API_URL}/students/bookmark/${user}/`)
            dispatch({
                type: BOOKMARK_LOADED,
                payload: res.data,
                dataLoaded: true
            })
        } catch(err) {
            dispatch({
                type: BOOKMARK_ERROR,
            })
        }
}

export const createBookmark = (user, qid, year, subject) => async (dispatch) => {
    const body = JSON.stringify({ user, qid, year, subject });

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

    dispatch({type: BOOKMARK_CREATING });
    try{    
        const res = await axios.post(`${API_URL}/students/bookmark/`, body, config)
        dispatch({
            type: BOOKMARK_CREATED,
        })
    } catch(err) {
        console.log(err);
        dispatch({
            type: BOOKMARK_CREATE_ERROR,
        })
    }
}

export const deleteBookmark = (user, qid) => async (dispatch) => {
    dispatch({ type: BOOKMARK_DELETING });
    try {
        const res = await axios.delete(`${API_URL}/students/bookmark/${user}/${qid}/`)
        dispatch({
            type: BOOKMARK_DELETED,
        })
    }
    catch(err) {
        dispatch({
            type: BOOKMARK_DELETE_ERROR,
        })
    }
}