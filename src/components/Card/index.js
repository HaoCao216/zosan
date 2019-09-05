import React, { Component } from 'react';
import { Icon, Modal, Button, Carousel } from 'antd';
import avatar from './images/user.png'

import './style.scss'


class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marked: false,
      loading: false,
      visible: false,
    };
  }

  toggleMark = () => {
    const { marked } = this.state
    this.setState({ marked: !marked })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ visible: false });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  next = () => {
    this.carousel.next();
  }
  previous = () => {
    this.carousel.prev();
  }

  render() {
    const { marked, visible } = this.state
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
              !marked ? <Icon style={{ fontSize: 20 }} onClick={this.toggleMark} type="star"/> : <Icon style={{ fontSize: 20, color: 'yellow' }} onClick={this.toggleMark} type="star" theme="filled" />
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
            <div className="item-info">
              <Icon type="clock-circle"/>
              <div className="info-body">
                <div>Time</div>
                <span>12:00</span>
              </div>
            </div>
            <div className="item-info">
              <Icon type="calendar"/>
              <div className="info-body">
                <div>Date</div>
                <span>12 Apr</span>
              </div>
            </div>
            <div className="item-info">
              <Icon type="dollar"/>
              <div className="info-body">
                <div>Price</div>
                <span>Free</span>
              </div>
            </div>
          </div>
        </div>
        <div className="group-btn">
          <button>Apply</button>
          <button onClick={this.showModal}>View</button>
        </div>
        <Modal
          visible={visible}
          title="Match info"
          style={{ top: 20 }}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          closable={false}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Close
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              Apply
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}

export default Card

