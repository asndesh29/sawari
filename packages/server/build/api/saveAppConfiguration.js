'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (configuration, user) => {
  // console.log('configuration data', configuration);
  try {
    const res = await _db2.default.execute(async ({ insert, update, findOne }) => {
      const findOneRes = await findOne('AppConfiguration', { id: 1 });
      if (findOneRes) {
        const updateRes = await update('AppConfiguration', _extends({}, configuration, { userId: user.id }), { id: findOneRes.id });
        if (updateRes) {
          return 'App configuration updated successfully';
        }
        throw 'App configuration update faild';
      }
      const insertRes = await insert('AppConfiguration', _extends({}, configuration, { userId: user.id }));
      if (insertRes) {
        return 'App configuration updated successfully';
      }
      throw 'App configuration update faild';
    });
    return res;
  } catch (e) {
    console.log('save app config error', e);
    throw e;
  }
};