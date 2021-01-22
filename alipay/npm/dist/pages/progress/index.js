"use strict";

Page({
  data: {
    percent: 0,
    status: "normal"
  },
  handleAdd: function handleAdd() {
    if (this.data.percent === 100) return;
    this.setData({
      percent: this.data.percent + 10
    });

    if (this.data.percent === 100) {
      this.setData({
        status: "success"
      });
    }
  },
  handleReduce: function handleReduce() {
    if (this.data.percent === 0) return;
    this.setData({
      percent: this.data.percent - 10,
      status: "normal"
    });
  }
});