const _Component = require("/__antmove/component/componentClass.js")(
    "Component"
);
_Component({
    externalClasses: ["i-class"],
    properties: {
        content: {
            type: String,
            value: ""
        },
        height: {
            type: Number,
            value: 48
        },
        color: {
            type: String,
            value: "#80848f"
        },
        lineColor: {
            type: String,
            value: "#e9eaec"
        },
        size: {
            type: String,
            value: 12
        }
    }
});
