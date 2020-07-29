import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/auth';

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
    this.submitted = true;
    const { user } = this.state;
    console.log(user);
    if (user.username && user.password) {
        this.props.login(user);
    }
}

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }
    const { user, submitted} = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" className={'form-control' + (this.submitted && !user.username ? ' form-control is-invalid' : '')} name="username" value={this.state.username} onChange={this.handleChange} />
                        {this.submitted && !user.username &&
                            <div className="text-danger">Username is required</div>
                        }
                    </div>
                    <div className='form-group'>
                        <label htmlFor="username">Password</label>
                        <input type="password" className={'form-control' + (this.submitted && !user.password ? ' form-control is-invalid' : '')} name="password" value={this.state.password} onChange={this.handleChange} />
                        {this.submitted && !user.password &&
                            <div className="text-danger">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.state.handleSubmit}>Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
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