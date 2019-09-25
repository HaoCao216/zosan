import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Button, Input, Alert } from 'antd';
import { compose } from 'recompose';

import { withFirebase } from '../src/firebase';
import Page from '../layouts/main';
import * as ROUTES from '../src/constants/routes';

import './signup.style.scss'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      rePassword: '',
      loading: false,
      error: null,
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { email, password } = this.state;
    const { firebase } = this.props;
    this.setState({ loading: true });
    firebase
      .emailSignup(email, password)
      .then(authUser => {
        this.setState({ loading: false });
        Router.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ loading: false });
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
    const { email, password, rePassword, loading, error } = this.state;
    const isInvalid = password !== rePassword || password === '' || email === '';

    return (
      <Page className="sign-up-container">
        <div className="login-form">
          {/* <nav className="header-form">
            <img src="/static/images/logo.png" alt="bg" />
            <div className="display-flex">
              <div className="step step-active">
                <span>1</span>
                <span>Sign up</span>
              </div>
              <div className="border" />
              <div className="step">
                <span>2</span>
                <span>Basic Info</span>
              </div>
            </div>
          </nav> */}
          <section>
            <div className="title-step">
              <div>Signup</div>
              <div className="description">Follow the easy steps.</div>
            </div>
            <form>
              <div className="email-input">
                <div className="title-input">
                  <div>Email address</div>
                  {/* <div className="check-email">
                    <img src={require('./images/check-mark.svg')} alt="check"/>
                    <span>Not Registered</span>
                  </div> */}
                </div>
                <div>
                  <Input  name="email" value={email} type="text" onChange={this.onChange} />
                </div>
              </div>
              <div className="email-input">
                <div className="title-input">
                  <div>Enter password</div>
                </div>
                <Input  type="password" name="password" value={password} onChange={this.onChange} />
                <div className="check-password">
                  <span>Strong</span>
                  <span className="progress-check-pass" />
                </div>
              </div>
              <div className="email-input">
                <div className="title-input">
                  <div>Re-type password</div>
                </div>
                <Input type="password" name="rePassword" value={rePassword} onChange={this.onChange} />
                <div className="check-password">
                  <span>Strong</span>
                  <span className="progress-check-pass" />
                </div>
              </div>
              <Button
                block
                type="primary"
                loading={loading}
                disabled={isInvalid}
                onClick={this.onSubmit}
                className="create-account-btn"
              >Create Account</Button>
            </form>
            <br />
            {error ? <Alert
              message={error.message}
              type="error"
              closable
            /> : ''}
            <div className="login-with-account">Already have account? <Link href={ROUTES.SIGNIN}><a>Sign in here</a></Link></div>
          </section>
        </div>
        <div className="background-right">
        </div>
      </Page>
    )
  }
}

export default compose(withFirebase)(SignUp);
