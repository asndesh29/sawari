'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _fetchAnsQsnTransDetails = require('./fetchAnsQsnTransDetails');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (startDate, endDate, modAstroId) => {
  try {
    const res = await _db2.default.execute(async ({ executeSql }) => {
      const questionRes = await executeSql('SELECT * FROM UserQuestion WHERE [timeStamp] BETWEEN ? AND ?', [startDate, endDate]);
      const allPromises = [];
      questionRes.forEach(qsn => allPromises.push((0, _fetchAnsQsnTransDetails.findQuestionDetails)(qsn.id)));
      const questionDetails = await Promise.all(allPromises);
      const finalRes = questionDetails.map(qsnObj => qsnObj.translatorDetails);
      return finalRes;
    });
    return res;
  } catch (e) {
    throw 'Report generation faild ';
  }
};