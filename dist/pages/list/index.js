const _Page = require("../../__antmove/component/componentClass.js")("Page");

my.setStorageSync({
  key: "activeComponent",
  data: {
    is: "pages/list/index"
  }
});

_Page({
  data: {
    switch1: true
  },

  onChange(event) {
    const detail = event.detail;
    this.setData({
      switch1: detail.value
    });
  }

});