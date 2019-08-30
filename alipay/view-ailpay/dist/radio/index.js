const _Component = require("/__antmove/component/componentClass.js")(
    "Component"
);
const prefixCls = "i-radio";

_Component({
    externalClasses: ["i-class"],
    relations: {
        "../radio-group/index": {
            type: "parent"
        }
    },
    properties: {
        value: {
            type: String,
            value: ""
        },
        checked: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        color: {
            type: String,
            value: "#2d8cf0"
        },
        position: {
            type: String,
            value: "left",
            //left right
            observer: "setPosition"
        },
        current: {
            type: Number,
            value: 0,
            observer: "changeCurrent"
        },
        index: {
            type: Number,
            value: 0
        }
    },
    data: {
        checked: true,
        positionCls: `${prefixCls}-radio-left`
    },

    attached() {
        this.setPosition();
    },

    methods: {
        changeCurrent(current) {
            this.setData({
                checked: current === this.data.index
            });
        },

        radioChange() {
            if (this.data.disabled) return;
            const item = {
                current: !this.data.checked,
                value: this.data.value
            };
            this.triggerEvent("change", item);
        },

        setPosition() {
            this.setData({
                positionCls:
                    this.data.position.indexOf("left") !== -1
                        ? `${prefixCls}-radio-left`
                        : `${prefixCls}-radio-right`
            });
        }
    }
});
