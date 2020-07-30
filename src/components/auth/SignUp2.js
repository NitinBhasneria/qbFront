import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import history from './../../history';
import { register } from '../../actions/auth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

class SignUp2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                confirmPass: '',
                phone: '',
                class_id: ''
            },
            submitted: false,
            error: '',
            submitForm: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            },
            submitted:false
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    
        this.setState({ submitted: true });
        
    }
    render(){
        const { user, submitted, error } = this.state;
        return (
            <div className='registerPage'>
                <div className='registerImage'></div>
                <div className='register_form'>
                    <div className="registerForm">
                        <div className='fromGroup'>
                            <h2 className='registerHead'>Choose Your Subject</h2>
                            <div className='text-danger'>{error}</div>
                            <div className={'form-group nameSubject'}>
                                <select className='form-control-register' name="class" id="class">
                                    <option value='Class 10'>Class 10</option>
                                    <option value='Class 12'>Class 12</option>
                                </select>
                            </div>
                            <div className={'form-group nameSubject'}>
                                <select className='form-control-register' name="class" id="class">
                                    <option value='Class 10'>Class 10</option>
                                    <option value='Class 12'>Class 12</option>
                                </select>
                            </div>
                            <div className={'form-group nameSubject'}>
                                <select className='form-control-register' name="class" id="class">
                                    <option value='Class 10'>Class 10</option>
                                    <option value='Class 12'>Class 12</option>
                                </select>
                            </div>
                            <div className={'form-group nameSubject'}>
                                <select className='form-control-register' name="class" id="class">
                                    <option value='Class 10'>Class 10</option>
                                    <option value='Class 12'>Class 12</option>
                                </select>
                            </div>
                            <div className={'form-group nameSubject'}>
                                <select className='form-control-register' name="class" id="class">
                                    <option value='Class 10'>Class 10</option>
                                    <option value='Class 12'>Class 12</option>
                                </select>
                            </div>
                            <div className={'form-group nameSubject'}>
                                <select className='form-control-register' name="class" id="class">
                                    <option value='Class 10'>Class 10</option>
                                    <option value='Class 12'>Class 12</option>
                                </select>
                            </div>
                        </div>
                        <div className='form-group RegisterBtn'>
                            <Link to="/register_2" className='btn btn-primary  RegisterBtnBtn'>
                                <button className='btn btn-primary  RegisterBtnBtn' onClick={this.handleSubmit}>Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }

}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

SignUp2 = connect(
    mapStateToProps,
    { register },
)(SignUp2);

export default SignUp2