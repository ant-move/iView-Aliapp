"use strict";

var _city = require("./city");

var _my = require("../../__antmove/api/index.js")(my);

var wx = _my;
/*
 * @Author: your name
 * @Date: 2021-01-08 15:25:33
 * @LastEditTime: 2021-01-19 16:41:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Iview-Aliapp/wx/examples/pages/index-list/index.js
 */

Page({
  data: {
    cities: []
  },
  onChange: function onChange(event) {
    console.log(event.detail, "click right menu callback data");
  },
  onReady: function onReady() {
    var storeCity = new Array(26);
    var words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    words.forEach(function (item, index) {
      storeCity[index] = {
        key: item,
        list: []
      };
    });

    _city.cities.forEach(function (item) {
      var firstName = item.pinyin.substring(0, 1);
      var index = words.indexOf(firstName);
      storeCity[index].list.push({
        name: item.name,
        key: firstName
      });
    });

    this.data.cities = storeCity;
    this.setData({
      cities: this.data.cities
    });
  }
});