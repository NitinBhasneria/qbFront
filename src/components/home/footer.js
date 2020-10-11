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

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className='footer'>
                <div className='contactDetail'>
                    <h1 className='contactHead'>CONTACT US</h1>
                    <Link className='fb'></Link>
                    <Link className='linkdin'></Link>
                    <Link className='insta'></Link>
                    <Link className='twitter'></Link>
                    <Link className='youTube'></Link>
                    <h2 className='contact'>Toll Free number</h2>
                    <h2 className='contact Num'>1800-123-456-789</h2>
                    <h2 className='contact'>Call on number</h2>
                    <h2 className='contact Num'>1800-123-456-789</h2>
                    <h2 className='contact'>Email-ID</h2>
                    <h2 className='contact Num'>contactus@tqb.com</h2>
                </div>
                <div className='quickLinks'>
                    <h1 className='contactHead'>QUICK LINKS</h1>
                    <Link className='quick'>Profile</Link>
                    <Link className='quick'>About Us</Link>
                    <Link className='quick'>Testimonial</Link>
                    <Link className='quick'>Get Started!</Link>
                    <Link className='quick'>Product pages</Link>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

Footer = connect(
    mapStateToProps,
    {  },
)(Footer);

export default Footer;