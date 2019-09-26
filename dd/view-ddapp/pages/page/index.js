const _Page = require("../../__antmove/component/componentClass.js")("Page");
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "pages/page/index"
    }
});

_Page({
    data: {
        current: 1
    },

    handleChange({ detail }) {
        const type = detail.type;

        if (type === "next") {
            this.setData({
                current: this.data.current + 1
            });
        } else if (type === "prev") {
            this.setData({
                current: this.data.current - 1
            });
        }
    }
});
