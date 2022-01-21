"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = getStyle;
exports.getOverflow = getOverflow;
exports.hasOverflow = exports.css = exports.camelize = exports.uniqId = void 0;

/**
 * @file utils.js
 * @description DOM utility functions
 */
// Simple way to generate a unique id
var id = 0;

var uniqId = function uniqId() {
  return "uid-".concat(Date.now(), "-").concat(id++);
}; // Camelcase a dashed string, ie do-thing => doThing


exports.uniqId = uniqId;

var camelize = function camelize(str) {
  return str.replace(/-(\w)/g, function (s, letter) {
    return letter.toUpperCase();
  });
};
/* eslint-disable no-param-reassign, guard-for-in, no-restricted-syntax */
// Set multiple css properties on an element `el` by
// passing in a `style` object that defines what properties
// to set and their value


exports.camelize = camelize;

var css = function css(el, styles) {
  for (var property in styles) {
    el.style[property] = styles[property];
  }
};
/* eslint-enable no-param-reassign, guard-for-in, no-restricted-syntax */
// Get the current style property value for the given element


exports.css = css;

function getStyle(el, styleProp) {
  if (el.currentStyle) {
    return el.currentStyle[camelize(styleProp)];
  } else if (document.defaultView && document.defaultView.getComputedStyle) {
    return document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  }

  return el.style[camelize(styleProp)];
}

function getOverflow(el) {
  return [el.clientWidth < el.scrollWidth, el.clientHeight < el.scrollHeight];
}

var hasOverflow = function hasOverflow(el) {
  return getOverflow(el).some(function (v) {
    return v === true;
  });
};

exports.hasOverflow = hasOverflow;