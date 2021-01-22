"use strict";

Page({
  data: {
    switch1: true
  },
  onChange: function onChange(event) {
    var detail = event.detail;
    this.setData({
      switch1: detail.value
    });
  }
});