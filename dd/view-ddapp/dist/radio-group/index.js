const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/radio-group/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    relations: {
        "../radio/index": {
            type: "child",

            linked() {
                this.changeCurrent();
            },

            linkChanged() {
                this.changeCurrent();
            },

            unlinked() {
                this.changeCurrent();
            }
        }
    },
    properties: {
        current: {
            type: String,
            value: "",
            observer: "changeCurrent"
        }
    },
    methods: {
        changeCurrent(val = this.data.current) {
            let items = this.getRelationNodes("../radio/index");
            const len = items.length;

            if (len > 0) {
                items.forEach(item => {
                    item.changeCurrent(val === item.data.value);
                });
            }
        },

        emitEvent(current) {
            this.triggerEvent("change", current);
        }
    }
});
