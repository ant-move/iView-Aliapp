const _Page = require("../../__antmove/component/componentClass.js")("Page");

my.setStorageSync({
  key: "activeComponent",
  data: {
    is: "pages/tab-bar/index"
  }
});

_Page({
  data: {
    current: "homepage"
  },

  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
  }

});