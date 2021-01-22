"use strict";

Component({
  externalClasses: ["i-class"],
  properties: {
    // default, primary, ghost, info, success, warning, error
    type: {
      type: String,
      value: ""
    },
    inline: {
      type: Boolean,
      value: false
    },
    // default, large, small
    size: {
      type: String,
      value: ""
    },
    // circle, square
    shape: {
      type: String,
      value: "square"
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    "long": {
      type: Boolean,
      value: false
    },
    openType: String,
    appParameter: String,
    hoverStopPropagation: Boolean,
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    lang: {
      type: String,
      value: "en"
    },
    sessionFrom: {
      type: String,
      value: ""
    },
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean
  },
  methods: {
    handleTap: function handleTap() {
      if (this.data.disabled) return false;
      this.triggerEvent("click");
    },
    bindgetuserinfo: function bindgetuserinfo() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$detail = _ref.detail,
          detail = _ref$detail === void 0 ? {} : _ref$detail;

      this.triggerEvent("getuserinfo", detail);
    },
    bindcontact: function bindcontact() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$detail = _ref2.detail,
          detail = _ref2$detail === void 0 ? {} : _ref2$detail;

      this.triggerEvent("contact", detail);
    },
    bindgetphonenumber: function bindgetphonenumber() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$detail = _ref3.detail,
          detail = _ref3$detail === void 0 ? {} : _ref3$detail;

      this.triggerEvent("getphonenumber", detail);
    },
    binderror: function binderror() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$detail = _ref4.detail,
          detail = _ref4$detail === void 0 ? {} : _ref4$detail;

      this.triggerEvent("error", detail);
    },
    antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
    }
  }
});