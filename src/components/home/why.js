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

class Why extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className='why'>
                <div className='whyQuest'>
                    <h1 className='WHY'>why ?</h1>
                    <h3 className='TheQB'>The QUESTION BANK</h3>
                    <p className='whyPara'>This section talks about the importance of QB, what makes us the best out there, and our unique qualities.</p>
                    <button className='whysignUpBtn ' exact to="/qbFront/"><p className='whySignUp btnText'>SIGN UP</p></button>
                </div>
                <div className='whyCard'>
                    <div className='Card'>
                        <div className='cardImage1 cardImage' ></div>
                        <div className='cardHead'>Every Question</div>
                        <div className='cardDetail'>Each and every previous year's BOARD EXAM questions at one place.</div>
                    </div>
                    <div className='Card'>
                        <div className='cardImage2 cardImage'></div>
                        <div className='cardHead'>Advanced Filters</div>
                        <div className='cardDetail'>The most advanced Question Bank till date.</div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

Why = connect(
    mapStateToProps,
    {  },
)(Why);

export default Why;