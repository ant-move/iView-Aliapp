const _Page = require("../../__antmove/component/componentClass.js")("Page");

my.setStorageSync({
  key: "activeComponent",
  data: {
    is: "pages/index/index"
  }
});

_Page({
  onShareAppMessage() {
    return {
      title: "iView Weapp",
      imageUrl: "https://file.iviewui.com/iview-weapp-logo.png"
    };
  }

});