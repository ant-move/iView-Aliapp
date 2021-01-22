"use strict";

function getCtx(selector) {
  var pages = getCurrentPages();
  var ctx = pages[pages.length - 1];
  var componentCtx = ctx.selectComponent(selector);

  if (!componentCtx) {
    console.error("无法找到对应的组件，请按文档说明使用组件");
    return null;
  }

  return componentCtx;
}

function Toast(options) {
  var _options$selector = options.selector,
      selector = _options$selector === void 0 ? "#toast" : _options$selector;
  var ctx = getCtx(selector);
  ctx.handleShow(options);
}

Toast.hide = function () {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#toast";
  var ctx = getCtx(selector);
  ctx.handleHide();
};

function Message(options) {
  var _options$selector2 = options.selector,
      selector = _options$selector2 === void 0 ? "#message" : _options$selector2;
  var ctx = getCtx(selector);
  ctx.handleShow(options);
}

module.exports = {
  $Toast: Toast,
  $Message: Message
};