const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/checkbox-group/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    relations: {
        "../checkbox/index": {
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
            type: Array,
            value: [],
            observer: "changeCurrent"
        }
    },
    methods: {
        changeCurrent(val = this.data.current) {
            let items = this.getRelationNodes("../checkbox/index");
            const len = items.length;

            if (len > 0) {
                items.forEach(item => {
                    item.changeCurrent(val.indexOf(item.data.value) !== -1);
                });
            }
        },

        emitEvent(current) {
            this.triggerEvent("change", current);
        }
    }
});
