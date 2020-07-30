import React, { Component } from 'react';
import { login, logout } from '../../actions/auth';
import { connect } from 'react-redux';
import tqbLogo from './../../statics/images/TQB.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";
import './auth.css';
import LoginForm from './login';
import RegisterPage from './register';

class AuthNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: {
              username: '',
              password: ''
          },
          submitted: false,
      };
    }

    render(){
        return(
            <Router>
                <div className='authPage'>
                    <div className='navBar'>
                        <div className='logoCont'>
                            <img className='logoTQB' src={tqbLogo} alt='Logo'></img>
                        </div>
                        <div className='btnCont'>
                            <NavLink className='navAuthBtn' exact to="/login"><p className='btnText'>Login</p></NavLink>
                            <NavLink className='navAuthBtn' exact to="/register_1"><p className='btnText'>Signup</p></NavLink>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path='/login'>
                            <LoginForm />
                        </Route>
                        <Route exact path='/register_1'>
                            <RegisterPage />
                        </Route>
                        <Route exact path='/register_2'>
                            <RegisterPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }

}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  AuthNav = connect(
    mapStateToProps,
    { login, logout },
  )(AuthNav);
  
  export default AuthNav;