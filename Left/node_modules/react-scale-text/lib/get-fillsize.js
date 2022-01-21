"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFillSize;

var _domUtils = require("./dom-utils");

function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

// Determine the font-size to set on the element `el` that will
// allow the first child of that element to fill the maximum height
// and width without causing overflow
function getFillSize(el, minFontSize, maxFontSize) {
  var widthOnly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var factor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  // Make an initial guess at font-size that fits width
  var fontSize = Math.min(Math.max(Math.min(Number(el.offsetWidth) / (factor * 10), maxFontSize), minFontSize));
  var step = 1;
  var complete;

  while (!complete) {
    el.style.fontSize = "".concat(fontSize, "px");

    var _getOverflow = (0, _domUtils.getOverflow)(el),
        _getOverflow2 = _slicedToArray(_getOverflow, 2),
        overflowWidth = _getOverflow2[0],
        overflowHeight = _getOverflow2[1];

    if (!widthOnly && (overflowHeight || overflowWidth)) {
      if (fontSize <= minFontSize) {
        fontSize = minFontSize;
        complete = true;
      } else {
        fontSize -= step;
        complete = true;
      }
    } else if (widthOnly && overflowWidth) {
      fontSize -= step;
      complete = true;
    } else if (fontSize >= maxFontSize) {
      fontSize = maxFontSize;
      complete = true;
    } else if (!complete) {
      fontSize += step;
    }
  }

  return fontSize;
}
/* eslint-enable no-param-reassign */