import React, { Component } from 'react';
import Link from 'next/link';
import { Icon, Carousel } from 'antd';
import * as ROUTES from '../../constants/routes';

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
            <img alt="avatar" src="/static/images/user.png" />
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
                  <div className="image-status" style={{backgroundImage: `url('/static/images/random1.jpeg')`}}>
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
                <img alt="icon" src='/static/images/calendar.png' />
                <div className="info-body">
                  <span>Friday, 28th December 2019</span>
                </div>
              </div>
              <div className="item-info">
                <img alt="icon" src='/static/images/soccer-field.png' />
                <div className="info-body">
                  <span>Sân Rạch Chay</span>
                </div>
              </div>
            </div>
            <div className="time-box">
              <div className="item-info">
                <img alt="icon" src='/static/images/clock.png' />
                <div className="info-body">
                  <span>06:30PM - 07:30PM</span>
                </div>
              </div>
              <div className="item-info">
                <img alt="icon" src='/static/images/purse.png' />
                <div className="info-body">
                  <span>Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-btn">
          <button>Apply</button>
          <Link href={ROUTES.MATCHDETAIL}>
            View
          </Link>
        </div>
      </div>
    )
  }
}

export default Card
