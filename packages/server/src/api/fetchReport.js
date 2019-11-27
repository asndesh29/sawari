import ldash from 'lodash';
import db from '../db';
import { findQuestionDetails } from './fetchAnsQsnTransDetails';

export default async (startDate, endDate, modAstroId) => {
  // console.log('startDate and endDate',startDate, endDate);
  try {
    const res = await db.execute(async ({ executeSql }) => {
      const questionRes = await executeSql('SELECT * FROM UserQuestion WHERE [timeStamp] BETWEEN ? AND ?', [startDate, endDate]);
      const modQuestionRes = await executeSql('SELECT * FROM ModeratorQuestion WHERE [modQsnTimeStamp] BETWEEN ? AND ?', [startDate, endDate]);
      const modAnswerRes = await executeSql('SELECT * FROM ModeratorAnswer WHERE [modAnsTimeStamp] BETWEEN ? AND ?', [startDate, endDate]);
      const astroAnswerRes = await executeSql('SELECT * FROM AstrologerAnswer WHERE [astroAnsTimeStamp] BETWEEN ? AND ?', [startDate, endDate]);
      const loginStatus = await executeSql('SELECT * FROM LoginStatus WHERE [timeStamp] BETWEEN ? AND ?', [startDate, endDate]);
      const questionIdList = ldash.uniq([...questionRes.map(r => r.id), ...modQuestionRes.map(r => r.questionId), ...modAnswerRes.map(r => r.questionId), ...astroAnswerRes.map(r => r.questionId)]);
      // console.log('questionidlist', questionIdList);
      const allPromises = [];
      questionIdList.forEach(id => allPromises.push(findQuestionDetails(id)));
      const questionDetails = await Promise.all(allPromises);
      const finalRes = questionDetails.map(qsnObj => qsnObj.translatorDetails);
      return { ansQsnDetail: finalRes, loginDetail: loginStatus };
    });
    return res;
  } catch (e) {
    throw 'Report generation faild ';
  }
};
