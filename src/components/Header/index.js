import React, { Component } from 'react';
import { Badge, Icon, Input, Popover, Drawer } from 'antd';
import Navbar from '../Navbar'

import './style.scss'

const { Search } = Input;
const text = <span className="title-noti">Notifications</span>;
const content = (
  <div style={{textAlign: 'center', minWidth: 280}}>
    none
  </div>
);

const account = (
  <div className="account-popover" style={{textAlign: 'center', minWidth: 247}}>
    <div className="item-box">
      <div className="title">Profile</div>
      <div className="sub-title">
        <div>
          <span className="name">apolo_216</span>
          <span className="role">Organizer</span>
        </div>
        <Icon type="folder-open" theme="filled" />
      </div>
    </div>
    <div className="item-box">
      <div className="title">Advances</div>
      <div className="sub-title">
        <span>Create New Match</span>
        <Icon type="plus-square" theme="filled" />
      </div>
      <div className="sub-title">
        <div>
          <span>Host A Tournament</span>
          <span className="vip">Pro</span>
        </div>
        <Icon type="flag" theme="filled" />
      </div>
      <div className="sub-title">
        <span>Purchased</span>
        <Icon type="credit-card" theme="filled" />
      </div>
      <div className="sub-title">
        <span>Report Bugs</span>
        <Icon type="bug" theme="filled" />
      </div>
    </div>
    <div className="item-box">
      <div className="title">Settings</div>
      <div className="sub-title">
        <span>Account</span>
        <Icon type="setting" theme="filled" />
      </div>
      <div className="sub-title">
        <span>Help</span>
        <Icon type="question-circle" theme="filled" />
      </div>
      <div className="sub-title">
        <span>Log Out</span>
        <Icon type="api" theme="filled" />
      </div>
    </div>
  </div>
);

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpenMenu: false
    };
  }

  toggleHamber = () => {
    const { isOpenMenu } = this.state
    this.setState({ isOpenMenu: !isOpenMenu })
  }

  render() {
    const { isOpenMenu } = this.state
    return (
      <div className="header-container">
        <div className="display-flex">
          <svg onClick={this.toggleHamber} className={isOpenMenu ? 'ham hamRotate ham4 active' : 'ham hamRotate ham4'} fill="#48aee1" viewBox="0 0 100 100" width="45">
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
            <path
              className="line middle"
              d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
          </svg>
          <div className="logo display-flex">
            <img src='/static/images/logo.png' alt="logo" />
            <span>Zosan</span>
          </div>
        </div>
        <Search
          className="search"
          placeholder="Search..."
          style={{ width: 300 }}
        />
        <div className="right-options">
          <div className="notifications display-flex">
            <Popover arrowPointAtCenter placement="bottomRight" title={text} content={content} trigger="click">
              <Badge count={5}>
                <Icon type="bell" />
              </Badge>
            </Popover>
            <Popover overlayClassName="custom-popover" arrowPointAtCenter placement="bottomRight" content={account} trigger="click">
              <img className="avt-box" alt="avt" src='/static/images/user.png' />
            </Popover>
          </div>
        </div>
        <Drawer
          style={{top: '62px'}}
          className="custom-drawer"
          placement={'left'}
          closable={false}
          onClose={this.toggleHamber}
          visible={isOpenMenu}
        >
          <Navbar />
        </Drawer>
      </div>
    )
  }
}

export default Header
