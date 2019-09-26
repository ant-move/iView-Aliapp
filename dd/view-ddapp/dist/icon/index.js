const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/icon/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    properties: {
        type: {
            type: String,
            value: ""
        },
        custom: {
            type: String,
            value: ""
        },
        size: {
            type: Number,
            value: 14
        },
        color: {
            type: String,
            value: ""
        }
    }
});
