"use strict";

var _my = require("../../__antmove/api/index.js")(my);

var wx = _my;
Component({
  externalClasses: ["i-class"],
  properties: {
    height: {
      type: String,
      value: "300"
    },
    itemHeight: {
      type: Number,
      value: 18
    }
  },
  relations: {
    "../index-item/index": {
      type: "child",
      linked: function linked() {
        this._updateDataChange();
      },
      linkChanged: function linkChanged() {
        this._updateDataChange();
      },
      unlinked: function unlinked() {
        this._updateDataChange();
      }
    }
  },
  data: {
    maxHeight: "",
    scrollTop: 0,
    fixedData: [],
    current: 0,
    timer: null,
    startTop: 0,
    itemLength: 0,
    currentName: "",
    isTouches: false
  },
  created: function created() {
    var info = my.getSystemInfoSync();

    if (info) {
      this.setData({
        maxHeight: info.windowHeight
      });
    }
  },
  methods: {
    loop: function loop() {},
    _updateDataChange: function _updateDataChange() {
      var _this = this;

      var indexItems = this.getRelationNodes("../index-item/index");
      var len = indexItems.length;
      var fixedData = this.data.fixedData;
      /*
       * 使用函数节流限制重复去设置数组内容进而限制多次重复渲染
       * 暂时没有研究微信在渲染的时候是否会进行函数节流
       */

      if (len > 0) {
        if (this.data.timer) {
          clearTimeout(this.data.timer);
          this.setData({
            timer: null
          });
        }

        this.data.timer = setTimeout(function () {
          var data = [];
          indexItems.forEach(function (item) {
            if (item.data.name && fixedData.indexOf(item.data.name) === -1) {
              data.push(item.data.name);
              item.updateDataChange();
            }
          });

          _this.setData({
            fixedData: data,
            itemLength: indexItems.length
          }); //组件加载完成之后重新设置顶部高度


          _this.setTouchStartVal();
        }, 0);
        this.setData({
          timer: this.data.timer
        });
      }
    },
    handlerScroll: function handlerScroll(event) {
      var _this2 = this;

      var detail = event.detail;
      var scrollTop = detail.scrollTop;
      var indexItems = this.getRelationNodes("../index-item/index");
      indexItems.forEach(function (item, index) {
        var data = item.data;
        var offset = data.top + data.height;

        if (scrollTop < offset && scrollTop >= data.top) {
          _this2.setData({
            current: index,
            currentName: data.currentName
          });
        }
      });
    },
    getCurrentItem: function getCurrentItem(index) {
      var indexItems = this.getRelationNodes("../index-item/index");
      var result = {};
      result = indexItems[index].data;
      result.total = indexItems.length;
      return result;
    },
    triggerCallback: function triggerCallback(options) {
      this.triggerEvent("change", options);
    },
    handlerFixedTap: function handlerFixedTap(event) {
      var eindex = event.currentTarget.dataset.index;
      var item = this.getCurrentItem(eindex);
      this.setData({
        scrollTop: item.top,
        currentName: item.currentName,
        isTouches: true
      });
      this.triggerCallback({
        index: eindex,
        current: item.currentName
      });
      Promise.resolve().then(this.setData({
        isTouches: false
      }));
    },
    handlerTouchMove: function handlerTouchMove(event) {
      var data = this.data;
      var touches = event.touches[0] || {};
      var pageY = touches.pageY;
      var rest = pageY - data.startTop;
      var index = Math.floor(rest / data.itemHeight);
      index = index >= data.itemLength ? data.itemLength - 1 : index <= 0 ? 0 : index;
      var movePosition = this.getCurrentItem(index);
      /*
       * 当touch选中的元素和当前currentName不相等的时候才震动一下
       * 微信震动事件
       */

      if (movePosition.name !== this.data.currentName) {
        wx.vibrateShort();
      }

      this.setData({
        scrollTop: movePosition.top,
        currentName: movePosition.name,
        isTouches: true
      });
      this.triggerCallback({
        index: index,
        current: movePosition.name
      });
    },
    handlerTouchEnd: function handlerTouchEnd() {
      this.setData({
        isTouches: false
      });
    },
    setTouchStartVal: function setTouchStartVal() {
      var _this3 = this;

      var className = ".i-index-fixed";
      var query = wx.createSelectorQuery()["in"](this);
      query.select(className).boundingClientRect(function (res) {
        _this3.setData({
          startTop: res.top
        });
      }).exec();
    },
    antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
    }
  }
});