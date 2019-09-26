const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/grid-item/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    relations: {
        "../grid/index": {
            type: "parent"
        },
        "../grid-icon/index": {
            type: "child"
        }
    },
    data: {
        width: "33.33%"
    }
});
