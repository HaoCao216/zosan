import React, { Component } from 'react'
import './style.scss'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
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
              {/* <div className="description">Follow the easy steps.</div> */}
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
                  <input />
                </div>
              </div>
              <div className="email-input">
                <div className="title-input">
                  <div>Password</div>
                </div>
                <input type="password" />
                {/* <div className="check-password">
                  <span>Strong</span>
                  <span className="progress-check-pass" />
                </div> */}
              </div>
            </form>
            <button className="create-account-btn">Log In</button>
            <div className="login-with-account">Dont have account? <a href="/signup">Sign up here</a></div>
          </section>
        </div>
        <div className="background-right">
        </div>
      </div>
    )
  }
}

export default Login

