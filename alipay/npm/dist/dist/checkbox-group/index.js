"use strict";

Component({
  externalClasses: ["i-class"],
  relations: {
    "../checkbox/index": {
      type: "child",
      linked: function linked() {
        this.changeCurrent();
      },
      linkChanged: function linkChanged() {
        this.changeCurrent();
      },
      unlinked: function unlinked() {
        this.changeCurrent();
      }
    }
  },
  properties: {
    current: {
      type: Array,
      value: [],
      observer: "changeCurrent"
    }
  },
  methods: {
    changeCurrent: function changeCurrent() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;
      var items = this.getRelationNodes("../checkbox/index");
      var len = items.length;

      if (len > 0) {
        items.forEach(function (item) {
          item.changeCurrent(val.indexOf(item.data.value) !== -1);
        });
      }
    },
    emitEvent: function emitEvent(current) {
      this.triggerEvent("change", current);
    }
  }
});