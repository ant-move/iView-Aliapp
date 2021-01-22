"use strict";

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

Page({
  data: {
    oneChecked: false,
    tags: [{
      name: "标签一",
      checked: false,
      color: "default"
    }, {
      name: "标签二",
      checked: false,
      color: "red"
    }, {
      name: "标签三",
      checked: true,
      color: "blue"
    }, {
      name: "标签4️",
      checked: true,
      color: "green"
    }]
  },
  oneChange: function oneChange(event) {
    this.setData({
      oneChecked: event.detail.checked
    });
  },
  onChange: function onChange(event) {
    var detail = event.detail;
    this.setData(_defineProperty({}, "tags[" + event.detail.name + "].checked", detail.checked));
  }
});