'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deleteMessage = require('../../api/deleteMessage');

var _deleteMessage2 = _interopRequireDefault(_deleteMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  // console.log('delete message request handler called', req.body);
  try {
    const result = await (0, _deleteMessage2.default)(req.body);
    if (result) {
      res.statusCode = 200;
      res.send('Successfully deleted');
    }
  } catch (e) {
    res.statusCode = 500;
    res.send('Faild to delete');
  }
};