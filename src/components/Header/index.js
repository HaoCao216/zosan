import React, { Component } from 'react';
import logo from './images/logo.png';
import { Badge, Icon, Input, Popover, Drawer } from 'antd';
import Navbar from '../Navbar'

import './style.scss'

const { Search } = Input;
const text = <span>Notifications</span>;
const content = (
  <div style={{textAlign: 'center', minWidth: 280}}>
    none
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
            <img src={logo} alt="logo" />
            <span>Zosan</span>
          </div>
          {/* <div className="menu">
            <span>Calendar</span>
            <span>Friends</span>
            <span>Popular</span>
            <span>stories</span>
          </div> */}
        </div>
        <div className="right-options">
          <div className="notifications display-flex">
            <Popover arrowPointAtCenter placement="bottomRight" title={text} content={content} trigger="click">
              <Badge count={5}>
                <Icon type="bell" />
              </Badge>
            </Popover>
            <Search
              className="search"
              placeholder="Search..."
              style={{ width: 300 }}
            />
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

