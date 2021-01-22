"use strict";

Component({
  externalClasses: ["i-class", "i-class-mask"],
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ""
    },
    showOk: {
      type: Boolean,
      value: true
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    okText: {
      type: String,
      value: "确定"
    },
    cancelText: {
      type: String,
      value: "取消"
    },
    // 按钮组，有此值时，不显示 ok 和 cancel 按钮
    actions: {
      type: Array,
      value: []
    },
    // horizontal || vertical
    actionMode: {
      type: String,
      value: "horizontal"
    }
  },
  methods: {
    handleClickItem: function handleClickItem(_ref) {
      var _ref$currentTarget = _ref.currentTarget,
          currentTarget = _ref$currentTarget === void 0 ? {} : _ref$currentTarget;
      var dataset = currentTarget.dataset || {};
      var index = dataset.index;
      this.triggerEvent("click", {
        index: index
      });
    },
    handleClickOk: function handleClickOk() {
      this.triggerEvent("ok");
    },
    handleClickCancel: function handleClickCancel() {
      this.triggerEvent("cancel");
    }
  }
});