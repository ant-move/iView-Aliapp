export default {
  getStyle: function (color, size, height) {
    var color = 'color:' + color + ';';
    var size = 'font-size:' + size + 'px;';
    var height = 'height:' + height + 'px;';
    return color + size + height;
  }
};