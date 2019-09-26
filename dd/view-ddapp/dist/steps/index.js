const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/steps/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    properties: {
        current: {
            type: Number,
            value: -1,
            observer: "_updateDataChange"
        },
        status: {
            type: String,
            //wait、process、finish、error
            value: ""
        },
        direction: {
            type: String,
            //value has horizontal or vertical
            value: "horizontal"
        }
    },
    relations: {
        "../step/index": {
            type: "child",

            linked() {
                this._updateDataChange();
            },

            linkChanged() {
                this._updateDataChange();
            },

            unlinked() {
                this._updateDataChange();
            }
        }
    },
    methods: {
        _updateDataChange() {
            let steps = this.getRelationNodes("../step/index");
            const len = steps.length;

            if (len > 0) {
                steps.forEach((step, index) => {
                    step.updateDataChange({
                        len: len,
                        index: index,
                        current: this.data.current,
                        direction: this.data.direction
                    });
                });
            }
        }
    }
});
