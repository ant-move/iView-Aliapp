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
    visible2: false,
    visible3: false,
    visible4: false,
    visible5: false,
    actions3: [{
      name: "现金支付",
      color: "#2d8cf0"
    }, {
      name: "微信支付",
      color: "#19be6b"
    }, {
      name: "取消"
    }],
    actions4: [{
      name: "按钮1"
    }, {
      name: "按钮2",
      color: "#ff9900"
    }, {
      name: "按钮3",
      icon: "search"
    }],
    actions5: [{
      name: "取消"
    }, {
      name: "删除",
      color: "#ed3f14",
      loading: false
    }]
  },
  handleOpen1: function handleOpen1() {
    this.setData({
      visible1: true
    });
  },
  handleClose1: function handleClose1() {
    this.setData({
      visible1: false
    });
  },
  handleOpen2: function handleOpen2() {
    this.setData({
      visible2: true
    });
  },
  handleClose2: function handleClose2() {
    this.setData({
      visible2: false
    });
  },
  handleOpen3: function handleOpen3() {
    this.setData({
      visible3: true
    });
  },
  handleClick3: function handleClick3(_ref) {
    var detail = _ref.detail;
    var index = detail.index;

    if (index === 0) {
      $Message({
        content: "点击了现金支付"
      });
    } else if (index === 1) {
      $Message({
        content: "点击了微信支付"
      });
    }

    this.setData({
      visible3: false
    });
  },
  handleOpen4: function handleOpen4() {
    this.setData({
      visible4: true
    });
  },
  handleClick4: function handleClick4() {
    this.setData({
      visible4: false
    });
  },
  handleOpen5: function handleOpen5() {
    this.setData({
      visible5: true
    });
  },
  handleClick5: function handleClick5(_ref2) {
    var _this = this;

    var detail = _ref2.detail;

    if (detail.index === 0) {
      this.setData({
        visible5: false
      });
    } else {
      var action = _toConsumableArray(this.data.actions5);

      action[1].loading = true;
      this.setData({
        actions5: action
      });
      setTimeout(function () {
        action[1].loading = false;

        _this.setData({
          visible5: false,
          actions5: action
        });

        $Message({
          content: "删除成功！",
          type: "success"
        });
      }, 2000);
    }
  }
});