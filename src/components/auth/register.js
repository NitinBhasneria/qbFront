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
import SignUp2 from './SignUp2'

class RegisterPage extends React.Component {
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
        this.handleValid = this.handleValid.bind(this);
    }

    handleValid() {
        const { user } = this.state;
        console.log('hiih');
        if(!user.firstName){
            this.setState({error: 'First Name Required', submitForm: false});
            document.querySelector('.text-danger').style.display = 'block';
        }
        else if(!user.lastName){
            this.setState({error: 'Last Name Required', submitForm: false})
            document.querySelector('.text-danger').style.display = 'block';
        }
        else if(!user.email){
            this.setState({error: 'Email-ID is Required', submitForm: false})
            document.querySelector('.text-danger').style.display = 'block';
        }   
        else if(!user.password){
        this.setState({error: 'Password Required', submitForm: false})
        document.querySelector('.text-danger').style.display = 'block';
    }   
        else if(!user.confirmPass){
            this.setState({error: 'Confirm the password', submitForm: false})
            document.querySelector('.text-danger').style.display = 'block';
        }
        else if(user.confirmPass!=user.password){
            this.setState({error: 'Password do not match', submitForm: false})
            document.querySelector('.text-danger').style.display = 'block';
        }
        else if(!user.phone){
            document.querySelector('.text-danger').style.display = 'block';
            this.setState({error: 'Phone Number is required', submitForm: false})
        }
        else{
            this.setState({error: '', submitForm: true})
            document.querySelector('.text-danger').style.display = 'none';
        }
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
        this.handleValid();
        const { user } = this.state;
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(user.email)) {
            if (this.state.submitForm) {
                this.props.register(user).then(
                    (res) => {
                        if (res)
                            history.push('/login');
                        else
                            this.emailAlready = true;
                    })
            }
        }
        else {
            this.emailValid = false
        }


    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />;
        }
        const { user, submitted, error } = this.state;
        return (
            <div className='registerPage'>
                <Switch>
                    <Route exact path='/register_1'>
                        <div className='registerImage'></div>
                        <div className='register_form'>
                            <div className="registerForm">
                                <div className='fromGroup'>
                                    <h2 className='registerHead'>Register</h2>
                                    <div className='text-danger'>{error}</div>
                                    <div className={'form-group name' + (submitted && !user.firstName ? ' form-control is-invalid' : '')}>
                                        <input type="text" placeholder='First Name' className='form-control-register' name="firstName" value={user.firstName} onChange={this.handleChange} />

                                    </div>
                                    <div className={'form-group name' + (submitted && !user.lastName ? ' form-control is-invalid' : '')}>
                                        <input type="text" placeholder='Last Name' className='form-control-register' name="lastName" value={user.lastName} onChange={this.handleChange} />

                                    </div>
                                    <div className={'form-group name' + (submitted && !user.email ? ' form-control is-invalid' : '')}>
                                        <input type="text" placeholder='Email-ID' className='form-control-register' name="email" value={user.email} onChange={this.handleChange} />
                                    </div>
                                    <div className={'form-group password' + (submitted && !user.password ? ' form-control is-invalid' : '')}>
                                        <input type="password" placeholder='Password' className='form-control-register' name="password" value={user.password} onChange={this.handleChange} />
                                    </div>
                                    <div className={'form-group passwordCon' + (submitted && !user.confirmPass ? ' form-control is-invalid' : '')}>
                                        <input type="password" placeholder='Confrim Password' className='form-control-register' name="confirmPass" value={user.confirmPass} onChange={this.handleChange} />
                                    </div>
                                    <div className={'form-group name' + (submitted && !user.phone ? ' form-control is-invalid' : '')}>
                                        <input placeholder='Phone' className='form-control-register' name="phone" value={user.phone} onChange={this.handleChange} />
                                    </div>
                                    <div className={'form-group nameSy'}>
                                        <select className='form-control-register' name='Syllabus' id='Syllabus'>
                                            <option value='CBSE'>CBSE</option>
                                        </select>
                                    </div>
                                    <div className={'form-group nameClass'}>
                                        <select className='form-control-register' name="class" id="class">
                                            <option value='Class 10'>Class 10</option>
                                            <option value='Class 12'>Class 12</option>
                                        </select>
                                    </div>
                                    <div className='form-group already'>
                                        <div>Already have an account?</div>
                                        <Link to='/login' className='btn btn-link'>Cancel</Link>
                                    </div>
                                </div>
                                <div className='form-group RegisterBtn'>
                                    <Link to="/register_2" className='btn btn-primary  RegisterBtnBtn'>
                                        <button className='btn btn-primary  RegisterBtnBtn' onClick={this.handleSubmit}>Register</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path = '/register_2'>
                        <SignUp2 />
                    </Route>
                </Switch>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

RegisterPage = connect(
    mapStateToProps,
    { register },
)(RegisterPage);

export default RegisterPage;