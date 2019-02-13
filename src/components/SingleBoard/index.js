import React, { Component } from 'react';
import './index.scss';
import api from '../../utils/api.js';

class SingleBoard extends Component {
  constructor() {
    super();
    this.state = {
      idx: this.props.id,
      lists: [],
      cover: '',
    };
  }

  componentDidMount() {
    fetch(api.singleBoard + this.idx)
      .then(res => res.json())
      .then(res => res.playlist.tracks.slice(0, 10))
      .then(res => {
        this.lists = res
      })
    
    if(this.idx == '3') {
      this.cover = 'http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100';
    }
    if(this.idx == '0') {
      this.cover = 'http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100';
    }
    if(this.idx == '2') {
      this.cover = 'http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100';
    }
  }

  getHref (id) {
    return "/song?id=" + id
  }

  render() {
    const { idx, cover, lists } = this.props;
    return (
      <div className="container">
        <div className="header">
          <div className="cover">
            <img src={cover}/>
            <a href="/discover/toplist?id=19723756" className="msk" title="云音乐飙升榜" alt=""></a>
          </div>
          <div className="title">
            <a href="/discover/toplist?id=19723756" title="云音乐飙升榜">
              <h3 className="f-fs1 f-thide">云音乐飙升榜</h3>
            </a>
          </div>
        </div>
        <div className="content">
          <ol>
            {
              lists.map((list, index) => (
                <li>
                  <span v-if="index <= 2" className="no no-top">{index + 1}</span>
                  <span v-else className="no">{index + 1}</span>
                  <a className="nm" href={this.getHref(list.id)}>{list.name}</a>
                </li>
              ))
            }
            
          </ol>
        </div>
        <div className="more">
          <a href="/discover/toplist?id=2884035" className="s-fc0">查看全部&gt;</a>
        </div>
      </div>
    );
  }
} 


export default SingleBoard;