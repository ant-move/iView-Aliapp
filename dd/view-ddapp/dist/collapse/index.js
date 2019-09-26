const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/collapse/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    relations: {
        "../collapse-item/index": {
            type: "child"
        }
    },
    properties: {
        name: String,
        accordion: Boolean
    },
    methods: {
        clickfn(e) {
            const params = e.detail;
            const allList = this.getRelationNodes("../collapse-item/index");
            allList.forEach(item => {
                if (params.name === item.data.name) {
                    item.setData({
                        showContent: "i-collapse-item-show-content"
                    });
                } else {
                    item.setData({
                        showContent: ""
                    });
                }
            });
        }
    }
});
