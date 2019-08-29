import React, { Component } from 'react';
import { Icon } from 'antd';
import defaultAvatar from './images/user.png'
import './style.scss'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="item-box profile">
          <div>
            <img alt="avt" src={defaultAvatar} />
          </div>
        </div>
        <div className="item-box">
          <div>
            <Icon type="message" theme="filled" />
            <div>Messages</div>
          </div>
        </div>
        <div className="item-box">
          <div>
            <Icon type="star" theme="filled" />
            <div>Team</div>
          </div>
        </div>
        <div className="item-box">
          <div>
            <Icon theme="filled" type="environment" />
            <div>Locations</div>
          </div>
        </div>
        <div className="item-box">
          <div>
            <Icon theme="filled" type="setting" />
            <div>Setting</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar

