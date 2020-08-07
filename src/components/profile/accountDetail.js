import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';
import Demo from './../../statics/images/stuImageDemo.png';
import Edit from './../../statics/images/editImage.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

class AccountDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className='AccountCont'>
                <div className = 'StuImage'>
                    <img className='Image' src={Demo}></img>
                    <img className='editImage' src={Edit}></img>
                </div>
                <div className='StuName'>Mayan Sachan</div>
                <div className='StuDetail'>
                    <h2 className='componentDetail'>mayan12@gmail.com</h2>
                    <h2 className='componentDetail'>|</h2>
                    <h2 className='componentDetail'>9926456276</h2>
                </div>
                <div className='edit'>
                    <button className='editBtn'>EDIT PROFILE</button>
                </div>
                <div className='Class'>CLASS 12TH</div>
                <div className='Subjects'>
                    <h2 className='componentDetail'>Physics</h2>
                    <h2 className='componentDetail'>|</h2>
                    <h2 className='componentDetail'>Chemistry</h2>
                    <h2 className='componentDetail'>|</h2>
                    <h2 className='componentDetail'>Maths</h2>
                    <h2 className='componentDetail'>|</h2>
                    <h2 className='componentDetail'>English</h2>
                    <h2 className='componentDetail'>|</h2>
                    <h2 className='componentDetail'>Computer</h2>
                </div>
                <div className='edit'>
                    <button className='editBtn'>EDIT SUBJECTS</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

AccountDetail = connect(
    mapStateToProps,
    {  },
)(AccountDetail);

export default AccountDetail;