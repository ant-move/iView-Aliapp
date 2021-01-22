"use strict";

var _my = require("../../__antmove/api/index.js")(my);

var wx = _my;
var VALID_MODE = ["closeable"];
var FONT_COLOR = "#f60";
var BG_COLOR = "#fff7cc";
Component({
  externalClasses: ["i-class"],
  properties: {
    closable: {
      type: Boolean,
      value: false
    },
    icon: {
      type: String,
      value: ""
    },
    loop: {
      type: Boolean,
      value: false
    },
    // 背景颜色
    backgroundcolor: {
      type: String,
      value: "#fefcec"
    },
    // 字体及图标颜色
    color: {
      type: String,
      value: "#f76a24"
    },
    // 滚动速度
    speed: {
      type: Number,
      value: 1000
    }
  },
  data: {
    show: true,
    wrapWidth: 0,
    width: 0,
    duration: 0,
    animation: null,
    timer: null
  },
  detached: function detached() {
    this.destroyTimer();
  },
  ready: function ready() {
    if (this.data.loop) {
      this.initAnimation();
    }
  },
  methods: {
    initAnimation: function initAnimation() {
      var _this = this;

      wx.createSelectorQuery()["in"](this).select(".i-noticebar-content-wrap").boundingClientRect(function (wrapRect) {
        wx.createSelectorQuery()["in"](_this).select(".i-noticebar-content").boundingClientRect(function (rect) {
          var duration = rect.width / 40 * _this.data.speed;
          var animation = wx.createAnimation({
            duration: duration,
            timingFunction: "linear"
          });

          _this.setData({
            wrapWidth: wrapRect.width,
            width: rect.width,
            duration: duration,
            animation: animation
          }, function () {
            _this.startAnimation();
          });
        }).exec();
      }).exec();
    },
    startAnimation: function startAnimation() {
      var _this2 = this; //reset


      if (this.data.animation.option.transition.duration !== 0) {
        this.data.animation.option.transition.duration = 0;
        var resetAnimation = this.data.animation.translateX(this.data.wrapWidth).step();
        this.setData({
          animationData: resetAnimation["export"]()
        });
      }

      this.data.animation.option.transition.duration = this.data.duration;
      var animationData = this.data.animation.translateX(-this.data.width).step();
      setTimeout(function () {
        _this2.setData({
          animationData: animationData["export"]()
        });
      }, 100);
      var timer = setTimeout(function () {
        _this2.startAnimation();
      }, this.data.duration);
      this.setData({
        timer: timer
      });
    },
    destroyTimer: function destroyTimer() {
      if (this.data.timer) {
        clearTimeout(this.data.timer);
      }
    },
    handleClose: function handleClose(e) {
      this.destroyTimer();
      this.setData({
        show: false,
        timer: null
      });
      this.triggerEvent("close", e);
    }
  }
});