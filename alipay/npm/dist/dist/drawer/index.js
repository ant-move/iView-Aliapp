"use strict";

Component({
  externalClasses: ["i-class"],
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    mask: {
      type: Boolean,
      value: true
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    mode: {
      type: String,
      value: "left" // left right

    }
  },
  data: {},
  methods: {
    handleMaskClick: function handleMaskClick() {
      if (!this.data.maskClosable) {
        return;
      }

      this.triggerEvent("close", {});
    },
    antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
    }
  }
});