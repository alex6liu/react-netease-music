import React from 'react';
import './index.scss';

const Board = () => (
  <div class="board-container">
    <div class="header">
      <a href="/" class="title">榜单</a>
      <span class="more">
        <a href="/">更多</a>
      </span>
    </div>
    <div class="content">
      <single-board id="3"></single-board>
      <single-board id="0"></single-board>
      <single-board id="2"></single-board>
    </div>
  </div>
);

export default Board;