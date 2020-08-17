import {
    TOPIC_ERROR,
    TOPIC_LOADED,
    TOPIC_LOADING
} from './../actions/types'
import action from 'redux-form/lib/actions';

const initialState = {
    isLoading: false,
    data: {},
    isDetailLoaded: false
  };

export default function (state = initialState, action){
    switch(action.type){
        case TOPIC_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case TOPIC_LOADED:
            return{
                isLoaded: false,
                data: action.payload,
                isDetailLoaded: true
            }
        case TOPIC_ERROR:
        default:
            return state;
    }
}