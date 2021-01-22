"use strict";

var _my = require("../../__antmove/api/index.js")(my);

var wx = _my;
/*
 * @Author: your name
 * @Date: 2021-01-08 15:23:24
 * @LastEditTime: 2021-01-18 11:30:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Iview-Aliapp/wx/examples/dist/tabs/index.js
 */

Component({
  externalClasses: ["i-class"],
  relations: {
    "../tab/index": {
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
    scroll: {
      type: Boolean,
      value: false
    },
    fixed: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    changeCurrent: function changeCurrent() {
      var _this = this;

      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;
      var items = this.getRelationNodes("../tab/index");
      var len = items.length;

      if (len > 0) {
        items.forEach(function (item) {
          var _style = "";

          if (_this.data.scroll) {
            _style = "display: inline-block;";
          }

          item.changeScroll(_this.data.scroll, _style);
          item.changeCurrent(item.data.ikey === val);
          item.changeCurrentColor(_this.data.color);
        });
      }
    },
    emitEvent: function emitEvent(key) {
      this.triggerEvent("change", {
        ikey: key
      });
    }
  }
});