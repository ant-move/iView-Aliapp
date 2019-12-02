const _Page = require("../../__antmove/component/componentClass.js")("Page");

my.setStorageSync({
  key: "activeComponent",
  data: {
    is: "pages/steps/index"
  }
});

_Page({
  data: {
    current: 2,
    verticalCurrent: 2
  },

  handleClick() {
    const addCurrent = this.data.current + 1;
    const current = addCurrent > 2 ? 0 : addCurrent;
    this.setData({
      current: current
    });
  }

});