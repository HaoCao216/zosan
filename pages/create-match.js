import React, { Component } from 'react'
import { Select, Input, Icon, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import Page from '../layouts/main';

import './create-match.styles.scss'

const OPTIONS = [
  {
    name: 'Apples',
  },
  {
    name: 'Nails',
  },
  {
    name: 'Bananas',
  },
  {
    name: 'Helicopters',
  },
  {
    name: 'Messi',
  },
  {
    name: 'Ronadol',
  },
  {
    name: 'Salah',
  },
  {
    name: 'Kane',
  },
  {
    name: 'Kantes',
  },
  {
    name: 'Silva',
  },
  {
    name: 'Marcelo',
  },
  {
    name: 'Mane',
  },
  {
    name: 'Coutinho',
  },
  {
    name: 'Isco',
  },
];

const { TextArea } = Input;

const format = 'HH:mm';

const { Option } = Select;

class CreateMatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      daChinh: [],
      duBi: [],
      tagFriend: [],
      mediaEditing: '',
    };
  }

  handleChange = (selectedItems, type) => {
    if (type === 'da chinh') {
      return this.setState({ daChinh: selectedItems });
    }
    return this.setState({ duBi: selectedItems });
  }

  editMedia = (type) => {
    const { mediaEditing } = this.state
    if (mediaEditing === type) {
      return this.setState({ mediaEditing: '' })
    }
    this.setState({ mediaEditing: type })
  }

  renderTitle = () => {
    const { mediaEditing, tagFriend } = this.state
    const filteredOptions = OPTIONS.filter(o => !tagFriend.includes(o))
    let title = ''
    switch(mediaEditing) {
      case 'time':
        title = '- Lúc'
        break
      case 'fieldName':
        title = '- Sân'
        break
      case 'location':
        title = '- Tại'
        break
      case 'price':
        title = '- Tiền sân'
        break
      case 'tags':
        title = '- Với'
        break
      default:
        title = ''
        break
    }
    return (
      <div className="render-title">
        <div className="type">{title}</div>
        {
          mediaEditing === 'tags' && <Select
            className="custom-select"
            mode="multiple"
            placeholder="Bạn chơi cùng với ai?"
            value={tagFriend}
            onChange={e => this.setState({ tagFriend: e})}
            style={{ width: '100%' }}
          >
            {filteredOptions.map((item, index) => (
              <Select.Option key={index} value={item.name}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        }
        {
          mediaEditing === 'location' && <input
            className="input-location"
            placeholder="Bạn chơi ở đâu?"
          />
        }
        {
          mediaEditing === 'fieldName' && <input
            className="input-location input-field"
            placeholder="Tên sân bạn chơi?"
          />
        }
        {
          mediaEditing === 'price' && <Select
            className="select-value"
            placeholder="Cưa đôi nhé?"
            style={{ width: '100%' }}
            showArrow={false}
          >
            <Select.Option value={50}>
              Cưa đôi (50/50)
            </Select.Option>
            <Select.Option value={30}>
              Ăn thua (30/70)
            </Select.Option>
            <Select.Option value={0}>
              Khô máu (:x)
            </Select.Option>
          </Select>
        }
        {
          mediaEditing === 'time' && <div className="time-start">
            <TimePicker defaultValue={moment('12:08', format)} format={format} />
            <div className="text">đến</div>
            <TimePicker defaultValue={moment('12:08', format)} format={format} />
            <div className="text">ngày</div>
            <DatePicker />
          </div>
        }
      </div>
    )
  }

  render() {
    const { daChinh, duBi, mediaEditing } = this.state
    const filteredOptions = OPTIONS.filter(o => !daChinh.includes(o) && !duBi.includes(o))

    return (
      <Page className="match-container">
        <div className="container-box">
          <div className="create-match-info">
            <div className="input-box">
              <div className="title-box">
                <div>Tạo trận đấu</div>
                <img src="/static/images/delete.png" alt="delete"/>
              </div>
              <div className="body">
                <div className="title">
                  <img src="/static/images/user.png" alt="avatar"/>
                  <TextArea placeholder="Thông tin trận đấu của bạn..."
                    autosize={{ minRows: 2 }}
                  />
                </div>
                {
                  (mediaEditing !== '' && mediaEditing === 'image') && <div className="edit-media-box">
                    <div className="list-image">
                      {
                        [1, 2].map(index =>
                          <div className="photo-item" key={index}>
                            <img className="photo-added" alt="add" src="/static/images/random1.jpeg" />
                            <img className="delete-photo" src="/static/images/delete.png" alt="delete"/>
                          </div>
                        )
                      }
                      <div className="empty-image">
                        <Icon type="plus" />
                      </div>
                    </div>
                  </div>
                }
                {
                  mediaEditing !== '' && <div className="edit-media-box">
                    <div className="title">
                      {this.renderTitle()}
                    </div>
                  </div>
                }
                <div className="media-box">
                  <div className="media-child">
                    <div className="item" style={{ opacity: mediaEditing === 'image' ? 1 : 0.4 }} onClick={() => this.editMedia('image')}>
                      <img alt="icon" src='/static/images/add-image.png' />
                      <span>Thêm ảnh</span>
                    </div>
                    <div className="item" style={{ opacity: mediaEditing === 'time' ? 1 : 0.4 }} onClick={() => this.editMedia('time')}>
                      <img alt="icon" src='/static/images/calendar.png' />
                      <span>Thời gian</span>
                    </div>
                    <div className="item" style={{ opacity: mediaEditing === 'location' ? 1 : 0.4 }} onClick={() => this.editMedia('location')}>
                      <img alt="icon" src='/static/images/maps-and-flags.png' />
                      <span>Địa điểm</span>
                    </div>
                  </div>
                  <div className="media-child">
                    <div className="item" style={{ opacity: mediaEditing === 'fieldName' ? 1 : 0.4 }} onClick={() => this.editMedia('fieldName')}>
                      <img alt="icon" src='/static/images/soccer-field.png' />
                      <span>Tên sân</span>
                    </div>
                    <div className="item" style={{ opacity: mediaEditing === 'price' ? 1 : 0.4 }} onClick={() => this.editMedia('price')}>
                      <img alt="icon" src='/static/images/purse.png' />
                      <span>Giá</span>
                    </div>
                    <div className="item" style={{ opacity: mediaEditing === 'tags' ? 1 : 0.4 }} onClick={() => this.editMedia('tags')}>
                      <img alt="icon" src='/static/images/add-friend.png' />
                      <span>Gắn thẻ bạn bè</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stat-field input-box">
              <div className="title-box">
                <div>Đội hình xuất phát</div>
                <img src="/static/images/delete.png" alt="delete"/>
              </div>
              <div className="select-zone">
                <div className="select-box">
                  <div className="title">Danh sách đá chính : </div>
                  <Select
                    mode="multiple"
                    placeholder="Danh sách đá chính"
                    value={daChinh}
                    onChange={e => this.handleChange(e, 'da chinh')}
                    style={{ width: '100%' }}
                    filterOption={false}
                  >
                    {filteredOptions.map((item, index) => (
                      <Option key={index}>
                        <img width={40} style={{ marginRight: 10 }} src="/static/images/user.png" alt="player-avatar" />
                        <span>{item.name}</span>
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="select-box">
                  <div className="title">Danh sách dự bị : </div>
                  <Select
                    mode="multiple"
                    placeholder="Danh sách dự bị"
                    value={duBi}
                    onChange={e => this.handleChange(e, 'du bi')}
                    style={{ width: '100%' }}
                  >
                    {filteredOptions.map((item, index) => (
                      <Option key={index}>
                        <img width={40} style={{ marginRight: 10 }} src="/static/images/user.png" alt="player-avatar" />
                        <span>{item.name}</span>
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
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
            <div className="group-btn">
              <button>Hủy bỏ</button>
              <button>Hoàn tất</button>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default CreateMatch
