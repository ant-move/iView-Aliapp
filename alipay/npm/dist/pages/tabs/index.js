"use strict";

Page({
  data: {
    current: "tab1",
    current_scroll: "tab1"
  },
  handleChange: function handleChange(_ref) {
    var detail = _ref.detail;
    this.setData({
      current: detail.ikey
    });
  },
  handleChangeScroll: function handleChangeScroll(_ref2) {
    var detail = _ref2.detail;
    this.setData({
      current_scroll: detail.ikey
    });
  }
});