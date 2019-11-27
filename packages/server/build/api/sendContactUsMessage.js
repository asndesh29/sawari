'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async record => {
  // console.log('send message api called', record);
  try {
    const result = await _db2.default.execute(async ({ insert }) => {
      const insertRes = await insert('ContactUsMessage', _extends({}, record, { timeStamp: Date.now() }));
      if (insertRes) {
        return insertRes;
      }
      throw 'insertion faild';
    });
    return result;
  } catch (e) {
    console.log(e);
    throw e;
  }
};