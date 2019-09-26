const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/grid/index"
    }
});

_Component({
    externalClasses: ["i-class"],
    relations: {
        "../grid-item/index": {
            type: "child",

            linked() {
                this.setGridItemWidth();
            },

            linkChanged() {
                this.setGridItemWidth();
            },

            unlinked() {
                this.setGridItemWidth();
            }
        }
    },
    methods: {
        setGridItemWidth() {
            const nodes = this.getRelationNodes("../grid-item/index");
            if (!nodes) return false; // const len = nodes.length;
            // if (len < 3) {
            //     nodes.forEach(item => {
            //         item.setData({
            //             'width': '33.33%'
            //         });
            //     });
            // } else {
            //     const width = 100 / nodes.length;
            //     nodes.forEach(item => {
            //         item.setData({
            //             'width': width + '%'
            //         });
            //     });
            // }

            const width = 100 / nodes.length;
            nodes.forEach(item => {
                item.setData({
                    width: width + "%"
                });
            });
        }
    },

    ready() {
        this.setGridItemWidth();
    }
});
