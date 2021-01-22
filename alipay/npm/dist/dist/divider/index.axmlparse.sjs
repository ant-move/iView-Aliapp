var antmove_export = {};
antmove_export = {
  getStyle: function (color, size, height) {
    var color = 'color:' + color + ';';
    var size = 'font-size:' + size + 'px;';
    var height = 'height:' + height + 'px;';
    return color + size + height;
  }
};
export default antmove_export;