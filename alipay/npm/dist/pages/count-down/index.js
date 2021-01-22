"use strict";

Page({
  data: {
    targetTime: 0,
    targetTime1: 0,
    myFormat: ["时", "分", "秒"],
    myFormat1: ["天", "时", "分", "秒"],
    status: "进行中...",
    clearTimer: false
  },
  onLoad: function onLoad() {
    this.setData({
      targetTime: new Date().getTime() + 6430000,
      targetTime1: new Date().getTime() + 86430000,
      targetTime2: new Date().getTime() + 10000
    });
  },
  onUnload: function onUnload() {
    this.setData({
      clearTimer: true
    });
  },
  myLinsterner: function myLinsterner(e) {
    this.setData({
      status: "结束"
    });
  }
});