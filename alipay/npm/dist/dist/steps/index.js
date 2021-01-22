"use strict";

Component({
  externalClasses: ["i-class"],
  properties: {
    current: {
      type: Number,
      value: -1,
      observer: "_updateDataChange"
    },
    status: {
      type: String,
      //wait、process、finish、error
      value: ""
    },
    direction: {
      type: String,
      //value has horizontal or vertical
      value: "horizontal"
    }
  },
  relations: {
    "../step/index": {
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
  methods: {
    _updateDataChange: function _updateDataChange() {
      var _this = this;

      var steps = this.getRelationNodes("../step/index");
      var len = steps.length;

      if (len > 0) {
        steps.forEach(function (step, index) {
          step.updateDataChange({
            len: len,
            index: index,
            current: _this.data.current,
            direction: _this.data.direction
          });
        });
      }
    }
  }
});