const _Component = require("/__antmove/component/componentClass.js")(
    "Component"
);
_Component({
    externalClasses: ["i-class"],
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    methods: {
        handleTap2() {
            console.log(event, 1111111);
        },

        handleTap3() {}
    }
});
