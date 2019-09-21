import React, { Component } from 'react'
import { Icon, Row, Col } from 'antd';
import { Radar } from 'react-chartjs-2'

import avatar from './images/user.png'
import field from './images/field.png'

import fieldName from '../../assets/images/soccer-field.png'
import time from '../../assets/images/calendar.png'
import clock from '../../assets/images/clock.png'
import price from '../../assets/images/purse.png'
import './style.scss'

const options = {
  responsive: true, // doesn't work
  aspectRatio: 1, // doesn't work
  maintainAspectRatio: true, // doesn't work
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  title: {
    display: false
  },
  legend: {
    display: false
  },
  tooltips: {
    enabled: true
  },
  backgroundColor: '#667190',
  chartArea: {
    backgroundColor: 'red'
  },
  scale: {
    pointLabels: {
      fontSize: 12,

      fontStyle: 'bold',
      fontColor: '#667190'
    },
    gridLines: {
      color: '#e9eef1',
      display: true,
      circular: true
    },
    ticks: {
      showLabelBackdrop: 'black',
      min: -1,
      max: 100,
      display: false,
      maxTicksLimit: 7,
      stepSize: 2
    }
  }
}

class MatchInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    this.radarData = {
      labels: ['Đá đẹp (%)', 'Sủi kèo (%)', 'Tỉ lệ thắng (%)', 'Đúng giờ (%)', 'Kỹ năng (%)'],
      datasets: [
        {
          label: 'Chỉ số ',
          data: [70, 40, 65, 80, 95],
          backgroundColor: 'rgba(24,144,255, 0.3)',
          borderColor: 'rgba(0,0,0,0)',
          pointBackgroundColor: '#fff',
          pointBorderColor: '#06bebd',
          pointBorderWidth: '1',
          pointHoverBackgroundColor: '#06bebd',
          pointHoverBorderColor: 'rgba(122,194,158,0.8)'
        },
      ]
    }
    return (
      <div className="match-container">
        <div className="container-box">
          <div className="location">
          </div>
          <div className="description">
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
                <div>
                  <Icon style={{ fontSize: 20 }} type="pushpin" theme="filled" />
                  <span>Đánh dấu</span>
                </div>
                <div>
                  <Icon style={{ fontSize: 18 }} type="warning" theme="filled" />
                  <span>Reports</span>
                </div>
              </div>
            </div>
            <div className="status">
              Friday play football with my friends
            </div>
            <div className="message">
              We are looing for some really ! Welcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepoqwie pqwiepo qiwepo iqwpoei poqwiepoiq wpoeiqwpo iepoqwie poqiwp oiqwpoei poqwiepqw iepoqwie
            </div>
          </div>
          <div className="time-setting">
            <Row gutter={40}>
              <Col span={12}>
                <div className="child-setting bottom-margin">
                  <img alt="icon" src={time} />
                  <div className="child-setting__info">
                    <span>
                      <span>Thời gian</span> : 06:30PM - 07:30PM / Friday, 28th December 2019
                    </span>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="child-setting bottom-margin" style={{ alignItems: 'center' }}>
                  <img alt="icon" src={price} />
                  <div className="child-setting__info">
                    <span>
                      <span>Phí</span> : 50/50
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={40}>
              <Col span={12}>
                <div className="child-setting">
                  <img alt="icon" src={fieldName} />
                  <div className="child-setting__info">
                    <span>
                      <span>Địa chỉ</span> : Sân Rạch Chay / 267 Chu Văn An, Bình Thạnh, Hồ Chí Minh
                    </span>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="child-setting" style={{ alignItems: 'center' }}>
                  <img alt="icon" src={price} />
                  <div className="child-setting__info">
                    <span>
                      <span>Liên hệ</span> : 0975702xxx <span className="block-contact">Apply to see</span>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="info-start">
            <Row type="flex" justify="center">
              <Col span={20}>
                <Radar
                  data={this.radarData}
                  options={options}
                />
              </Col>
            </Row>
            <div className="list-roster">
              <img className="field" alt="field" src={field} />
              <img className="roster roster-gk" alt="avatar" src={avatar} />
              <div className="flex-roster">
                <img className="roster-cb" alt="avatar" src={avatar} />
                <img className="roster-cb middle" alt="avatar" src={avatar} />
                <img className="roster-cb" alt="avatar" src={avatar} />
              </div>
              <div className="flex-roster">
                <img className="roster-st" alt="avatar" src={avatar} />
                <img className="roster-st" alt="avatar" src={avatar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MatchInfo
