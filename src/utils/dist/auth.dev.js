"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = getToken;
exports.setToken = setToken;
exports.removeToken = removeToken;
exports.getCookies = getCookies;
exports.setCookies = setCookies;
exports.removeCookies = removeCookies;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TokenKey = 'token';

function getToken() {
  return _jsCookie["default"].get(TokenKey);
}

function setToken(token) {
  return _jsCookie["default"].set(TokenKey, token);
}

function removeToken() {
  return _jsCookie["default"].remove(TokenKey);
}

function getCookies(item) {
  return _jsCookie["default"].get(item);
}

function setCookies(itemName, item) {
  return _jsCookie["default"].set(itemName, item);
}

function removeCookies(item) {
  return _jsCookie["default"].remove(item);
}