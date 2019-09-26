const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/alert/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    options: {
        multipleSlots: true
    },
    properties: {
        //info, success, warning, error
        type: {
            type: String,
            value: "info"
        },
        closable: {
            type: Boolean,
            value: false
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        desc: {
            type: Boolean,
            default: false
        }
    },
    data: {
        closed: false
    },
    methods: {
        handleTap() {
            this.setData({
                closed: !this.data.closed
            });
            this.triggerEvent("close");
        }
    }
});
