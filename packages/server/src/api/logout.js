import cache from '../cache';
import db from '../db';

const ansQuestionLockUnlockHandler = async (lockStatus, table, registrationToken, user) => {
  const res = db.execute(async ({ find, update }) => {
    // const lockerType = lockStatus ? 0 : user.id;
    const allQuestionCurrentAsk = await find(table, { registrationToken, serveStatus: 1 });
    const allPostPoneQuestion = await find('PostpondQuestion', { userId: user.id });
    let allQuestionCurrentAskFiltered = null;
    if (table === 'UserQuestion') {
      allQuestionCurrentAskFiltered = allQuestionCurrentAsk.filter(qsn => !allPostPoneQuestion.find(pqsn => pqsn.userId === user.id && pqsn.questionId === qsn.id));
      // console.log('allQuestionCurrentAskFiltered', allQuestionCurrentAskFiltered);
      const updateLockPromises = allQuestionCurrentAskFiltered.map(qsn => update(table, { locker: lockStatus }, { id: qsn.id }));
      await Promise.all(updateLockPromises);
      return true;
    }
    allQuestionCurrentAskFiltered = allQuestionCurrentAsk.filter(qsn => !allPostPoneQuestion.find(pqsn => pqsn.userId === user.id && pqsn.questionId === qsn.questionId));
    const updateLockPromises = allQuestionCurrentAskFiltered.map(qsn => update(table, { locker: lockStatus }, { questionId: qsn.questionId }));
    await Promise.all(updateLockPromises);
    return true;
  });
  return res;
};

export default async function logout(record, user) {
  // console.log('logout handler called', record, user);
  cache.users.del(user.token);
  let resoponse = null;
  if (!record.currentServeStatus) {
    return 'SignOut done';
  }

  if (user.type === 'moderator') {
    if (record.currentServeStatus === 'modQuestion') {
      if (record.pendingQuestionList.length > 0) {
        const promisesList = [];
        record.pendingQuestionList.forEach((obj) => {
          if (obj.currentServeStatus === 'modQuestion') {
            promisesList.push(ansQuestionLockUnlockHandler(false, 'UserQuestion', obj.registrationToken, user));
          } else {
            promisesList.push(ansQuestionLockUnlockHandler(false, 'AstrologerAnswer', obj.registrationToken, user));
          }
        });
        await Promise.all(promisesList);
      }
      resoponse = await ansQuestionLockUnlockHandler(false, 'UserQuestion', record.registrationToken, user);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (record.pendingQuestionList.length > 0) {
        const promisesList = [];
        record.pendingQuestionList.forEach((obj) => {
          if (obj.currentServeStatus === 'modQuestion') {
            promisesList.push(ansQuestionLockUnlockHandler(false, 'UserQuestion', obj.registrationToken, user));
          } else {
            promisesList.push(ansQuestionLockUnlockHandler(false, 'AstrologerAnswer', obj.registrationToken, user));
          }
        });
        await Promise.all(promisesList);
      }
      resoponse = await ansQuestionLockUnlockHandler(false, 'AstrologerAnswer', record.registrationToken, user);
    }
  } else if (user.type === 'astrologer') {
    if (record.pendingQuestionList.length > 0) {
      const promisesList = [];
      record.pendingQuestionList.forEach(obj => promisesList.push(ansQuestionLockUnlockHandler(false, 'ModeratorQuestion', obj.registrationToken, user)));
      await Promise.all(promisesList);
    }
    resoponse = await ansQuestionLockUnlockHandler(false, 'ModeratorQuestion', record.registrationToken, user);
  }

  return resoponse;
}
