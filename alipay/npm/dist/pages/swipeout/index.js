"use strict";

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var _require = require("../../dist/base/index"),
    $Message = _require.$Message;

Page({
  data: {
    visible2: false,
    //小程序没有refs，所以只能用动态布尔值控制关闭
    toggle: false,
    toggle2: false,
    actions2: [{
      name: "删除",
      color: "#ed3f14"
    }],
    actions: [{
      name: "喜欢",
      color: "#fff",
      fontsize: "20",
      width: 100,
      icon: "like",
      background: "#ed3f14"
    }, {
      name: "返回",
      width: 100,
      color: "#80848f",
      fontsize: "20",
      icon: "undo"
    }]
  },
  handleCancel2: function handleCancel2() {
    this.setData({
      visible2: false,
      toggle: this.data.toggle ? false : true
    });
    console.log(this.data.toggle, 111111111);
  },
  handleClickItem2: function handleClickItem2() {
    var _this = this;

    var action = _toConsumableArray(this.data.actions2);

    action[0].loading = true;
    this.setData({
      actions2: action
    });
    setTimeout(function () {
      action[0].loading = false;

      _this.setData({
        visible2: false,
        actions2: action,
        toggle: _this.data.toggle ? false : true
      });
    }, 2000);
  },
  handlerCloseButton: function handlerCloseButton() {
    this.setData({
      toggle2: this.data.toggle2 ? false : true
    });
  },
  actionsTap: function actionsTap() {
    this.setData({
      visible2: true
    });
  },
  antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
  }
});