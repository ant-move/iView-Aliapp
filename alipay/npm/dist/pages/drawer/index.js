"use strict";

Page({
  data: {
    showLeft1: false,
    showLeft2: false,
    showRight1: false,
    showRigh2: false
  },
  toggleLeft1: function toggleLeft1() {
    this.setData({
      showLeft1: !this.data.showLeft1
    });
  },
  toggleLeft2: function toggleLeft2() {
    this.setData({
      showLeft2: !this.data.showLeft2
    });
  },
  toggleRight1: function toggleRight1() {
    this.setData({
      showRight1: !this.data.showRight1
    });
  },
  toggleRight2: function toggleRight2() {
    this.setData({
      showRight2: !this.data.showRight2
    });
  }
});