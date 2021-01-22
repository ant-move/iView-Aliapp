var antmove_export = {};
var prefixCls = 'i-rate';
antmove_export = {
  getCurrent: function (value, index) {
    if (index < value) {
      return prefixCls + '-current';
    }
  }
};
export default antmove_export;