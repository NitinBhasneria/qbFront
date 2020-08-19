import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import history from '../../history';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     NavLink,
// } from "react-router-dom";

class Head extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className='HeadCont'>
                <div className='laptop'></div>
                <div className='SignUp'>
                    <h2 className='Head'>Practice makes perfect</h2>
                    <h4 className='headPara'>Practice makes perfect Prepare for you boards like never before</h4>
                    <Link className='SignUpBtn'>Sign Up</Link>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

Head = connect(
    mapStateToProps,
    {  },
)(Head);

export default Head;