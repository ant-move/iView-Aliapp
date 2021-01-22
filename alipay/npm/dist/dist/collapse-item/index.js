"use strict";

Component({
  externalClasses: ["i-class-content", "i-class-title", "i-class"],
  relations: {
    "../collapse/index": {
      type: "parent",
      linked: function linked(target) {
        var options = {
          accordion: target.data.accordion
        };
        var parent = target || {};

        this.icollapse = parent.clickfn || function () {};

        if (target.data.name === this.data.name) {
          options.showContent = "i-collapse-item-show-content";
        }

        this.setData(options);
      }
    }
  },
  properties: {
    title: String,
    name: String
  },
  data: {
    showContent: "",
    accordion: false
  },
  options: {
    multipleSlots: true
  },
  methods: {
    trigger: function trigger(e) {
      var data = this.data;

      if (data.accordion) {
        var _evnet = {
          detail: {
            name: data.name
          }
        };
        this.icollapse(_evnet);
        this.triggerEvent("collapse", {
          name: data.name
        }, {
          composed: true,
          bubbles: true
        });
      } else {
        this.setData({
          showContent: data.showContent ? "" : "i-collapse-item-show-content"
        });
      }
    },
    antmoveAction: function antmoveAction() {//执行时动态赋值，请勿删除
    }
  }
});