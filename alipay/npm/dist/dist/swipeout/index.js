"use strict";

var _my = require("../../__antmove/api/index.js")(my);

var wx = _my;
/*
 * touch事件判断方式
 * https://github.com/madrobby/zepto/blob/master/src/touch.js#files
 */

function swipeDirection(x1, x2, y1, y2) {
  return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? "Left" : "Right" : y1 - y2 > 0 ? "Up" : "Down";
}

Component({
  externalClasses: ["i-class"],
  properties: {
    actions: {
      value: [],
      type: Array,
      observer: "_updateButtonSize"
    },
    unclosable: {
      value: false,
      type: Boolean
    },
    toggle: {
      value: false,
      type: Boolean,
      observer: "closeButtonGroup"
    },
    operateWidth: {
      type: Number,
      value: 160
    }
  },
  options: {
    // 在组件定义时的选项中启用多slot支持
    multipleSlots: true
  },
  data: {
    //touch start position
    tStart: {
      pageX: 0,
      pageY: 0
    },
    //限制滑动距离
    limitMove: 0,
    //element move position
    position: {
      pageX: 0,
      pageY: 0
    }
  },
  methods: {
    //阻止事件冒泡
    loop: function loop() {},
    _updateButtonSize: function _updateButtonSize() {
      var actions = this.data.actions;

      if (actions.length > 0) {
        var query = wx.createSelectorQuery()["in"](this);
        var limitMovePosition = 0;
        actions.forEach(function (item) {
          limitMovePosition += item.width || 0;
        });
        this.data.limitMove = limitMovePosition;
        /*
         * 动态获取每个传进值的按钮尺寸不能正确获取，在安卓上少了6px
         * 暂时实现需要在actions里面传递宽度
         * 需要后期调研
         */
        //query.selectAll('.i-swipeout-button-right-item').boundingClientRect((rects)=>{
        //     if( rects ){
        //         console.log(rects,1111111)
        //         rects.forEach(item => {
        //             limitMovePosition += item.width;
        //         });
        //         this.data.limitMove = limitMovePosition;
        //         console.log(limitMovePosition,111111111)
        //     }
        // }).exec()
      } else {
        this.data.limitMove = this.data.operateWidth;
      }
    },
    handlerTouchstart: function handlerTouchstart(event) {
      var touches = event.touches ? event.touches[0] : {};
      var tStart = this.data.tStart;

      if (touches) {
        for (var i in tStart) {
          if (touches[i]) {
            tStart[i] = touches[i];
          }
        }
      }
    },
    swipper: function swipper(touches) {
      var data = this.data;
      var start = data.tStart;
      var spacing = {
        pageX: touches.pageX - start.pageX,
        pageY: touches.pageY - start.pageY
      };

      if (data.limitMove < Math.abs(spacing.pageX)) {
        spacing.pageX = -data.limitMove;
      }

      this.setData({
        position: spacing
      });
    },
    handlerTouchmove: function handlerTouchmove(event) {
      var start = this.data.tStart;
      var touches = event.touches ? event.touches[0] : {};

      if (touches) {
        var direction = swipeDirection(start.pageX, touches.pageX, start.pageY, touches.pageY);

        if (direction === "Left") {
          this.swipper(touches);
        }
      }
    },
    handlerTouchend: function handlerTouchend(event) {
      var start = this.data.tStart;
      var touches = event.changedTouches ? event.changedTouches[0] : {};

      if (touches) {
        var direction = swipeDirection(start.pageX, touches.pageX, start.pageY, touches.pageY);
        var spacing = {
          pageX: touches.pageX - start.pageX,
          pageY: touches.pageY - start.pageY
        };

        if (Math.abs(spacing.pageX) >= 40 && direction === "Left") {
          spacing.pageX = spacing.pageX < 0 ? -this.data.limitMove : this.data.limitMove;
        } else {
          spacing.pageX = 0;
        }

        this.setData({
          position: spacing
        });
      }
    },
    handlerButton: function handlerButton(event) {
      if (!this.data.unclosable) {
        this.closeButtonGroup();
      }

      var dataset = event.currentTarget.dataset;
      this.triggerEvent("change", {
        index: dataset.index
      });
    },
    closeButtonGroup: function closeButtonGroup() {
      this.setData({
        position: {
          pageX: 0,
          pageY: 0
        }
      });
    },
    //控制自定义组件
    handlerParentButton: function handlerParentButton(event) {
      if (!this.data.unclosable) {
        this.closeButtonGroup();
      }
    },
    antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
    }
  },
  ready: function ready() {
    this._updateButtonSize();
  }
});