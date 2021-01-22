"use strict";

Page({
  data: {
    spinShow: true,
    "switch": false
  },
  onSwitchChange: function onSwitchChange(_ref) {
    var detail = _ref.detail;
    var value = detail.value;
    this.setData({
      "switch": value,
      spinShow: !value
    });
  }
});