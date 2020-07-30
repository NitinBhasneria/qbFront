import React, { Component } from 'react';
import { login, logout } from '../../actions/auth';
import { connect } from 'react-redux';
import tqbLogo from './../../statics/images/TQB.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";import './auth.css';
import LoginForm from './login';
import RegisterPage from './register';

class ll extends Component {
    render(){
        return(<div>
            <h1>NITIN</h1>
            </div>
        )
    }
}

export default ll;