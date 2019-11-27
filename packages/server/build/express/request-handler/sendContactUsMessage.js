'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sendContactUsMessage = require('../../api/sendContactUsMessage');

var _sendContactUsMessage2 = _interopRequireDefault(_sendContactUsMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  // console.log('send message is called', req.body);
  try {
    const result = await (0, _sendContactUsMessage2.default)(req.body);
    if (result) {
      res.statusCode = 200;
      res.send(JSON.stringify(result));
    }
  } catch (e) {
    res.statusCode = 500;
    res.send(JSON.stringify(e));
  }
};