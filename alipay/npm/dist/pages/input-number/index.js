"use strict";

Page({
  data: {
    value1: 1,
    value2: 0.1
  },
  handleChange1: function handleChange1(_ref) {
    var detail = _ref.detail;
    this.setData({
      value1: detail.value
    });
  },
  handleChange2: function handleChange2(_ref2) {
    var detail = _ref2.detail;
    this.setData({
      value2: detail.value
    });
  }
});