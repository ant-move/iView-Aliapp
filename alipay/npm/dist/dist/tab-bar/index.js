"use strict";

var _my = require("../../__antmove/api/index.js")(my);

var wx = _my;
/*
 * @Author: your name
 * @Date: 2021-01-08 15:23:24
 * @LastEditTime: 2021-01-15 17:17:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Iview-Aliapp/wx/examples/dist/tab-bar/index.js
 */

Component({
  externalClasses: ["i-class"],
  relations: {
    "../tab-bar-item/index": {
      type: "child",
      linked: function linked() {
        this.changeCurrent();
      },
      linkChanged: function linkChanged() {
        this.changeCurrent();
      },
      unlinked: function unlinked() {
        this.changeCurrent();
      }
    }
  },
  properties: {
    current: {
      type: String,
      value: "",
      observer: "changeCurrent"
    },
    color: {
      type: String,
      value: ""
    },
    fixed: {
      type: Boolean,
      value: false
    }
  },
  data: {
    list: []
  },
  methods: {
    changeCurrent: function changeCurrent() {
      var _this = this;

      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;
      var items = this.getRelationNodes("../tab-bar-item/index");
      var len = items.length;

      if (len > 0) {
        var list = [];
        items.forEach(function (item) {
          item.changeCurrent(item.data.ikey === val);
          item.changeCurrentColor(_this.data.color);
          list.push({
            ikey: item.data.ikey
          });
        });
        this.setData({
          list: list
        });
      }
    },
    emitEvent: function emitEvent(key) {
      this.triggerEvent("change", {
        key: key
      });
    },
    handleClickItem: function handleClickItem(e) {
      var key = e.currentTarget.dataset.ikey;
      this.emitEvent(key);
    },
    antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
    }
  }
});