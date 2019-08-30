const _Component = require("/__antmove/component/componentClass.js")(
    "Component"
);
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
