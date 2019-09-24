import React, { Component } from 'react';
import { Icon, Row, Col } from 'antd';
import { Radar } from 'react-chartjs-2';
import Page from '../layouts/main';

import './match-detail.styles.scss'

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
      <Page className="match-container">
        <div className="container-box">
          <div className="location">
          </div>
          <div className="description">
            <div className="title-card">
              <div className="profile-host">
                <img alt="avatar" src='/static/images/user.png' />
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
                  <img alt="icon" src='/static/images/calendar.png' />
                  <div className="child-setting__info">
                    <span>
                      <span>Thời gian</span> : Friday, 28th December 2019
                    </span>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="child-setting bottom-margin" style={{ alignItems: 'center' }}>
                  <img alt="icon" src='/static/images/clock.png' />
                  <div className="child-setting__info">
                    <span>
                      <span>Lúc</span> : 06:30PM - 07:30PM
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={40}>
              <Col span={12}>
                <div className="child-setting bottom-margin">
                  <img alt="icon" src='/static/images/soccer-field.png' />
                  <div className="child-setting__info">
                    <span>
                      <span>Sân</span> : Sân Rạch Chay
                    </span>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="child-setting bottom-margin" style={{ alignItems: 'center' }}>
                  <img alt="icon" src='/static/images/maps-and-flags.png' />
                  <div className="child-setting__info">
                    <span>
                      <span>Địa chỉ</span> : 267 Chu Văn An, Bình Thạnh, Hồ Chí Minh
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={40}>
              <Col span={12}>
                <div className="child-setting bottom-margin" style={{ alignItems: 'center' }}>
                  <img alt="icon" src='/static/images/purse.png' />
                  <div className="child-setting__info">
                    <span>
                      <span>Phí</span> : 50/50
                    </span>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="child-setting">
                   <img alt="icon" src='/static/images/purse.png' />
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
              <img className="field" alt="field" src="/static/images/field.png" />
              <img className="roster roster-gk" alt="avatar" src="/static/images/user.png" />
              <div className="flex-roster">
                <img className="roster-cb" alt="avatar" src="/static/images/user.png" />
                <img className="roster-cb middle" alt="avatar" src="/static/images/user.png" />
                <img className="roster-cb" alt="avatar" src="/static/images/user.png" />
              </div>
              <div className="flex-roster">
                <img className="roster-st" alt="avatar" src="/static/images/user.png" />
                <img className="roster-st" alt="avatar" src="/static/images/user.png" />
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default MatchInfo
