'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _login = require('../../auth/login');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  try {
    const record = req.body;
    // console.log('login route called', record);
    const status = await (0, _login2.default)(record);
    res.send(status);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};