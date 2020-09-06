import {
    LEFTOFF_ERROR,
    LEFTOFF_LOADED,
    LEFTOFF_LOADING,
    LEFTOFF_UPDATED,
    LEFTOFF_UPDATING
} from './../actions/types'
// import action from 'redux-form/lib/actions';

const initialState = {
    isLoading: false,
    data: {},
    isDetailLoaded: false
  };

export default function (state = initialState, action){
    switch(action.type){
        case LEFTOFF_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case LEFTOFF_LOADED:{
            return{
                isLoaded: false,
                data: action.payload,
                isDetailLoaded: true
            }
        }
        case LEFTOFF_UPDATING:
            return {
                ...state,
                isLoading: true
            }
        case LEFTOFF_UPDATED:{
            return{
                isLoaded: false,
                data: action.payload,
                isDetailLoaded: true
            }
        }
        case LEFTOFF_ERROR:

        default:
            return state;
    }
}