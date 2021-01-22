"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var _my = require("../../__antmove/api/index.js")(my);

var wx = _my;

var warn = function warn(msg, getValue) {
  console.warn(msg);
  console.log("接受到的值为：", getValue);
};

Component({
  externalClasses: ["i-class"],
  options: {
    multipleSlots: true
  },
  relations: {
    "../cell-group/index": {
      type: "parent"
    }
  },
  properties: {
    // 左侧标题
    title: {
      type: String
    },
    // 标题下方的描述信息
    label: {
      type: String
    },
    // 右侧内容
    value: {
      type: String
    },
    // 只有点击 footer 区域才触发 tab 事件
    onlyTapFooter: {
      type: Boolean
    },
    // 是否展示右侧箭头并开启尝试以 url 跳转
    isLink: {
      type: null,
      value: ""
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      value: "navigateTo"
    },
    url: {
      type: String,
      value: ""
    }
  },
  data: {
    isLastCell: true
  },
  methods: {
    navigateTo: function navigateTo() {
      var url = this.data.url;

      var type = _typeof(this.data.isLink);

      this.triggerEvent("click", {});
      if (!this.data.isLink || !url || url === "true" || url === "false") return;

      if (type !== "boolean" && type !== "string") {
        warn("isLink 属性值必须是一个字符串或布尔值", this.data.isLink);
        return;
      }

      if (["navigateTo", "redirectTo", "switchTab", "reLaunch"].indexOf(this.data.linkType) === -1) {
        warn("linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch", this.data.linkType);
        return;
      }

      wx[this.data.linkType].call(wx, {
        url: url
      });
    },
    handleTap: function handleTap() {
      if (!this.data.onlyTapFooter) {
        this.navigateTo();
      }
    },
    updateIsLastCell: function updateIsLastCell(isLastCell) {
      this.setData({
        isLastCell: isLastCell
      });
    },
    antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
    }
  }
});