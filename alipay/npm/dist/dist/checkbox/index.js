"use strict";

var prefixCls = "i-checkbox";
Component({
  externalClasses: ["i-class"],
  relations: {
    "../checkbox-group/index": {
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
    }
  },
  data: {
    checked: true,
    positionCls: "".concat(prefixCls, "-checkbox-left")
  },
  attached: function attached() {
    this.setPosition();
  },
  methods: {
    changeCurrent: function changeCurrent(current) {
      this.setData({
        checked: current
      });
    },
    checkboxChange: function checkboxChange() {
      if (this.data.disabled) return;
      var item = {
        current: !this.data.checked,
        value: this.data.value
      };
      var parent = this.getRelationNodes("../checkbox-group/index")[0];
      parent ? parent.emitEvent(item) : this.triggerEvent("change", item);
    },
    setPosition: function setPosition() {
      this.setData({
        positionCls: this.data.position.indexOf("left") !== -1 ? "".concat(prefixCls, "-checkbox-left") : "".concat(prefixCls, "-checkbox-right")
      });
    },
    antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
    }
  }
});