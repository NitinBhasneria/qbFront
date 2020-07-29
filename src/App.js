//packages import 
import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.css';

//files
import history from './history';
import rootPersistReducer from './reducers';
import './App.css';
import LoginForm from './components/auth/login'; // added
import registerFrom from './components/auth/register';

let store = createStore(rootPersistReducer, composeWithDevTools(applyMiddleware(reduxThunk)))
let persistor = persistStore(store)

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
      <Switch>
            {/* <Route exact path='/' component={home} /> // updated */}
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/register' component={registerFrom} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
