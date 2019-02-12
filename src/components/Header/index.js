import React from 'react';
import './index.scss';
import logo from '../../assets/icon/company.png';

const Header = () => (
  <div className="header-container">
    <div className="header">
      <div className="company-logo">
        <img src={logo} className="netease" alt="netease"/>
        <span>网易云音乐</span>
      </div>
      <a href="/discover" className="pages">发现音乐</a>
      <a href="/my" className="pages">我的音乐</a>
      <a href="/" className="pages">朋友</a>
      <a href="/" className="pages">商城</a>
    </div>
  </div>
);

export default Header;