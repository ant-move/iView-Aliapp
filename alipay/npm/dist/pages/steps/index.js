"use strict";

Page({
  data: {
    current: 2,
    verticalCurrent: 2
  },
  handleClick: function handleClick() {
    var addCurrent = this.data.current + 1;
    var current = addCurrent > 2 ? 0 : addCurrent;
    this.setData({
      current: current
    });
  }
});