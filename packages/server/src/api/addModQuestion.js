import db from '../db';

export default async (question) => {
  // console.log('add moderatorsalary details called', question);
  const { salaryDetail } = question;
  delete question.salaryDetail;
  try {
    const res = await db.execute(async ({ insert, update, findOne }) => {
      const findQuestion = await findOne('ModeratorQuestion', { questionId: question.questionId });
      if (findQuestion) {
        const updateModQuestionRes = await update('ModeratorQuestion', { questionId: question.questionId }, question);
        if (updateModQuestionRes) {
          return 'successfully updated';
        }
        throw new Error('updated faild');
      } else {
        const insertModRes = await insert('ModeratorQuestion', question);
        const updateUserQsnRes = await update('UserQuestion', { serveStatus: '2' }, { id: question.questionId });
        if (insertModRes && updateUserQsnRes) {
          if (parseInt(salaryDetail.userId, 10) === parseInt(question.modId, 10)) {
            insert('EmployeeFixedAndBonusSalary', { ...salaryDetail, questionId: question.questionId, timeStamp: Date.now(), bonusType: 'modQuestion' });
          } else {
            insert('EmployeeFixedAndBonusSalary', { ...salaryDetail, fixedSalary: 0, questionId: question.questionId, timeStamp: Date.now(), bonusType: 'modQuestion', BonusApproveStatus: true });
            insert('EmployeeFixedAndBonusSalary', { ...salaryDetail, userId: question.modId, firstBonus: 0, secondBonus: 0, questionId: question.questionId, timeStamp: Date.now(), bonusType: 'modQuestion' });
          }
          return 'Inserted successfully';
        }
        throw new Error('Inserted failed');
      }
    });
    return res;
  } catch (e) {
    console.log('error in add modQuestion', e);
    throw new Error('Data Access faild');
  }
};
