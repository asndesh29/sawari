import db from '../db';
import SendNotification from './sendNotification';

const findFcmToken = async (qid, findOne) => {
  const userQuestion = await findOne('UserQuestion', { id: qid });
  const userRes = await findOne('BidhaUser', { id: userQuestion.userId });
  return userRes.fbToken;
};

export default async (question) => {
  const { salaryDetail } = question;
  delete question.salaryDetail;
  try {
    const res = await db.execute(async ({ insert, update, findOne }) => {
      const findQuestion = await findOne('ModeratorAnswer', { questionId: question.questionId });
      if (findQuestion) {
        const updateModQuestionRes = await update('ModeratorAnswer', { questionId: question.questionId }, question);
        const updateAstrologerAnswerRes = await update('AstrologerAnswer', { serveStatus: '0' }, { questionId: question.questionId });
        const updateUserQuestionRes = await update('UserQuestion', { serveStatus: '0' }, { id: question.questionId });
        if (updateModQuestionRes && updateUserQuestionRes && updateAstrologerAnswerRes) {
          return 'successfully updated';
        }
        throw new Error('updated faild');
      } else {
        const insertModRes = await insert('ModeratorAnswer', question);
        const updateAstroAnsRes = await update('AstrologerAnswer', { serveStatus: '0' }, { questionId: question.questionId });
        const updateUserQsnRes = await update('UserQuestion', { serveStatus: '0' }, { id: question.questionId });
        if (insertModRes && updateAstroAnsRes && updateUserQsnRes) {
          // const findPreModsalary = await findOne('EmployeeFixedAndBonusSalary', { questionId: question.questionId, bonusType: 'modQuestion' });
          if (parseInt(salaryDetail.userId, 10) === parseInt(question.modId, 10)) {
            update('EmployeeFixedAndBonusSalary', { BonusApproveStatus: true }, { questionId: question.questionId, bonusType: 'modQuestion' });
            insert('EmployeeFixedAndBonusSalary', { ...salaryDetail, firstBonus: 0, secondBonus: 0, questionId: question.questionId, timeStamp: Date.now(), bonusType: 'modAnswer', BonusApproveStatus: true, userId: question.modId } );
          } else {
            insert('EmployeeFixedAndBonusSalary', { ...salaryDetail, firstBonus: 0, secondBonus: 0, questionId: question.questionId, timeStamp: Date.now(), bonusType: 'modAnswer', BonusApproveStatus: true, userId: question.modId });
            // here is confusion add modAnser question price or not
          }
          const fcmToken = await findFcmToken(question.questionId, findOne);
          await SendNotification({ notiTitle: 'Bidha', notiBody: 'Your question has been answered. Please check your message.', message: '', users: [{ fbToken: fcmToken }] });
          return 'Inserted successfully';
        }
        throw new Error('Inserted failed');
      }
    });
    return res;
  } catch (e) {
    console.log('error in addmod ans api', e);
    throw new Error('Data Access faild');
  }
};
