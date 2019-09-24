import React, { Component } from 'react';
import { Icon } from 'antd';
import logo from './images/logo.png';
import './style.scss'


class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <div className="footer-container">
        <div className="footer-title">
          <div className="item">
            <div className="title">Support</div>
            <div className="sub-text">Help</div>
            <div className="sub-text">Pricing</div>
            <div className="sub-text">FAQ</div>
          </div>
          <div className="item">
            <div className="title">Legal</div>
            <div className="sub-text">Term of Use</div>
            <div className="sub-text">Privacy And Cookie Policy</div>
            <div className="sub-text">Refund Policy</div>
            <div className="sub-text">Payment and Subscriptions</div>
          </div>
          <div className="item">
            <div className="title">Become A Host</div>
            <div className="sub-text">Get started</div>
          </div>
          <div className="item">
            <div className="title">About</div>
            <div className="sub-text">About us</div>
            <div className="sub-text">Contact</div>
          </div>
          <div className="item connect-col">
            <div className="title">Connect</div>
            <div className="sub-text">
              <span>Facebook</span>
              <Icon type="facebook" theme="filled" />
            </div>
            <div className="sub-text">
              <span>Twitter</span>
              <Icon type="twitter-square" theme="filled" />
            </div>
            <div className="sub-text">
              <span>Youtube</span>
              <Icon type="youtube" theme="filled" />
            </div>
          </div>
        </div>
        <div className="copy-right">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>Zosan</span>
          </div>
          <div className="footer-text">© 2019 Zosan. All Rights Reserved.<br />Binh Thanh, Ho Chi Minh, Viet Nam</div>
        </div>
      </div>
    )
  }
}

export default Footer

