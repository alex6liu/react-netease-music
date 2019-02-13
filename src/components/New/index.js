import React from 'react';
import './index.scss';

const New = () => (
  <div className="new-container">
    <div className="header">
      <a href="/" className="title">新碟上架</a>
      <span className="more">
        <a href="/">更多</a>
      </span>
    </div>
    <div className="container">
      {/* <swiper :options="swiperOption" ref="mySwiper" className="swiper">
        <swiper-slide v-for="list in lists" v-bind:key="list.id">
          <div className="inner-container">
            <img v-bind:src="list.picUrl" />
            <a href="/"></a>
            <p className="name">
              <a href="/">{{list.name}}</a>
            </p>
            <p className="singer">
              <a>{{list.artist.name}}</a>
            </p>
          </div>
        </swiper-slide>
      </swiper> */}
    </div>
  </div>
);

export default New;