import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Alert } from 'antd';


import { withFirebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';
import './style.scss'

const INITIAL_STATE =  {
  email: '',
  password: '',
}

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { email, password } = this.state;
    const { firebase, history } = this.props

    firebase
      .emailSignin(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        console.log('error', error);
        this.setState({ error });
      });

    event.preventDefault();
  };



  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className="login-container">
        <div className="login-form">
          <nav className="header-form">
            <img src={require('./images/logo.png')} alt="bg" />
            <div className="display-flex">
              <span>Connect everyone is our mission</span>
            </div>
          </nav>
          <section>
            <div className="title-step">
              <div>Log in</div>
            </div>
            <form>
              <div className="email-input">
                <div className="title-input">
                  <div>Email address</div>
                </div>
                <div>
                  <input type="email" name="email" value={email} onChange={this.onChange} />
                </div>
              </div>
              <div className="email-input">
                <div className="title-input">
                  <div>Password</div>
                </div>
                <input type="password" name="password" value={password} onChange={this.onChange} />
              </div>
            </form>
            {error ? <Alert
              message="Invalid email/password"
              type="error"
              closable
            /> : ''}
            <br />
            <button disabled={isInvalid} onClick={this.onSubmit} className="create-account-btn">Log In</button>
            <div className="login-with-account">Dont have account? <Link to={ROUTES.SIGNUP}>Sign up here</Link></div>
          </section>
        </div>
        <div className="background-right">
        </div>
      </div>
    )
  }
}

export default compose(withFirebase,withRouter)(Login)

