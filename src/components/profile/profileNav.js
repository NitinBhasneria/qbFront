import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './../../actions/auth';
// import history from '../../history';
import MediaQuery from 'react-responsive';
import {
    // BrowserRouter ,
    // Switch,
    // Route,
    NavLink,
} from "react-router-dom";

class ProfileSideNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logOut: false,
        }
        this.logoutProfile = this.logoutProfile.bind(this);
        this.logoutProfileCancel = this.logoutProfileCancel.bind(this);
    }

    logoutProfile(){
        this.setState({
            logOut: true,
        });
    }

    logoutProfileCancel(){
        this.setState({
            logOut: false,
        });
    }

    render() {
        return (
            <div className='profileSideNav'>
                <div className='linksProfile'>
                    <MediaQuery query="(min-device-width:801px)">
                        <NavLink activeClassName='accountDetailBtnClick linkBtnClick' className='accountDetailBtn linkBtn' exact to="/qbFront/profile"><p className='btnTextProfile'>Account details</p></NavLink>
                        {/* <NavLink activeClassName='paymentBtnClick linkBtnClick' className='paymentBtn linkBtn' exact to="/payment"><p className='btnText'>Payment</p></NavLink> */}
                        <NavLink activeClassName='progressBtnClick linkBtnClick' className='progressBtn linkBtn' exact to="/qbFront/progress"><p className='btnTextProfile'>Your Progress</p></NavLink>
                    </MediaQuery>
                    <MediaQuery query="(max-device-width:800px)">
                        <NavLink activeClassName='btnMobileLinkClick' className="btnMobileLink" exact to='/qbFront/profile'>Account details</NavLink>
                        <NavLink activeClassName='btnMobileLinkClick' className="btnMobileLink" exact to='/qbFront/progress'>Your Progress</NavLink>
                    </MediaQuery>
                </div>
                <div className='logout'>
                    <hr style={{border:" 0.5px solid rgba(0, 0, 0, 0.54)"}}></hr>
                    <div className='logoutProfile' onClick={this.logoutProfile}><p className='btnTextProfile'>Logout</p></div>
                </div>
                {this.state.logOut && 
                <div className='edit'>
                    <div className='editProfile'></div>
                    <div className='logoutProfilePopup'>
                        <div className='editProfileBox logoutProfileBox'>
                            <div className='logoutformProfile'>
                            <h2 className='registerHead'>Edit profile</h2>
                            <div className='form-group name'>
                                <p className='logoutSure' >Are you sure you want to logout?</p>
                            </div>
                            </div>
                            <div className='popupBtn'>
                                <div className='form-group CancelBtn'>
                                    <button className=' cancel' onClick={this.logoutProfileCancel}>CANCEL</button>
                                </div>
                                <div className='form-group LogoutBtn'>
                                    <button className=' RegisterBtnBtn' onClick={this.props.logout}>LOGOUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

ProfileSideNav = connect(
    mapStateToProps,
    { logout },
)(ProfileSideNav);

export default ProfileSideNav;