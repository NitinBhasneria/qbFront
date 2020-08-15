import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadSyllabus } from './../../actions/syllabus'
import { getSubject } from './../../actions/subject';
import {  register, login } from '../../actions/auth';
import { CreateStudentProfile } from './../../actions/studentDetail';
import history from './../../history'
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
                password: '',
                confirmPass: '',
                student_name: '',
                phone: '',
                syllabus: 'CBSE',
                Class: 'Class 10',
            },
            submitted: false,
            error: '',
            emailAlready: false
        };

        this.props.loadSyllabus();
        this.syllabusID = this.syllabusID.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValid = this.handleValid.bind(this);
    }

    handleValid() {
        const { user } = this.state;
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!user.student_name){
            this.setState({error: 'First Name Required'});
            document.querySelector('.text-danger').style.display = 'block';
        }
        else if(!user.email){
            this.setState({error: 'Email-ID is Required'})
            document.querySelector('.text-danger').style.display = 'block';
        }   
        else if(!user.password){
        this.setState({error: 'Password Required'})
        document.querySelector('.text-danger').style.display = 'block';
        }   
        else if(!user.confirmPass){
            this.setState({error: 'Confirm the password'})
            document.querySelector('.text-danger').style.display = 'block';
        }
        else if(!user.phone){
            document.querySelector('.text-danger').style.display = 'block';
            this.setState({error: 'Phone Number is required'})
        }
        else if(!(re.test(this.state.user.email))){
            document.querySelector('.text-danger').style.display = 'block';
            this.setState({error: 'Email is not valid'})
        }
        else{
            document.querySelector('.text-danger').style.display = 'block';
            this.setState({error: 'Email is already Taken'})
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
            submitted:false,
            emailAlready:false
        });
        document.querySelector('.text-danger').style.display = 'none';
    }

    syllabusID() {
        for(var i=0;i<this.props.syllabus.length;i++){
            if((this.props.syllabus[i].classes == this.state.user.Class) && (this.props.syllabus[i].syllabus == this.state.user.syllabus))
                return this.props.syllabus[i].id;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        
        this.setState({ submitted: true });
        const { user } = this.state;
        console.log(user);
        if(user.confirmPass!=user.password){
            this.setState({error: 'Password do not match'})
            document.querySelector('.text-danger').style.display = 'block';
        }
        else {
            this.props.register(user).then(
                (res) => {
                    if (res){
                        this.props.login(user).then(
                            ()=> {
                                this.props.CreateStudentProfile(user.student_name, user.phone, user.syllabus, user.Class, res)
                                this.props.getSubject(this.syllabusID()).then(()=>{
                                    history.push('./register_2');
                                    window.location.reload(false);
                                })
                            }
                        );
                    }
                    else{
                        this.handleValid();
                    }
                }
            )        
        }
    }

    render() {
        const { user, submitted, error } = this.state;
        return (
            <Router>
            <div className='registerPage'>
                <Switch>
                    <Route exact path='/register_1'>
                        <div className='registerImage'></div>
                        <div className='register_form'>
                            <div className="registerForm">
                                <div className='fromGroup'>
                                    <h2 className='registerHead'>Register</h2>
                                    <div className='text-danger'>{error}</div>
                                    <div className={'form-group name' + (submitted && !user.student_name ? ' form-control is-invalid' : '')}>
                                        <input type="text" placeholder='Name' className='form-control-register' name="student_name" value={user.student_name} onChange={this.handleChange} />

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
                                        <select className='form-control-register' name='syllabus' id='Syllabus' onChange={this.handleChange}>
                                            <option value='CBSE'>CBSE</option>
                                        </select>
                                    </div>
                                    <div className={'form-group nameClass'}>
                                        <select className='form-control-register' name="Class" id="class" onChange={this.handleChange}>
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
                                    <button className=' RegisterBtnBtn' onClick={this.handleSubmit}>REGISTER</button>
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path = '/register_2'>
                        <SignUp2 />
                    </Route>
                </Switch>
            </div>
            </Router>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    syllabus: state.syllabus.data,
    detail: state.studentdetail.data,
    subjects: state.subjects.data
});

RegisterPage = connect(
    mapStateToProps,
    { register, login, CreateStudentProfile, getSubject, loadSyllabus},
)(RegisterPage);

export default RegisterPage;