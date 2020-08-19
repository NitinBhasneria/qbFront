import {
    QUESTION_ERROR,
    QUESTION_LOADED,
    QUESTION_LOADING
} from './../actions/types'
// import action from 'redux-form/lib/actions';

const initialState = {
    isLoading: false,
    data: {},
    isDetailLoaded: false
  };

export default function (state = initialState, action){
    switch(action.type){
        case QUESTION_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case QUESTION_LOADED:
            return{
                isLoaded: false,
                data: action.payload,
                isDetailLoaded: true
            }
        case QUESTION_ERROR:
        default:
            return state;
    }
}