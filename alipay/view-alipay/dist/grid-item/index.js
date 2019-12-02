const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
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
