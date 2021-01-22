"use strict";

Component({
  externalClasses: ["i-class"],
  relations: {
    "../tab-bar/index": {
      type: "parent"
    }
  },
  properties: {
    icon: {
      type: String,
      value: ""
    },
    currentIcon: {
      type: String,
      value: ""
    },
    img: {
      type: String,
      value: ""
    },
    currentImg: {
      type: String,
      value: ""
    },
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
    currentColor: ""
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
    handleClickItem: function handleClickItem() {
      var parent = this.getRelationNodes("../tab-bar/index")[0];
      parent.emitEvent(this.data.ikey);
    }
  }
});