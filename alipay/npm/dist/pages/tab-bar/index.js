"use strict";

Page({
  data: {
    current: "homepage"
  },
  handleChange: function handleChange(_ref) {
    var detail = _ref.detail;
    this.setData({
      current: detail.key
    });
  }
});