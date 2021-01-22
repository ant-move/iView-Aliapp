"use strict";

Component({
  externalClasses: ["i-class"],
  relations: {
    "../grid-item/index": {
      type: "child",
      linked: function linked() {
        this.setGridItemWidth();
      },
      linkChanged: function linkChanged() {
        this.setGridItemWidth();
      },
      unlinked: function unlinked() {
        this.setGridItemWidth();
      }
    }
  },
  methods: {
    setGridItemWidth: function setGridItemWidth() {
      var nodes = this.getRelationNodes("../grid-item/index"); // const len = nodes.length;
      // if (len < 3) {
      //     nodes.forEach(item => {
      //         item.setData({
      //             'width': '33.33%'
      //         });
      //     });
      // } else {
      //     const width = 100 / nodes.length;
      //     nodes.forEach(item => {
      //         item.setData({
      //             'width': width + '%'
      //         });
      //     });
      // }

      var width = 100 / nodes.length;
      nodes.forEach(function (item) {
        item.setData({
          width: width + "%"
        });
      });
    }
  },
  ready: function ready() {
    this.setGridItemWidth();
  }
});