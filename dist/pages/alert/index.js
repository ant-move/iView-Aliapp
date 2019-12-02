const _Page = require("../../__antmove/component/componentClass.js")("Page");

my.setStorageSync({
  key: "activeComponent",
  data: {
    is: "pages/alert/index"
  }
});

_Page({
  handleClick() {
    console.log("alert-close");
  }

});