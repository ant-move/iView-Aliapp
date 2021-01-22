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
    visible1: false,
    actions1: [{
      name: "选项1"
    }, {
      name: "选项2"
    }, {
      name: "去分享",
      icon: "share",
      openType: "share"
    }],
    actions2: [{
      name: "删除",
      color: "#ed3f14"
    }]
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: "iView Weapp",
      imageUrl: "https://file.iviewui.com/iview-weapp-logo.png"
    };
  },
  handleOpen1: function handleOpen1() {
    this.setData({
      visible1: true
    });
  },
  handleCancel1: function handleCancel1() {
    this.setData({
      visible1: false
    });
  },
  handleOpen2: function handleOpen2() {
    this.setData({
      visible2: true
    });
  },
  handleCancel2: function handleCancel2() {
    this.setData({
      visible2: false
    });
  },
  handleClickItem1: function handleClickItem1(_ref) {
    var detail = _ref.detail;
    var index = detail.index + 1;
    $Message({
      content: "点击了选项" + index
    });
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
        actions2: action
      });

      $Message({
        content: "删除成功！",
        type: "success"
      });
    }, 2000);
  }
});