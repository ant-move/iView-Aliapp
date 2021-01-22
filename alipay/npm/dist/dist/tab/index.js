"use strict";

Component({
  externalClasses: ["i-class"],
  relations: {
    "../tabs/index": {
      type: "parent"
    }
  },
  properties: {
    ikey: {
      type: String,
      value: ""
    },
    title: {
      type: String,
      value: ""
    },
    dot: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 0
    }
  },
  data: {
    current: false,
    currentColor: "",
    scroll: false
  },
  methods: {
    changeCurrent: function changeCurrent(current) {
      this.setData({
        current: current
      });
    },
    changeCurrentColor: function changeCurrentColor(currentColor) {
      this.setData({
        currentColor: currentColor
      });
    },
    changeScroll: function changeScroll(scroll, _style) {
      if (_style) {
        this.setData({
          scroll: scroll,
          style: _style
        });
      } else {
        this.setData({
          scroll: scroll
        });
      }
    },
    handleClickItem: function handleClickItem() {
      var parent = this.getRelationNodes("../tabs/index")[0];
      parent.emitEvent(this.data.ikey);
    },
    antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
    }
  }
});