var sizes = ['large', 'default'];
var prefixCls = 'i-switch';
export default {
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