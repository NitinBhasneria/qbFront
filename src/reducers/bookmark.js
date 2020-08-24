import {
    BOOKMARK_ERROR,
    BOOKMARK_LOADED,
    BOOKMARK_LOADING,
} from './../actions/types'
// import action from 'redux-form/lib/actions';

const initialState = {
    isLoading: false,
    data: {},
    isDetailLoaded: false
  };

export default function (state = initialState, action){
    switch(action.type){
        case BOOKMARK_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case BOOKMARK_LOADED:
            return{
                isLoaded: false,
                data: action.payload,
                isDetailLoaded: true
            }
        case BOOKMARK_ERROR:

        default:
            return state;
    }
}