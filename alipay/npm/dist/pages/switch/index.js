"use strict";

Page({
  data: {
    switch1: false
  },
  onChange: function onChange(event) {
    var detail = event.detail;
    this.setData({
      switch1: detail.value
    });
  }
});