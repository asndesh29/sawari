'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateToken;

var _cache = require('../cache');

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateToken(token) {
  try {
    const user = _cache2.default.users.get(`${token}`);
    if (!user) {
      return false;
    }
    return user;
  } catch (e) {
    throw new Error('validation faild');
  }
}