'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetchAppInitialData = require('../../api/fetchAppInitialData');

var _fetchAppInitialData2 = _interopRequireDefault(_fetchAppInitialData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  try {
    // console.log('fetchIntial data called', req.query.reg_token);
    const result = await (0, _fetchAppInitialData2.default)(req.query.reg_token);
    if (result) {
      res.statusCode = 200;
      res.send(JSON.stringify(result));
    }
  } catch (e) {
    console.log('error in fetch init request handler', e);
    res.statusCode = 400;
    res.send('Failed to fetch data');
  }
};