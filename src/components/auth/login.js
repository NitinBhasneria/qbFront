import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/auth';
import AuthNav from './authNav';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.props.logout();
    this.state = {
      user: {
          username: '',
          password: ''
      },
      submitted: false,
      error: ''
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
      }
  });
}

handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.username && user.password) {
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
                            <Link to="/register_2" className='btn btn-primary  RegisterBtnBtn'>
                                <button className='btn btn-primary  RegisterBtnBtn' onClick={this.handleSubmit}>Login</button>
                            </Link>
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