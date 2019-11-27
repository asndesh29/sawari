'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validateToken = require('../../auth/validateToken');

var _validateToken2 = _interopRequireDefault(_validateToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  const { token, userId } = req.query;
  // console.log('user id in fetch question list handler', token, userId);
  res.send('fetch success');
};