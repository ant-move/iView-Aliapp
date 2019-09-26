const _Page = require("../../__antmove/component/componentClass.js")("Page");
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "pages/spin/index"
    }
});

_Page({
    data: {
        spinShow: true,
        switch: false
    },

    onSwitchChange({ detail }) {
        const value = detail.value;
        this.setData({
            switch: value,
            spinShow: !value
        });
    }
});
