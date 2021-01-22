"use strict";

Component({
  externalClasses: ["i-class"],
  properties: {
    scrollTop: {
      type: Number,
      observer: function observer(val) {
        this._updateScrollTopChange();
      }
    }
  },
  relations: {
    "../sticky-item/index": {
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
    timer: null,
    itemLength: 0
  },
  methods: {
    _updateScrollTopChange: function _updateScrollTopChange() {
      var _this = this;

      var stickies = this.getRelationNodes("../sticky-item/index");

      if (stickies.length > 0) {
        stickies.forEach(function (item) {
          if (item) {
            item.updateScrollTopChange(_this.data.scrollTop);
          }
        });
      }
    },
    _updateDataChange: function _updateDataChange() {
      var stickies = this.getRelationNodes("../sticky-item/index");

      if (stickies.length > 0) {
        if (this.data.timer) {
          clearTimeout(this.data.timer);
          this.setData({
            timer: null
          });
        }

        this.data.timer = setTimeout(function () {
          stickies.forEach(function (item, index) {
            if (item) {
              item.updateDataChange(index);
            }
          });
        }, 0);
        this.setData({
          timer: this.data.timer
        });
      }
    }
  }
});