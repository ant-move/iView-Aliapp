const _Page = require("../../__antmove/component/componentClass.js")("Page");

my.setStorageSync({
  key: "activeComponent",
  data: {
    is: "pages/collapse/index"
  }
});

_Page({
  data: {
    name: "name1"
  }
});