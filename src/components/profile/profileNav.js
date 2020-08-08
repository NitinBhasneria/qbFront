import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

class ProfileSideNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className='profileSideNav'>
                <div className='linksProfile'>
                    <NavLink activeClassName='accountDetailBtnClick linkBtnClick' className='accountDetailBtn linkBtn' exact to="/profile"><p className='btnTextProfile'>Account details</p></NavLink>
                    {/* <NavLink activeClassName='paymentBtnClick linkBtnClick' className='paymentBtn linkBtn' exact to="/payment"><p className='btnText'>Payment</p></NavLink> */}
                    <NavLink activeClassName='progressBtnClick linkBtnClick' className='progressBtn linkBtn' exact to="/progress"><p className='btnTextProfile'>Your Progress</p></NavLink>
                </div>
                <div className='logout'>
                    <hr style={{border:" 0.5px solid rgba(0, 0, 0, 0.54)"}}></hr>
                    <div className='logoutProfile'><p className='btnTextProfile'>Logout</p></div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

ProfileSideNav = connect(
    mapStateToProps,
    {  },
)(ProfileSideNav);

export default ProfileSideNav;