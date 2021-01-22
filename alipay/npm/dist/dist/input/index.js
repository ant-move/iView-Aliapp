"use strict";

var _my = require("../../__antmove/api/index.js")(my);

var wx = _my;
Component({
  behaviors: ["wx://form-field"],
  externalClasses: ["i-class"],
  properties: {
    title: {
      type: String
    },
    // text || textarea || password || number
    type: {
      type: String,
      value: "text"
    },
    disabled: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ""
    },
    autofocus: {
      type: Boolean,
      value: false
    },
    mode: {
      type: String,
      value: "normal"
    },
    right: {
      type: Boolean,
      value: false
    },
    error: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number
    }
  },
  methods: {
    handleInputChange: function handleInputChange(event) {
      var _event$detail = event.detail,
          detail = _event$detail === void 0 ? {} : _event$detail;
      var _detail$value = detail.value,
          value = _detail$value === void 0 ? "" : _detail$value;
      this.setData({
        value: value
      });
      this.triggerEvent("change", event);
    },
    handleInputFocus: function handleInputFocus(event) {
      this.triggerEvent("focus", event);
    },
    handleInputBlur: function handleInputBlur(event) {
      this.triggerEvent("blur", event);
    }
  }
});