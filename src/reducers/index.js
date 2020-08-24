import { combineReducers } from 'redux'
import { LOGOUT_SUCCESS, SUB4_LOADING } from './../actions/types'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

//reducers
import auth from './auth'; // added
import studentDetail from './studentDetail';
import syllabus from './syllabus'
import subjects from './subjects';
import years from './years';
import question from './question';
import topic from './topic';
import profile from './profile';
import bookmark from './bookmark';
import solved from './solved';

const appReducer = combineReducers({
    auth: auth,
    studentdetail: studentDetail,
    syllabus: syllabus,
    subjects: subjects,
    years: years,
    question: question,
    topic: topic,
    image: profile,
    bookmark: bookmark,
    solved: solved,
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