"use strict";

var _require = require("../../dist/base/index"),
    $Message = _require.$Message;

Page({
  handleDefault: function handleDefault() {
    $Message({
      content: "这是一条普通提醒"
    });
  },
  handleSuccess: function handleSuccess() {
    $Message({
      content: "这是一条成功提醒",
      type: "success"
    });
  },
  handleWarning: function handleWarning() {
    $Message({
      content: "这是一条警告提醒",
      type: "warning"
    });
  },
  handleError: function handleError() {
    $Message({
      content: "这是一条错误提醒",
      type: "error"
    });
  },
  handleDuration: function handleDuration() {
    $Message({
      content: "我将在 5 秒后消失",
      duration: 5
    });
  }
});