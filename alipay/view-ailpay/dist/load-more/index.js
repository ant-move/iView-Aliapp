const _Component = require("/__antmove/component/componentClass.js")(
    "Component"
);
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
