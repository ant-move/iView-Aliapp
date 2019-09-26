const _Page = require("../../__antmove/component/componentClass.js")("Page");
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "pages/switch/index"
    }
});

_Page({
    data: {
        switch1: false
    },

    onChange(event) {
        const detail = event.detail;
        this.setData({
            switch1: detail.value
        });
    }
});
