"use strict";

Page({
  data: {
    current: 1
  },
  handleChange: function handleChange(_ref) {
    var detail = _ref.detail;
    var type = detail.type;

    if (type === "next") {
      this.setData({
        current: this.data.current + 1
      });
    } else if (type === "prev") {
      this.setData({
        current: this.data.current - 1
      });
    }
  }
});