import React, { Component } from 'react';
import logo from './images/logo.png';
import { Badge, Icon, Input, Popover } from 'antd';

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
    this.state = {};
  }

  render() {
    return (
      <div className="header-container">
        <div className="display-flex">
          <div className="logo display-flex">
            <img src={logo} alt="logo" />
            <span>Zosan</span>
          </div>
          <div className="menu">
            <span>Calendar</span>
            <span>Friends</span>
            <span>Popular</span>
            <span>stories</span>
          </div>
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
      </div>
    )
  }
}

export default Header

