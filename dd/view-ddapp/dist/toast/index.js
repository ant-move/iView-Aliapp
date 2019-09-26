const _Component = require("../../__antmove/component/componentClass.js")(
    "Component"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "dist/toast/index"
    }
});
const default_data = {
    visible: false,
    content: "",
    icon: "",
    image: "",
    duration: 2,
    mask: true,
    type: "default" // default || success || warning || error || loading
};
let timmer = null;

_Component({
    externalClasses: ["i-class"],
    data: { ...default_data },
    methods: {
        handleShow(options) {
            const { type = "default", duration = 2 } = options;
            this.setData({ ...options, type, duration, visible: true });
            const d = this.data.duration * 1000;
            if (timmer) clearTimeout(timmer);

            if (d !== 0) {
                timmer = setTimeout(() => {
                    this.handleHide();
                    timmer = null;
                }, d);
            }
        },

        handleHide() {
            this.setData({ ...default_data });
        }
    }
});
