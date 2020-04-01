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

class Why extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className='about'>
                <div className='aboutHead'>ABOUT US</div>
                <div className='aboutCard'>
                    <div className='cardAbout1'>
                        <div className='cardAboutImage1'></div>
                        <div className='aboutCardHead'>Best Way</div>
                        <div className='aboutCardPara'>We provide you with the best way to prepare for your 10th and 12th board examination.</div>
                    </div>
                    <div className='cardAbout2'>
                        <div className='cardAboutImage2'></div>
                        <div className='aboutCardHead'>One Stop</div>
                        <div className='aboutCardPara'>Access all the previous year's BOARD EXAM questions at one place, in a systematic and organised form.</div>
                    </div>
                    <div className='cardAbout3'>
                        <div className='cardAboutImage3 '></div>
                        <div className='aboutCardHead'>Sustainability</div>
                        <div className='aboutCardPara'>Against consumer exploitation, the way current paperback question-banks are priced. Believing in sustainable development.</div>
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