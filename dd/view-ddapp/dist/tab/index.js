const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/tab/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    relations: {
        "../tabs/index": {
            type: "parent"
        }
    },
    properties: {
        type: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        },
        dot: {
            type: Boolean,
            value: false
        },
        count: {
            type: Number,
            value: 0
        }
    },
    data: {
        current: false,
        currentColor: "",
        scroll: false
    },
    methods: {
        changeCurrent(current) {
            this.setData({
                current
            });
        },

        changeCurrentColor(currentColor) {
            this.setData({
                currentColor
            });
        },

        changeScroll(scroll) {
            this.setData({
                scroll
            });
        },

        handleClickItem() {
            const parent = this.getRelationNodes("../tabs/index")[0];
            parent.emitEvent(this.data.type);
        }
    }
});
