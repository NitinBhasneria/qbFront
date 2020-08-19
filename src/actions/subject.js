import axios from 'axios';
import {API_URL} from './../statics/constant/api_urls';

import {
    SUBJECT_LOADING,
    SUBJECT_LOADED,
    SUBJECT_ERROR
} from './types'


export const getSubject = (Class) => async (dispatch) => {
    dispatch({type: SUBJECT_LOADING });
    if(Class=='class10'){
        try{    
            const res = await axios.get(`${API_URL}/students/${Class}/subject/`)
            console.log(res.data);
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
    else if(Class == 'class12'){console.log(Class);

        try{    
            const res1 = await axios.get(`${API_URL}/students/science/subject/`)
            const res2 = await axios.get(`${API_URL}/students/commerce/subject/`)
            var i = res2.data.length
            while(i>0){
                i--;
                res1.data.push(res2.data[i]);
            }
            console.log(res1.data);
            dispatch({
                type: SUBJECT_LOADED,
                payload: res1.data,
                dataLoaded: true
            })
        } catch(err) {
            dispatch({
                type: SUBJECT_ERROR,
            })
        }
    }    
    else {

        try{    
            const res = await axios.get(`${API_URL}/students/${Class}/subject/`)
            return res.data
        } catch(err) {
            return err;
        }
    }
}
