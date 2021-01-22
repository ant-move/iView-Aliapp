"use strict";

Page({
  data: {
    scrollTop: 0
  },
  onChange: function onChange(event) {
    console.log(event.detail, "click right menu callback data");
  },
  //页面滚动执行方式
  onPageScroll: function onPageScroll(event) {
    this.setData({
      scrollTop: event.scrollTop
    });
  }
});