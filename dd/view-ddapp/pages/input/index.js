const _Page = require("../../__antmove/component/componentClass.js")("Page");
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "pages/input/index"
    }
});

_Page({
    data: {
        value1: "",
        value2: "",
        value3: "",
        value4: "输入框已禁用",
        value5: "",
        value6: "",
        value7: ""
    }
});
