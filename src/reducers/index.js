import { combineReducers } from 'redux'
import { LOGOUT_SUCCESS } from './../actions/types'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

//reducers
import auth from './auth'; // added
import studentDetail from './studentDetail';
import syllabus from './syllabus'
import subjects from './subjects';

const appReducer = combineReducers({
    auth: auth,
    studentdetail: studentDetail,
    syllabus: syllabus,
    subjects: subjects
  });
  
  const rootPersistConfig = {
    key: 'root',
    storage,
  }
  
  const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
      state = undefined;
    }
    return appReducer(state, action);
  };
  
  const rootPersistReducer =  persistReducer(rootPersistConfig, rootReducer)
  
  export default rootPersistReducer;
  // export default rootReducer;