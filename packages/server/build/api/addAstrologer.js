'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mailer = require('../mailer');

var _mailer2 = _interopRequireDefault(_mailer);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _mailBody = require('../mailer/html/mailBody');

var _mailBody2 = _interopRequireDefault(_mailBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (record, userDetails, password) => {
  if (userDetails.type === 'super' || userDetails.type === 'admin') {
    try {
      const htmlStringValue = await (0, _mailBody2.default)(record.userName, password, record.type);
      const respose = await _db2.default.execute(async ({ insert }) => {
        const res = await insert('User', record);
        if (res) {
          await (0, _mailer2.default)({
            from: 'Bidha<info.bidha.123@gmail.com>',
            to: `<${record.userName}>`,
            subject: 'User Registration',
            text: 'No reply',
            html: htmlStringValue
          });
        }
        return res;
      });
      return respose;
    } catch (e) {
      console.log(e);
      throw new Error('data access faild');
    }
  }
  return 'Authorization faild';
};