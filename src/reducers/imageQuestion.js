import {
    QIMAGE_ERROR,
    QIMAGE_LOADING,
    QIMAGE_LOADED,
} from './../actions/types'
// import action from 'redux-form/lib/actions';

const initialState = {
    isLoading: false,
    data: {},
    isDetailLoaded: false
  };

export default function (state = initialState, action){
    switch(action.type){
        case QIMAGE_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case QIMAGE_LOADED:
            return{
                isLoaded: false,
                data: action.payload,
                isDetailLoaded: true
            }
        case QIMAGE_ERROR:

        default:
            return state;
    }
}