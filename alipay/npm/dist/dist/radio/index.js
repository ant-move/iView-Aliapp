"use strict";

var prefixCls = "i-radio";
Component({
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
    }
  },
  data: {
    checked: true,
    positionCls: "".concat(prefixCls, "-radio-left")
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
    radioChange: function radioChange() {
      if (this.data.disabled) return;
      var item = {
        current: !this.data.checked,
        value: this.data.value
      };
      var parent = this.getRelationNodes("../radio-group/index")[0];
      parent ? parent.emitEvent(item) : this.triggerEvent("change", item);
    },
    setPosition: function setPosition() {
      this.setData({
        positionCls: this.data.position.indexOf("left") !== -1 ? "".concat(prefixCls, "-radio-left") : "".concat(prefixCls, "-radio-right")
      });
    },
    antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
    }
  }
});