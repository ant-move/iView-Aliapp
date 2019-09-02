var prefixCls = 'i-rate';
export default {
  getCurrent: function (value, index) {
    if (index < value) {
      return prefixCls + '-current';
    }
  }
};