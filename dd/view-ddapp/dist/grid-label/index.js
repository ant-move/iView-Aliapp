const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/grid-label/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    relations: {
        "../grid-item/index": {
            type: "parent"
        }
    }
});
