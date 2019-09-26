const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/spin/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    properties: {
        // small || default || large
        size: {
            type: String,
            value: "default"
        },
        fix: {
            type: Boolean,
            value: false
        },
        fullscreen: {
            type: Boolean,
            value: false
        },
        custom: {
            type: Boolean,
            value: false
        }
    }
});
