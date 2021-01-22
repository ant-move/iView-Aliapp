"use strict";

Page({
  data: {
    starIndex1: 0,
    starIndex2: 0,
    starIndex3: 0,
    starIndex4: 4,
    starIndex5: 5
  },
  onChange1: function onChange1(e) {
    var index = e.detail.index;
    this.setData({
      starIndex1: index
    });
  },
  onChange2: function onChange2(e) {
    var index = e.detail.index;
    this.setData({
      starIndex2: index
    });
  },
  onChange3: function onChange3(e) {
    var index = e.detail.index;
    this.setData({
      starIndex3: index
    });
  },
  onChange5: function onChange5(e) {
    var index = e.detail.index;
    this.setData({
      starIndex5: index
    });
  }
});