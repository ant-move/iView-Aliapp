const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/load-more/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    properties: {
        loading: {
            type: Boolean,
            value: true
        },
        tip: {
            type: String,
            value: ""
        }
    }
});
