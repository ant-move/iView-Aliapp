var antmove_export = {};
antmove_export = {
  setScrollStyle: function (height) {
    var units = ['%', 'px', 'rem', 'rpx', 'em', 'rem'];
    var hasUnits = false;

    for (var i = 0; i < units.length; i++) {
      var u = units[i];

      if (height.indexOf(u) > -1) {
        hasUnits = true;
        break;
      }
    }

    return 'height:' + (hasUnits ? height : height + 'px');
  },
  setScrollMaxHeight: function (height) {
    var max = '';
    max = height ? 'max-height:' + height : '';
    return max;
  }
};
export default antmove_export;