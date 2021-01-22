"use strict";

Page({
  data: {
    isAdd: false
  },
  handleAdd: function handleAdd() {
    this.setData({
      isAdd: !this.data.isAdd
    });
  }
});