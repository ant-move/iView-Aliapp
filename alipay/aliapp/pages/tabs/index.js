Page({
    data: {
        current: "tab1",
        current_scroll: "tab1"
    },

    handleChange({ detail }) {
        this.setData({
            current: detail.ikey
        });
    },

    handleChangeScroll({ detail }) {
        this.setData({
            current_scroll: detail.ikey
        });
    }
});
