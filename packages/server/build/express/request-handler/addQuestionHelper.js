'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('../../api');

exports.default = async (req, res) => {
  // console.log('addquestion helper called', req.body);
  const result = await (0, _api.addQuestion)(req.body);
  // console.log('add question response', result);
  if (result) {
    res.statusCode = 200;
    res.send(JSON.stringify(result));
  }
};