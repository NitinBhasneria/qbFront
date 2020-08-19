import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/auth';
// import AuthNav from './authNav';
// import history from './../../history'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.props.logout();
    this.state = {
      user: {
          email: '',
          password: ''
      },
      submitted: false,
      error: ''
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValid = this.handleValid.bind(this);
}

handleValid() {
  const { user } = this.state;
  if(!user.email){
      this.setState({error: 'Email-ID is Required', submitForm: false})
      document.querySelector('.text-danger').style.display = 'block';
  }   
  else if(!user.password){
  this.setState({error: 'Password Required', submitForm: false})
  document.querySelector('.text-danger').style.display = 'block';
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
      submitted: false
  });
}

handleSubmit(e) {
    e.preventDefault();
    this.handleValid();
    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.email && user.password) {
        this.props.login(user);
    }    
}

  render() {
    if (this.props.isAuthenticated) {
       return <Redirect to='/' />;
    }
    const { user, submitted, error} = this.state;
    return (
      <div className='registerPage'>
                <div className='registerImage'></div>
                <div className='register_form'>
                    <div className="loginForm">
                        <div className='fromGroup'>
                            <h2 className='loginHead'>Login</h2>
                            <div className='text-danger'>{error}</div>
                            <div className='text-danger'>{error}</div>
                            <div className={'form-group name' + (submitted && !user.email ? ' form-control is-invalid' : '')}>
                                        <input type="text" placeholder='Email-ID' className='form-control-register' name="email" value={user.email} onChange={this.handleChange} />
                                    </div>
                            <div className={'form-group name' + (submitted && !user.password ? ' form-control is-invalid' : '')}>
                              <input type="password" placeholder='Password' className='form-control-register' name="password" value={user.password} onChange={this.handleChange} />
                            </div>
                            <div className='form-group already'>
                              <div>New here? Create an account</div>
                              <Link to='/register_1' className='btn btn-link'>SignUp</Link>
                            </div>
                    </div>
                    <div className='form-group LoginBtn'>
                        <button className='RegisterBtnBtn' onClick={this.handleSubmit}>LOGIN</button>
                    </div>
                </div>
            </div>
      <div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

LoginForm = connect(
  mapStateToProps,
  { login, logout },
)(LoginForm);

export default LoginForm;