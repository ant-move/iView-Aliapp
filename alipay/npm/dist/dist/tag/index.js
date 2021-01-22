"use strict";

Component({
  externalClasses: ["i-class"],
  properties: {
    //slot name
    name: {
      type: String,
      value: ""
    },
    //can click or not click
    checkable: {
      type: Boolean,
      value: false
    },
    //is current choose
    checked: {
      type: Boolean,
      value: true
    },
    //background and color setting
    color: {
      type: String,
      value: "default"
    },
    //control fill or not
    type: {
      type: String,
      value: "dot"
    }
  },
  methods: {
    tapTag: function tapTag() {
      var data = this.data;

      if (data.checkable) {
        var checked = data.checked ? false : true;
        this.triggerEvent("change", {
          name: data.name || "",
          checked: checked
        });
      }
    },
    antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
    }
  }
});