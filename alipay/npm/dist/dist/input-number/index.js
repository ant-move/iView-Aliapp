"use strict";

function addNum(num1, num2) {
  var sq1, sq2, m;

  try {
    sq1 = num1.toString().split(".")[1].length;
  } catch (e) {
    sq1 = 0;
  }

  try {
    sq2 = num2.toString().split(".")[1].length;
  } catch (e) {
    sq2 = 0;
  }

  m = Math.pow(10, Math.max(sq1, sq2));
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
}

Component({
  externalClasses: ["i-class"],
  properties: {
    // small || default || large
    size: String,
    value: {
      type: Number,
      value: 1
    },
    min: {
      type: Number,
      value: -Infinity
    },
    max: {
      type: Number,
      value: Infinity
    },
    step: {
      type: Number,
      value: 1
    }
  },
  methods: {
    handleChangeStep: function handleChangeStep(e, type) {
      var _e$currentTarget$data = e.currentTarget.dataset,
          dataset = _e$currentTarget$data === void 0 ? {} : _e$currentTarget$data;
      var disabled = dataset.disabled;
      var step = this.data.step;
      var value = this.data.value;
      if (disabled) return null;

      if (type === "minus") {
        value = addNum(value, -step);
      } else if (type === "plus") {
        value = addNum(value, step);
      }

      if (value < this.data.min || value > this.data.max) return null;
      this.handleEmit(value, type);
    },
    handleMinus: function handleMinus(e) {
      this.handleChangeStep(e, "minus");
    },
    handlePlus: function handlePlus(e) {
      this.handleChangeStep(e, "plus");
    },
    handleBlur: function handleBlur(e) {
      var _this = this;

      var value = e.detail.value;
      var _this$data = this.data,
          min = _this$data.min,
          max = _this$data.max;

      if (!value) {
        setTimeout(function () {
          _this.handleEmit(value);
        }, 16);
        return;
      }

      value = +value;

      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }

      this.handleEmit(value);
    },
    handleEmit: function handleEmit(value, type) {
      var data = {
        value: value
      };
      if (type) data.type = type;
      this.triggerEvent("change", data);
    },
    antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
    }
  }
});