var antmove_export = {};
var sizes = ['large', 'default'];
var prefixCls = 'i-switch';
antmove_export = {
  setSize: function (size) {
    var index = sizes.indexOf(size);
    return prefixCls + (index > -1 ? '-' + size : 'default');
  },
  setCurrent: function (value, disabled) {
    var className = value && !disabled ? prefixCls + '-checked' : '';

    if (disabled) {
      className += ' ' + prefixCls + '-disabled';
    }

    return className;
  }
};
export default antmove_export;