import React, { Component } from 'react';
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Card from '../../containers/Card'
import { List, Select, Radio } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import shuffle from 'lodash/shuffle';
import r1 from './images/random1.jpeg';
import r2 from './images/random2.jpeg';
import r3 from './images/random3.jpeg';
import r4 from './images/random4.jpeg';
import r5 from './images/random5.jpeg';
import r6 from './images/random6.jpeg';
import r7 from './images/random7.jpeg';
import r8 from './images/random8.jpeg';

import './style.scss'

const randomImg = [r1, r2, r3, r4, r5, r6, r7, r8]
const { Option } = Select
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 4',
  },

  {
    title: 'Title 4',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 4',
  },
  
];

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <div className="landing-page-container">
        <Header />
        <div className="display-flex">
          <Navbar />
          <div className="list-card">
            <div className="option-top">
              <div className="select-type">
                <Radio.Group defaultValue="a" buttonStyle="solid">
                  <Radio.Button value="a">Popular Games</Radio.Button>
                  <Radio.Button value="b">Tournament Games</Radio.Button>
                </Radio.Group>
              </div>
              <Select defaultValue="24" style={{ width: 160 }}>
                <Option value="1">Past 1 hours</Option>
                <Option value="4">Past 4 hours</Option>
                <Option value="24">Past 24 hours</Option>
                <Option value="72">Past 3 days</Option>
              </Select>
            </div>
            <Scrollbars
                style={{height: 'calc(100vh - 189px)', width: '100%'}}>
              <List
                grid={{ column: window.innerWidth > 1500 ? 4 : 3 }}
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <Card imageStatus={shuffle(randomImg).slice(0, 4)} />
                  </List.Item>
                )}
              />
            </Scrollbars>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage

