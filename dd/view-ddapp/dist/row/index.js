const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/row/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    relations: {
        "../col/index": {
            type: "child"
        }
    }
});
