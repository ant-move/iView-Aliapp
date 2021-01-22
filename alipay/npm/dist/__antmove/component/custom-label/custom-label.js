"use strict";

var processDataSet = require('../utils/processDataSet');

Component({
  props: {
    "for": ''
  },
  methods: {
    tapHandler: function tapHandler(e) {
      var tapEvent = processDataSet(e, this.props);
      this.props.onTap && this.props.onTap(tapEvent);
    },
    catchtapHandler: function catchtapHandler(e) {
      var tapEvent = processDataSet(e, this.props);
      this.props.catchTap && this.props.catchTap(tapEvent);
    }
  }
});