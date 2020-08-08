import {
    SUBJECT_ERROR,
    SUBJECT_LOADED,
    SUBJECT_LOADING
} from './../actions/types'
import action from './../actions/subject';

const initialState = {
    isLoading: false,
    data: {},
    isDetailLoaded: false
  };

export default function (state = initialState, action){
    switch(action.type){
        case SUBJECT_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case SUBJECT_LOADED:
            return{
                isLoaded: false,
                data: action.payload,
                isDetailLoaded: true
            }
        case SUBJECT_ERROR:
        default:
            return state;
    }
}