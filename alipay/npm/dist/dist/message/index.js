"use strict";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var default_data = {
  visible: false,
  content: "",
  duration: 2,
  type: "default" // default || success || warning || error

};
var timmer = null;
Component({
  externalClasses: ["i-class"],
  data: _objectSpread({}, default_data),
  methods: {
    handleShow: function handleShow(options) {
      var _this = this;

      var _options$type = options.type,
          type = _options$type === void 0 ? "default" : _options$type,
          _options$duration = options.duration,
          duration = _options$duration === void 0 ? 2 : _options$duration;
      this.setData(_objectSpread(_objectSpread({}, options), {}, {
        type: type,
        duration: duration,
        visible: true
      }));
      var d = this.data.duration * 1000;
      if (timmer) clearTimeout(timmer);

      if (d !== 0) {
        timmer = setTimeout(function () {
          _this.handleHide();

          timmer = null;
        }, d);
      }
    },
    handleHide: function handleHide() {
      this.setData(_objectSpread({}, default_data));
    }
  }
});