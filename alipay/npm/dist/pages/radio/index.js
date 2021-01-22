"use strict";

Page({
  data: {
    fruit: [{
      id: 1,
      name: "香蕉"
    }, {
      id: 2,
      name: "苹果"
    }, {
      id: 3,
      name: "西瓜"
    }, {
      id: 4,
      name: "葡萄"
    }],
    current: "苹果",
    position: "left",
    animal: "熊猫",
    checked: false,
    disabled: false
  },
  handleFruitChange: function handleFruitChange(_ref) {
    var _ref$detail = _ref.detail,
        detail = _ref$detail === void 0 ? {} : _ref$detail;
    this.setData({
      current: detail.value
    });
  },
  handleClick: function handleClick() {
    this.setData({
      position: this.data.position.indexOf("left") !== -1 ? "right" : "left"
    });
  },
  handleDisabled: function handleDisabled() {
    this.setData({
      disabled: !this.data.disabled
    });
  },
  handleAnimalChange: function handleAnimalChange(_ref2) {
    var _ref2$detail = _ref2.detail,
        detail = _ref2$detail === void 0 ? {} : _ref2$detail;
    this.setData({
      checked: detail.current
    });
  }
});