const _Page = require("../../__antmove/component/componentClass.js")("Page");

my.setStorageSync({
  key: "activeComponent",
  data: {
    is: "pages/grid/index"
  }
});

_Page({
  data: {
    isAdd: false
  },

  handleAdd() {
    this.setData({
      isAdd: !this.data.isAdd
    });
  }

});