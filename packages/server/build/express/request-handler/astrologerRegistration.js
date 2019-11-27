'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _api = require('../../api');

var _passwordHandler = require('../../auth/passwordHandler');

var _validateToken = require('../../auth/validateToken');

var _validateToken2 = _interopRequireDefault(_validateToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  // console.log('userRegisteration handler called', req.body);
  try {
    const { password, token } = req.body;
    const userDetails = (0, _validateToken2.default)(token);
    // console.log('userdetails validation response', userDetails);
    // console.log('response of add user validation', userDetails);
    if (userDetails) {
      const hasPassword = await (0, _passwordHandler.genHashPassword)(password);
      delete req.body.token;
      const respose = await (0, _api.addAstrologer)(_extends({}, req.body, { password: hasPassword }), userDetails, password);
      if (respose) {
        res.statusCode = 200;
        res.send(JSON.stringify(respose));
      }
    } else {
      res.send('Invalid token');
    }
  } catch (e) {
    console.log('error in user registration', e);
    res.statusCode = 400;
    res.send(JSON.stringify(e));
    throw e;
  }
};