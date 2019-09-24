import React, { Component } from 'react';
import { Icon } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import './style.scss'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <div className="navbar-container">
        <Scrollbars
          renderThumbVertical={({style, ...props}) =>
            <div {...props} className="customize-scroll"/>
          }
          style={{height: 'calc(100vh - 62px)', width: '100%'}}>
          <div className="box-item">
            <div className="title">Menu</div>
            <div className="sub-title">
              <span>Home Page</span>
              <Icon type="home" theme="filled" />
            </div>
            <div className="sub-title">
              <span>Shop</span>
              <Icon type="skin" theme="filled" />
            </div>
          </div>
          <div className="box-item">
            <div className="title">Categories</div>
            <div className="sub-title">
              <span>Your Club</span>
              <Icon type="fire" theme="filled" />
            </div>
            <div className="sub-title">
              <span>Friends</span>
              <Icon type="smile" theme="filled" />
            </div>
            <div className="sub-title">
              <span>Calendar</span>
              <Icon type="schedule" theme="filled" />
            </div>
            <div className="sub-title">
              <span>Tournaments</span>
              <Icon type="trophy" theme="filled" />
            </div>
          </div>
          <div className="box-item">
            <div className="title">Host Hub</div>
            <div className="sub-title">
              <span>Hosts</span>
              <Icon type="crown" theme="filled" />
            </div>
            <div className="sub-title">
              <span>Become A Host</span>
              <Icon type="environment" theme="filled" />
            </div>
          </div>
          <div className="box-item">
            <div className="title">Support</div>
            <div className="sub-title">
              <span>Help</span>
              <Icon type="question-circle" theme="filled" />
            </div>
            <div className="sub-title">
              <span>About Us</span>
              <Icon type="thunderbolt" theme="filled" />
            </div>
            <div className="sub-title">
              <span>Contact Us</span>
              <Icon type="mail" theme="filled" />
            </div>
          </div>
        </Scrollbars>
      </div>
    )
  }
}

export default Navbar
