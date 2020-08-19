import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileSideNav from './profileNav';
import AccountDetail from './accountDetail';
// import history from '../../history';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     NavLink,
// } from "react-router-dom";
import './profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        if (!this.props.isAuthenticated) {
            return <Redirect to='/login' />;
        }
        return (
            <div className='ProfileCont'>
                <ProfileSideNav />
                <AccountDetail />                
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth.user,
    syllabus: state.syllabus.data,
    detail: state.studentdetail.data,
    subjects: state.subjects.data
});

Profile = connect(
    mapStateToProps,
    {  },
)(Profile);

export default Profile;