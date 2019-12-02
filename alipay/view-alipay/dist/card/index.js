const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
_Component({
    externalClasses: ["i-class"],
    options: {
        multipleSlots: true
    },
    properties: {
        full: {
            type: Boolean,
            value: false
        },
        thumb: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        },
        extra: {
            type: String,
            value: ""
        }
    }
});
