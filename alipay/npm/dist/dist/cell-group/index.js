"use strict";

Component({
  externalClasses: ["i-class"],
  relations: {
    "../cell/index": {
      type: "child",
      linked: function linked() {
        this._updateIsLastCell();
      },
      linkChanged: function linkChanged() {
        this._updateIsLastCell();
      },
      unlinked: function unlinked() {
        this._updateIsLastCell();
      }
    }
  },
  methods: {
    _updateIsLastCell: function _updateIsLastCell() {
      var cells = this.getRelationNodes("../cell/index");
      var len = cells.length;

      if (len > 0) {
        var lastIndex = len - 1;
        cells.forEach(function (cell, index) {
          cell.updateIsLastCell(index === lastIndex);
        });
      }
    }
  }
});