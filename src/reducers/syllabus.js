import {
    SYLLABUS_ERROR,
    SYLLABUS_LOADED,
    SYLLABUS_LOADING
} from './../actions/types'
// import action from 'redux-form/lib/actions';

const initialState = {
    isLoading: false,
    data: {},
    isDetailLoaded: false
  };

export default function (state = initialState, action){
    switch(action.type){
        case SYLLABUS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case SYLLABUS_LOADED:
            return{
                isLoaded: false,
                data: action.payload,
                isDetailLoaded: true
            }
        case SYLLABUS_ERROR:
        default:
            return state;
    }
}