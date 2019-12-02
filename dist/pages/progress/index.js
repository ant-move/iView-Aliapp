const _Page = require("../../__antmove/component/componentClass.js")("Page");

my.setStorageSync({
  key: "activeComponent",
  data: {
    is: "pages/progress/index"
  }
});

_Page({
  data: {
    percent: 0,
    status: "normal"
  },

  handleAdd() {
    if (this.data.percent === 100) return;
    this.setData({
      percent: this.data.percent + 10
    });

    if (this.data.percent === 100) {
      this.setData({
        status: "success"
      });
    }
  },

  handleReduce() {
    if (this.data.percent === 0) return;
    this.setData({
      percent: this.data.percent - 10,
      status: "normal"
    });
  }

});