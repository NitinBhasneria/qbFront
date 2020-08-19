import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import history from '../../history';
import { logout } from '../../actions/auth';
import Footer from './footer';
import Why from './why';
import About from './about';
import Head from './head';
import QBA from './QBA';
import Testimonial from './testimonial';
import './homeUI.css'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     NavLink,
// } from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className='homePage'>
                <Head />
                <About />
                <Why />
                <QBA />
                <Testimonial />z
                <Footer />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

HomePage = connect(
    mapStateToProps,
    { logout },
)(HomePage);

export default HomePage;