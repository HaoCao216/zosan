import React, { Component } from 'react'
import './style.scss'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="sign-up-container">
        <div className="login-form">
          <nav className="header-form">
            <img src={require('./images/logo.png')} alt="bg" />
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
          </nav>
          <section>
            <div className="title-step">
              <div>Signup</div>
              <div className="description">Follow the easy steps.</div>
            </div>
            <form>
              <div className="email-input">
                <div className="title-input">
                  <div>Email address</div>
                  <div className="check-email">
                    <img src={require('./images/check-mark.svg')} alt="check"/>
                    <span>Not Registered</span>
                  </div>
                </div>
                <div>
                  <input />
                </div>
              </div>
              <div className="email-input">
                <div className="title-input">
                  <div>Choose password</div>
                </div>
                <input type="password" />
                <div className="check-password">
                  <span>Strong</span>
                  <span className="progress-check-pass" />
                </div>
              </div>
            </form>
            <button className="create-account-btn">Create Account</button>
            <div className="login-with-account">Already have account? <a href="/signin">Sign in here</a></div>
          </section>
        </div>
        <div className="background-right">
        </div>
      </div>
    )
  }
}

export default SignIn
