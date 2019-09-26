const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/col/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    relations: {
        "../row/index": {
            type: "parent"
        }
    },
    properties: {
        span: {
            value: 0,
            type: Number
        },
        offset: {
            value: 0,
            type: Number
        }
    }
});
