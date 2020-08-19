import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import history from '../../history';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     NavLink,
// } from "react-router-dom";

class QBA extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className='QBACont'>
                <h1 className='QBAHead'>QUESTION BANKS AVAILABLE</h1>
                <div className='QBAVideo'>
                    <video className='QBAVideo1'></video>
                    <video className='QBAVideo2'></video>
                    <video className='QBAVideo3'></video>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

QBA = connect(
    mapStateToProps,
    {  },
)(QBA);

export default QBA;