import {
    PROFILE_ERROR,
    PROFILE_LOADED,
    PROFILE_LOADING
} from './../actions/types'
// import action from 'redux-form/lib/actions';

const initialState = {
    isLoading: false,
    data: {},
    isDetailLoaded: false
  };

export default function (state = initialState, action){
    switch(action.type){
        case PROFILE_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case PROFILE_LOADED:
            return{
                isLoaded: false,
                data: action.payload,
                isDetailLoaded: true
            }
        case PROFILE_ERROR:
        default:
            return state;
    }
}