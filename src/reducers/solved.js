import {
    SOLVED_ERROR,
    SOLVED_LOADED,
    SOLVED_LOADING,
} from './../actions/types'
// import action from 'redux-form/lib/actions';

const initialState = {
    isLoading: false,
    data: {},
    isDetailLoaded: false
  };

export default function (state = initialState, action){
    switch(action.type){
        case SOLVED_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case SOLVED_LOADED:
            return{
                isLoaded: false,
                data: action.payload,
                isDetailLoaded: true
            }
        case SOLVED_ERROR:

        default:
            return state;
    }
}