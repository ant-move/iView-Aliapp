"use strict";

Component({
  externalClasses: ["i-class"],
  relations: {
    "../collapse-item/index": {
      type: "child"
    }
  },
  properties: {
    name: String,
    accordion: Boolean
  },
  methods: {
    clickfn: function clickfn(e) {
      var params = e.detail;
      var allList = this.getRelationNodes("../collapse-item/index");
      allList.forEach(function (item) {
        if (params.name === item.data.name) {
          item.setData({
            showContent: "i-collapse-item-show-content"
          });
        } else {
          item.setData({
            showContent: ""
          });
        }
      });
    }
  }
});