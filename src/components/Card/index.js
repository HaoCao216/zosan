import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Carousel } from 'antd';
import avatar from './images/user.png'

import fieldName from '../../assets/images/soccer-field.png'
import time from '../../assets/images/calendar.png'
import clock from '../../assets/images/clock.png'
import price from '../../assets/images/purse.png'
import './style.scss'


class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marked: false,
      loading: false,
    };
  }

  toggleMark = () => {
    const { marked } = this.state
    this.setState({ marked: !marked })
  }

  next = () => {
    this.carousel.next();
  }
  previous = () => {
    this.carousel.prev();
  }

  render() {
    const { marked } = this.state
    const { imageStatus, data } = this.props
    return (
      <div className="card-container">
        <div className="title-card">
          <div className="profile-host">
            <img alt="avatar" src={avatar} />
            <div>
              <span className="name">Alex pesenka</span>
              <span className="role"> | Organizer</span>
              <div className="time">
                23 minues
              </div>
            </div>
          </div>
          <div className="mark-card">
            {
              !marked ? <Icon style={{ fontSize: 20 }} onClick={this.toggleMark} type="pushpin"/> : <Icon style={{ fontSize: 20, color: 'yellow' }} onClick={this.toggleMark} type="pushpin" theme="filled" />
            }
          </div>
        </div>
        <div className="custom-carousel">
          <Icon className="pre-btn" type="caret-left" onClick={this.previous} />
          <Carousel ref={node => (this.carousel = node)} dots={false}>
            {
              imageStatus.map((img, index) => (
                <div key={index}>
                  <div className="image-status" style={{backgroundImage: `url(${img}`}}>
                  </div>
                </div>
              ))
            }
          </Carousel>
          <Icon className="next-btn" type="caret-right" onClick={this.next} />
        </div>
        <div className="body">
          <div className="status">
            Friday play football with my friends
          </div>
          <div className="message">
            {data.message}
          </div>
          <div className="info-match">
            <div className="time-box">
              <div className="item-info">
                <img alt="icon" src={time} />
                <div className="info-body">
                  <span>Friday, 28th December 2019</span>
                </div>
              </div>
              <div className="item-info">
                <img alt="icon" src={fieldName} />
                <div className="info-body">
                  <span>Sân Rạch Chay</span>
                </div>
              </div>
            </div>
            <div className="time-box">
              <div className="item-info">
                <img alt="icon" src={clock} />
                <div className="info-body">
                  <span>06:30PM - 07:30PM</span>
                </div>
              </div>
              <div className="item-info">
                <img alt="icon" src={price} />
                <div className="info-body">
                  <span>Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-btn">
          <button>Apply</button>
          <Link to="/match">
            View
          </Link>
        </div>
      </div>
    )
  }
}

export default Card

