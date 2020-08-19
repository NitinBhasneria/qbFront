import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import history from './../../history';
import { loadDetail } from './../../actions/studentDetail'
import { loadSyllabus } from './../../actions/syllabus'
import { register } from '../../actions/auth';
import { getSubject } from './../../actions/subject';
import { updateDetail } from './../../actions/studentDetail'
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    // NavLink,
} from "react-router-dom";

class SignUp2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                sub1: '',
                sub2: '',
                sub3: '',
                sub4: '',
                sub5: ''
            },
            syllabus_id: '',
            submitted: false,
            error: '',
            submitForm: false
        };
        this.props.loadDetail(this.props.auth.id);
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
        var subjects = [];
        const { user }= this.state;
        if(!(subjects.includes(user.sub1))&&(user.sub1!=='')){
            subjects.push(user.sub1);
        }
        else subjects.push('');
        if(!(subjects.includes(user.sub2))&&(user.sub2!=='')){
            subjects.push(user.sub2);
        }         else subjects.push('');
        if(!(subjects.includes(user.sub3))&&(user.sub3!=='')){
            subjects.push(user.sub3);
        }        else subjects.push('');
        if(!(subjects.includes(user.sub4))&&(user.sub4!=='')){
            subjects.push(user.sub4);
        }        else subjects.push('');
        if(!(subjects.includes(user.sub5))&&(user.sub5!=='')){
            subjects.push(user.sub5);
        }        else subjects.push('');
        console.log(subjects)
        this.setState({ submitted: true });   
        this.props.updateDetail(
            this.props.detail.id,
            this.props.detail.student_name,
            this.props.detail.phone,
            this.props.detail.syllabus, 
            this.props.detail.Class,
            subjects[0],
            subjects[1],
            subjects[2],
            subjects[3],
            subjects[4],
            this.props.detail.user,
            this.props.detail.image
        ).then(
            (res) => {
                history.push('/');
                window.location.reload(false)
            }
        ) 
    }

    render(){
        var options = [];
        for(var j=0;j<this.props.subjects.length;j++){
            if(this.props.subjects[j].subject !== ''){
                options.push(<option value={this.props.subjects[j].subject}>{this.props.subjects[j].subject}</option>)
            }
        }
        var SubjectList = [];
        for(var i=1;i<=5;i++){
            var name = 'sub' + i.toString();
            SubjectList.push(<div className={'form-group nameSubject'}>
                <select className='form-control-register' name={name} onChange={this.handleChange}>
                    <option value='Subject'>Subject</option>
                    {options}
                </select>
            </div>
            )
        }
        const {/*user, submitted,*/ error } = this.state;
        return (
            <Router>
            <div className='registerPage'>
                <div className='registerImage'></div>
                <div className='register_form'>
                    <div className="registerForm">
                        <div className='fromGroup'>
                            <h2 className='registerHead'>Choose Your Subject</h2>
                            <div className='text-danger'>{error}</div>
                            {SubjectList}
                        </div>
                        <div className='form-group RegisterBtn'>
                                <button className='RegisterBtnBtn' onClick={this.handleSubmit}>REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
            </Router>
        );
        
    }

}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth.user.user,
    syllabus: state.syllabus.data,
    detail: state.studentdetail.data,
    subjects: state.subjects.data
});

SignUp2 = connect(
    mapStateToProps,
    { register, loadDetail, updateDetail, loadSyllabus, getSubject },
)(SignUp2);

export default SignUp2