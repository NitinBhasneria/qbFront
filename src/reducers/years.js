import {
    YEAR_ERROR,
    YEAR_LOADED,
    YEAR_LOADING
} from './../actions/types'
import action from 'redux-form/lib/actions';

const initialState = {
    isLoading: false,
    data: {},
    isDetailLoaded: false
  };

export default function (state = initialState, action){
    switch(action.type){
        case YEAR_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case YEAR_LOADED:
            return{
                isLoaded: false,
                data: action.payload,
                isDetailLoaded: true
            }
        case YEAR_ERROR:
        default:
            return state;
    }
}