"use strict";

var _my = require("../../__antmove/api/index.js")(my);

var wx = _my;
Component({
  externalClasses: ["i-class"],
  options: {
    multipleSlots: true
  },
  relations: {
    "../sticky/index": {
      type: "parent"
    }
  },
  data: {
    top: 0,
    height: 0,
    isFixed: false,
    index: -1
  },
  methods: {
    updateScrollTopChange: function updateScrollTopChange(scrollTop) {
      var data = this.data;
      var top = data.top;
      var height = data.height;
      this.setData({
        isFixed: scrollTop >= top && scrollTop < top + height ? true : false
      });
    },
    updateDataChange: function updateDataChange(index) {
      var _this = this;

      var className = ".i-sticky-item";
      var query = wx.createSelectorQuery()["in"](this);
      query.select(className).boundingClientRect(function (res) {
        if (res) {
          _this.setData({
            top: res.top,
            height: res.height,
            index: index
          });
        }
      }).exec();
    }
  }
});