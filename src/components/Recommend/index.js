import React, { Component } from 'react';
import './index.scss';
import api from '../../../utils/api.js'

class Recommend extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
    };
  }

  componentDidMount() {
    fetch(api.reconmendSongs)
      .then(res => res.json())
      .then(res => res.result)
      .then((res) => {
        this.setState({
          lists: res.slice(0, 8),
        });
      });
  }

  render() {
    const { lists } = this.state;
    
    return (
      <div className="recommend-container">
        <div className="recommend-header">
          <a href="/" className="title">热门推荐</a> 
          <div className="recommend-sub-header">
            <a href="/" className="cate">华语</a>
            <span className="line">|</span>
            <a href="/" className="cate">流行</a>
            <span className="line">|</span>
            <a href="/" className="cate">摇滚</a>
            <span className="line">|</span>
            <a href="/" className="cate">民谣</a>
            <span className="line">|</span>
            <a href="/" className="cate">电子</a>
          </div>
          <span className="more">
            <a href="/">更多</a>
          </span>
        </div>
        <ul className="playlists-container">
          {
            lists.map(list => (
              <li>
                <div className="u-cover">
                  <img src={list.picUrl} alt=""/>
                  <a href="/"></a>
                  <div className="bottom">
                    <span className="nb">{list.playCount}</span>
                  </div>
                </div>
                <p className="dec">
                  <a href="/">{list.name}</a>
                </p>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Recommend;