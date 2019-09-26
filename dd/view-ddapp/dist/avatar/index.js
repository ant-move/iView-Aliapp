const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/avatar/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    properties: {
        // circle || square
        shape: {
            type: String,
            value: "circle"
        },
        // small || large || default
        size: {
            type: String,
            value: "default"
        },
        src: {
            type: String,
            value: ""
        }
    }
});
