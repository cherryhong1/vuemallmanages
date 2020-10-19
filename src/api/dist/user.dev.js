"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function login(data) {
  return (0, _request["default"])({
    url: 'login',
    method: 'post',
    data: data
  });
}