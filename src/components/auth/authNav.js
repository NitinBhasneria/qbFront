import React, { Component } from 'react';
import { login, logout } from '../../actions/auth';
import { connect } from 'react-redux';
import tqbLogo from './../../statics/images/TQB.png';
import tqblogoquest from './../../statics/images/tqbQuestLogo.png'
import profileLogo from './../../statics/images/profile.png'
import Profile from './../profile/profile';
import history from './../../history';
import MediaQuery from 'react-responsive';
import QB from './../qb/qbHome';
import { loadDetail } from './../../actions/studentDetail'
import { loadProfile } from './../../actions/profile'
import profileImage from './../../statics/images/profileIcon.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    withRouter
  } from "react-router-dom";
import './auth.css';
import LoginForm from './login';
import RegisterPage from './register';
import HomePage from '../home/homeMain';
import Mobile from './mobilenav'

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
      if(this.props.auth.user){
        this.props.loadDetail(this.props.auth.user.user.id);
        this.props.loadProfile(this.props.auth.user.user.id);
    }}

    render(){
        return(
            <Router history={history}>
                <div className='authPage'>
                    
                    <div className={'tqbnavBarLogin'}>
                        <div className={(this.props.history.location.pathname=='/qbFront/')?'logoCountQuest':'logoCont'} onClick={()=>{this.props.history.push('/')}}>
                            <img className={(this.props.history.location.pathname=='/qbFront/')?'tqblogoquest':'logoTQB'} src={(this.props.history.location.pathname=='/')?tqblogoquest:tqbLogo} alt='Logo'></img>
                        </div>
                        <div className={(this.props.history.location.pathname=='/qbFront/')?'btnContQuestHome':'btnCont'}>
                            <Switch>
                                <Route exact path='/qbFront/'>
                                    <MediaQuery query="(min-device-width: 801px)">
                                        <NavLink className='navAuthBtn' exact to="/qbFront/"><p className='btnText'>About us</p></NavLink>
                                        <NavLink className='navAuthBtn' exact to="/qbFront/login"><p className='btnText'>Login</p></NavLink>
                                        <NavLink className='navAuthBtn ' exact to="/qbFront/"><p className='getStartBtn btnText'>GET STARTED</p></NavLink>
                                    </MediaQuery>
                                    
                                </Route>
                                <Route exact path='/qbFront/login'>
                                    <MediaQuery query="(min-device-width: 801px)">
                                        <NavLink className='navAuthBtn' exact to="/qbFront/"><p className='btnText'>Login</p></NavLink>
                                        <NavLink className='navAuthBtn' exact to="/qbFront/register_1"><p className='btnText'>SignUp</p></NavLink>
                                    </MediaQuery>
                                </Route>
                                <Route exact path='/qbFront/register_1'>
                                    <MediaQuery query="(min-device-width: 801px)">
                                        <NavLink className='navAuthBtn' exact to="/qbFront/login"><p className='btnText'>Login</p></NavLink>
                                        <NavLink className='navAuthBtn' exact to="/qbFront/login"><p className='btnText'>SignUp</p></NavLink>
                                    </MediaQuery>
                                </Route>
                                <Route exact path='/qbFront/register_2'>
                                    <MediaQuery query="(min-device-width: 801px)">
                                        <NavLink className='navAuthBtn' exact to="/qbFront/"><p className='btnText'>Login</p></NavLink>
                                        <NavLink className='navAuthBtn' exact to="/qbFront/login"><p className='btnText'>SignUp</p></NavLink>
                                    </MediaQuery>
                                </Route> 
                                <Route exact path='/qbFront/profile'>
                                    <MediaQuery query="(min-device-width: 801px)">
                                        <NavLink className='navAuthBtn' exact to="/qbFront/"><p className='btnText'>Login</p></NavLink>
                                        <NavLink className='navAuthBtn' exact to="/qbFront/login"><p className='btnText'>SignUp</p></NavLink>
                                    </MediaQuery>
                                </Route> 
                                <Route exact path='/qbFront/progress'>
                                    <MediaQuery query="(min-device-width: 801px)">
                                        <NavLink className='navAuthBtn' exact to="/qbFront/"><p className='btnText'>Login</p></NavLink>
                                        <NavLink className='navAuthBtn' exact to="/qbFront/login"><p className='btnText'>SignUp</p></NavLink>
                                    </MediaQuery>
                                </Route> 
                                <Route exact path='/qbFront/qb'>
                                    <img className='logoProfileTQB' src={(this.props.image.data.image)?this.props.image.data.image:profileImage} alt='Logo'></img>
                                </Route> 
                            </Switch>
                        </div>
                        <MediaQuery query = "(max-device-width: 800px)">
                            <Switch>
                                <Route exact path='/qbFront/'>
                                    <Mobile history={this.props.history} first="Signup" firstPath='/register_1' second='login' secondPath='/login' />
                                </Route>
                                <Route exact path='/qbFront/login'>
                                    <Mobile first="Signup" firstPath='/qbFront/register_1' second='login' secondPath='/login' />
                                </Route>
                                <Route exact path='/qbFront/register_1'>
                                    <Mobile first="Signup" firstPath='/qbFront/register_1' second='login' secondPath='/login' />
                                </Route>
                                <Route exact path='/qbFront/register_2'>
                                    <Mobile first="Signup" firstPath='/qbFront/register_1' second='login' secondPath='/login' />
                                </Route>
                                <Route exact path='/qbFront/profile'>
                                    <Mobile first="Signup" firstPath='/qbFront/register_1' second='login' secondPath='/login' />
                                </Route>
                                <Route exact path='/qbFront/progress'>
                                    <Mobile first="Signup" firstPath='/qbFront/register_1' second='login' secondPath='/login' />
                                </Route>
                                <Route exact path='/qbFront/qb'>
                                    <Mobile first="Signup" firstPath='/qbFront/register_1' second='login' secondPath='/login' />
                                </Route>
                            </Switch>
                        </MediaQuery>
                    </div>
                    <Switch>
                        <Route exact path='/qbFront/login'>
                            <LoginForm />
                        </Route>
                        <Route exact path='/qbFront/register_1'>
                            <RegisterPage />
                        </Route>
                        <Route exact path='/qbFront/register_2'>
                            <RegisterPage />
                        </Route>
                        <Route exact path='/qbFront/'>
                            <HomePage />
                        </Route>
                        <Route exact path='/qbFront/profile'>
                            <Profile />
                        </Route>
                        <Route exact path='/qbFront/progress'>
                            <Profile />
                        </Route>
                        <Route exact path='/qbFront/qb'>
                            <QB />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }

}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    detail: state.studentdetail,
    image: state.image,
  });
  
  AuthNav = connect(
    mapStateToProps,
    { login, logout, loadDetail, loadProfile },
  )(AuthNav);
  
  export default withRouter(AuthNav);