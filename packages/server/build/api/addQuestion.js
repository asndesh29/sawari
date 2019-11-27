'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _stripePaymentHandler = require('./stripePaymentHandler');

var _stripePaymentHandler2 = _interopRequireDefault(_stripePaymentHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async record => {
  const response = await _db2.default.execute(async ({ insert, update }) => {
    // stripePayment();
    if (record.id) {
      const updatRes = await update('UserQuestion', { paymentStatus: record.paymentStatus }, { id: record.id });
      return updatRes;
    }
    const insertRes = await insert('UserQuestion', record);
    return insertRes;
  });
  return response;
};