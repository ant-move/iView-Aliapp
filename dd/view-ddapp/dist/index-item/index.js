const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
const _my = require("../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/index-item/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    properties: {
        name: {
            type: String,
            value: ""
        }
    },
    relations: {
        "../index/index": {
            type: "parent"
        }
    },
    data: {
        top: 0,
        height: 0,
        currentName: ""
    },
    methods: {
        updateDataChange() {
            const className = ".i-index-item-" + this.data.name;

            const query = _my.createSelectorQuery().in(this);

            query
                .select(className)
                .boundingClientRect(res => {
                    this.setData({
                        top: res.top,
                        height: res.height,
                        currentName: this.data.name
                    });
                })
                .exec();
        }
    }
});
