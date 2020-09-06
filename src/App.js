//packages import 
import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import authNav from './components/auth/authNav'; // added

let store = createStore(rootPersistReducer, composeWithDevTools(applyMiddleware(reduxThunk)))
let persistor = persistStore(store)

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router history={history} forceRefresh={true}>
      <Switch>
            <Route exact path='/qbFront/' component={authNav} /> // updated
            <Route exact path='/qbFront/login' component={authNav} />
            <Route exact path='/qbFront/register_1' component={authNav} />
            <Route exact path='/qbFront/register_2' component={authNav} />
            <Route exact path='/qbFront/profile' component={authNav} />
            <Route exact path='/qbFront/progress' component={authNav} />
            <Route exact path='/qbFront/qb' component={authNav} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
