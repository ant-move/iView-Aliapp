"use strict";

var _my = require("../../__antmove/api/index.js")(my);

var wx = _my;
/*
 * @Author: your name
 * @Date: 2021-01-08 15:23:24
 * @LastEditTime: 2021-01-11 19:17:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /Iview-Aliapp/wx/examples/dist/icon/index.js
 */

Component({
  externalClasses: ["i-class"],
  properties: {
    type: {
      type: String,
      value: ""
    },
    custom: {
      type: String,
      value: ""
    },
    size: {
      type: Number,
      value: 14
    },
    color: {
      type: String,
      value: ""
    }
  },
  methods: {
    iconHandler: function iconHandler() {
      this.triggerEvent("click");
    },
    antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
    }
  }
});