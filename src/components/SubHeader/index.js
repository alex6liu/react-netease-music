import React from 'react';
import './index.scss';

const SubHeader = () => (
  <div className="subbar-container">
    <a href="/discover" className="pages active">推荐</a>
    <a href="/discover/toplist" className="pages">排行榜</a>
    <a href="/discover/playlist" className="pages">歌单</a>
    <a href="/discover/djradio" className="pages">主播电台</a>
    <a href="/discover/artist" className="pages">歌手</a>
    <a href="/discover/album" className="pages">新碟上架</a>
  </div>
);

export default SubHeader;