import db from '../db';

export default async (question) => {
  const { salaryDetail } = question;
  delete question.salaryDetail;
  // console.log('salaryDetail Questionid =', salaryDetail.userId, 'qsnastroId', question.astroId);
  try {
    const res = await db.execute(async ({ insert, update, findOne }) => {
      const findQuestion = await findOne('AstrologerAnswer', { questionId: question.questionId });
      if (findQuestion) {
        const updateModQuestionRes = await update('AstrologerAnswer', question, { questionId: question.questionId });
        const updateUserQuestionRes = await update('ModeratorQuestion', { serveStatus: '0' }, { questionId: question.modQuestionId });
        if (updateModQuestionRes && updateUserQuestionRes) {
          return 'successfully updated';
        }
        throw new Error('updated faild');
      } else {
        const insertModRes = await insert('AstrologerAnswer', { ...question, locker: 0 });
        const updateUserQsnRes = await update('ModeratorQuestion', { serveStatus: '0' }, { questionId: question.questionId });
        if (insertModRes && updateUserQsnRes) {
          if (parseInt(salaryDetail.userId, 10) === parseInt(question.astroId, 10)) {
            // console.log('if called', salaryDetail);
            insert('EmployeeFixedAndBonusSalary', { ...salaryDetail, questionId: question.questionId, timeStamp: Date.now(), bonusType: 'astroAnswer' });
          } else {
            // console.log('esle called', salaryDetail);
            insert('EmployeeFixedAndBonusSalary', { ...salaryDetail, fixedSalary: 0, questionId: question.questionId, timeStamp: Date.now(), bonusType: 'astroAnswer' });
            insert('EmployeeFixedAndBonusSalary', { ...salaryDetail, userId: question.astroId, firstBonus: 0, secondBonus: 0, questionId: question.questionId, timeStamp: Date.now(), bonusType: 'astroAnswer' });
          }
          return 'Inserted successfully';
        }
        throw new Error('Inserted failed');
      }
    });
    return res;
  } catch (e) {
    console.log('errror in astroo anser', e);
    throw new Error('Data Access faild');
  }
};
