"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _elementUi = require("element-ui");

var _store = _interopRequireDefault(require("@/store"));

var _auth = require("@/utils/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var service = _axios["default"].create({
  baseURL: 'http://127.0.0.1:8888/api/private/v1/',
  // api的base_url
  timeout: 5000 // 请求超时时间

}); // request拦截器


service.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (_store["default"].getters.token) {
    config.headers['X-Token'] = (0, _auth.getToken)(); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }

  return config;
}, function (error) {
  // Do something with request error
  console.log(error); // for debug

  Promise.reject(error);
}); // respone拦截器

service.interceptors.response.use(function (response) {
  return response;
},
/**
 * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
 * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
 */
//  const res = response.data;
//     if (res.code !== 20000) {
//       Message({
//         message: res.message,
//         type: 'error',
//         duration: 5 * 1000
//       });
//       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//           confirmButtonText: '重新登录',
//           cancelButtonText: '取消',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('FedLogOut').then(() => {
//             location.reload();// 为了重新实例化vue-router对象 避免bug
//           });
//         })
//       }
//       return Promise.reject('error');
//     } else {
//       return response.data;
//     }
function (error) {
  console.log('err' + error); // for debug

  (0, _elementUi.Message)({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  });
  return Promise.reject(error);
});
var _default = service;
exports["default"] = _default;