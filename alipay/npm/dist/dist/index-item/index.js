"use strict";

var _my = require("../../__antmove/api/index.js")(my);

var wx = _my;
Component({
  externalClasses: ["i-class"],
  properties: {
    name: {
      type: String,
      value: ""
    }
  },
  relations: {
    "../index/index": {
      type: "parent"
    }
  },
  data: {
    top: 0,
    height: 0,
    currentName: ""
  },
  methods: {
    updateDataChange: function updateDataChange() {
      var _this = this;

      var className = ".i-index-item";
      var query = wx.createSelectorQuery()["in"](this);
      query.select(className).boundingClientRect(function (res) {
        _this.setData({
          top: res.top,
          height: res.height,
          currentName: _this.data.name
        });
      }).exec();
    }
  }
});