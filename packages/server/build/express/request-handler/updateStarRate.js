'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _updateStarRate = require('../../api/updateStarRate');

var _updateStarRate2 = _interopRequireDefault(_updateStarRate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  // console.log('update star rating called', req.body);
  try {
    const result = await (0, _updateStarRate2.default)(req.body);
    if (result) {
      res.statusCode = 200;
      res.send('successfully updated');
    }
  } catch (e) {
    res.statusCode = 500;
    res.send('Faild to Star update');
  }
};