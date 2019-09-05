import React, { Component } from 'react';
import Header from '../../components/Header'
import Card from '../../containers/Card'
import { Select, Radio } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import Masonry from 'react-masonry-css'
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
    message: 'We are looing for some really ! Welcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepoqwie pqwiepo qiwepo iqwpoei poqwiepoiq wpoeiqwpo iepoqwie poqiwp oiqwpoei poqwiepqw iepoqwie'
  },
  {
    title: 'Title 2',
    message: 'We are looing for s night. Feel free to join us! Welcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepoqwie pqwiepo qiwepo iqwpoei poqwiepoiq wpoeiqwpo iepoqwie poqiwp oiqwpoei poqwiepqw iepoqwie'

  },
  {
    title: 'Title 3',
    message: 'We are looing for some really great playe  Feel free to join us! Welcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepoqwie pqwiepo qiwepo iqwpoei poqwiepoiq wpoeiqwpo iepoqwie poqiwp oiqwpoei poqwiepqw iepoqwie'

  },
  {
    title: 'Title 4',
    message: 'We are looight. Feel free to join us! Welcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepoqwie pqwiepo qiwepo iqwpoei poqwiepoiq wpoeiqwpo iepoqwie poqiwp oiqwpoei poqwiepqw iepoqwie'

  },
  {
    title: 'Title 4',
    message: 'We are looing for some really great players, for today. We will play till night. Feel free to o qiwepo iqwpoei poqwiepoiq wpoeiqwpo iepoqwie poqiwp oiqwpoei poqwiepqw iepoqwie'

  },
  {
    title: 'Title 5',
    message: 'We are looing for some really great plwie pqwiepo qiwepo iqwpoei poqwiepoiq wpoeiqwpo iepoqwie poqiwp oiqwpoei poqwiepqw iepoqwie'

  },
  {
    title: 'Title 6',
    message: 'We are looing for some really great players, for today. We will play till night. Feel free to join us! Welcome for everyone! qwoeiqpowi eopqwi poei come for everyone! qwoeiqpowi eopqwi poei come for everyone! qwoeiqpowi eopqwi poei wqpo iepoqwie pqwiepo qiwepo iqwpoei poqwiepoiq wpoeiqwpo iepoqwie poqiwp oiqwpoei poqwiepqw iepoqwie'

  },
  {
    title: 'Title 7',
    message: 'We are looing for some really great players, foss! Welcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepoqwie pqwiepo qiwepo iqwpoei poqwiepoiq wpoeiqwpo iepoqwie poqiwp oiqwpoei poqwiepqw iepoqwie'

  },
  {
    title: 'Title 8',
    message: 'We are looing for some really great placome for everyone! qwoeiqpowi eopqwi poei come for everyone! qwoeiqpowi eopqwi poeicome for everyone! qwoeiqpowi eopqwi poei come for everyone! qwoeiqpowi eopqwi poeijoin us! Welcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepoqwie pqwiepo qiwepo iqwpoei poqwiepoiq wpoeiqwpo iepoqwie poqiwp oiqwpoei poqwiepqw iepoqwie'

  },
  {
    title: 'Title 9',
    message: 'We are looing for some really great players, for today. We will play till come for everyone! qwoeiqpowi eopqwi poei come for everyone! qwoeiqpowi eopqwi poei  night. Feel free to join us! Welcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepoqwie pqwiepo qiwepo iqwpoei poqwiepoiq wpoeiqwpo iepoqwie poqiwp oiqwpoei poqwiepqw iepoqwie'

  },
  {
    title: 'Title 10',
    message: 'We are looing for some really great  plfree to join us! Welcome fo  plfree to join us! Welcome fo  plfree to join us! Welcome fo  plfree to join us! Welcome fo plfree to join us! Welcome fo  plfree to join us! Welcome fo plfree to join us! Welcome for everyone! qwoeiqpowi eopqwi poeiwqpo iepoqwie pqwiepo qiwepo iqwpoei poqwiepoiq wpoeiqwpo iepoqwie poqiwp oiqwpoei poqwiepqw iepoqwie'

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
        <div className="display-flex">
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
            
              <Masonry
                breakpointCols={{
                  default: 4,
                  1450: 3,
                  700: 2,
                  500: 1
                }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                  data.map((item) => <Card key={item.title} data={item} imageStatus={shuffle(randomImg).slice(0, 4)} />)
                }
              </Masonry>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
