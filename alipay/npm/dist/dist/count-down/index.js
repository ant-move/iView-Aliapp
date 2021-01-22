"use strict";

Component({
  properties: {
    target: Number,
    showDay: Boolean,
    callback: String,
    format: Array,
    clearTimer: Boolean
  },
  externalClasses: ["countdown-class"],
  data: {
    time: "",
    resultFormat: [],
    changeFormat: false
  },
  ready: function ready() {
    this.getFormat();
  },
  methods: {
    getFormat: function getFormat() {
      var obj = {
        resultFormat: [],
        changeFormat: false
      };
      var data = this.data;
      var len = data.format.length;
      if (!data.showDay) obj.resultFormat.push("");

      if (len >= 3) {
        for (var i = 0; i < len; i++) {
          if (data.resultFormat.length >= 4) break;

          if (data.format[i]) {
            obj.resultFormat.push(data.format[i].toString());
          }
        }

        if (obj.resultFormat.length >= 4) obj.changeFormat = true;
        this.setData({
          resultFormat: obj.resultFormat,
          changeFormat: obj.changeFormat
        });
      }

      this.getLastTime();
    },
    init: function init() {
      var self = this;
      setTimeout(function () {
        self.getLastTime.call(self);
      }, 1000);
    },
    getLastTime: function getLastTime() {
      var data = this.data;
      var gapTime = Math.ceil((data.target - new Date().getTime()) / 1000);
      var result = "";
      var time = "00:00:00";
      var day = "00";
      var format = data.resultFormat;

      if (gapTime > 0) {
        day = this.formatNum(parseInt(gapTime / 86400));
        var lastTime = gapTime % 86400;
        var hour = this.formatNum(parseInt(lastTime / 3600));
        lastTime = lastTime % 3600;
        var minute = this.formatNum(parseInt(lastTime / 60));
        var second = this.formatNum(lastTime % 60);
        if (data.changeFormat) time = "".concat(hour).concat(format[1]).concat(minute).concat(format[2]).concat(second).concat(format[3]);else time = "".concat(hour, ":").concat(minute, ":").concat(second);
        if (!data.clearTimer) this.init.call(this);
      } else {
        this.endfn();
      }

      if (data.showDay) {
        if (data.changeFormat) {
          result = "".concat(day).concat(format[0], " ").concat(time);
        } else {
          result = "".concat(day, "d ").concat(time);
        }
      } else {
        result = time;
      }

      this.setData({
        time: result
      });
    },
    formatNum: function formatNum(num) {
      return num > 9 ? num : "0".concat(num);
    },
    endfn: function endfn() {
      this.triggerEvent("callback", {});
    }
  }
});