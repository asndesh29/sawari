'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validateToken = require('../../auth/validateToken');

var _validateToken2 = _interopRequireDefault(_validateToken);

var _deleteUser = require('../../api/deleteUser');

var _deleteUser2 = _interopRequireDefault(_deleteUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  const { userId, token } = req.query;
  try {
    if ((0, _validateToken2.default)(token)) {
      const delRes = await (0, _deleteUser2.default)(userId);
      // console.log('delete user response', res);
      if (delRes) {
        res.statusCode = 200;
        res.send('user Successfully deleted');
      }
    } else {
      res.statusCode = 400;
      res.send('Token Validation faild');
    }
  } catch (e) {
    res.statusCode = 400;
    res.send('userDeleteion faild');
  }
};