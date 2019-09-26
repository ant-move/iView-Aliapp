const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/page/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    options: {
        multipleSlots: true
    },
    properties: {
        // button || number || pointer
        mode: {
            type: String,
            value: "button"
        },
        current: {
            type: Number,
            value: 1
        },
        total: {
            type: Number,
            value: 0
        },
        // 是否隐藏数值
        simple: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        handleChange(type) {
            this.triggerEvent("change", {
                type: type
            });
        },

        handlePrev() {
            this.handleChange("prev");
        },

        handleNext() {
            this.handleChange("next");
        }
    }
});
