const _Component = require("/__antmove/component/componentClass.js")(
    "Component"
);
_Component({
    externalClasses: ["i-class"],
    relations: {
        "../grid-item/index": {
            type: "parent"
        }
    }
});
