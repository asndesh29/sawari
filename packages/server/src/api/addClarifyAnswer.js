import db from '../db';

const clarifyHelper = async (qsn, insert, update, findOne, pTable, sTable) => {
  // console.log('clarify handler called', pTable, sTable);
  const question = qsn;
  const id = pTable === 'UserQuestion' ? 'id' : 'questionId';
  delete question.type;
  const findQuestion = await findOne('ClarifyQuestion', { questionId: question.questionId });
  // console.log('id and findQuestion value', id, findQuestion);
  if (findQuestion) {
    if (findQuestion.modStatus === 0) {
      // console.log('inside sec table');
      await update(sTable, { serveStatus: 1 }, { questionId: qsn.questionId });
    } else {
      // console.log('inside pri table');
      await update(pTable, { serveStatus: 1 }, { [id]: qsn.questionId });
    }
  }
};

export default async (question) => {
  // console.log('clarify api called', question);
  try {
    const res = await db.execute(async ({ insert, update, findOne }) => {
      const findQuestion = await findOne('ClarifyQuestion', { questionId: question.questionId });
      if (findQuestion) {
        const updateModQuestionRes = await update('ClarifyQuestion', question, { questionId: question.questionId } );
        if (updateModQuestionRes) {
          if (findQuestion.mod === 'modQuestion') {
            // console.log('mooderator mod called');
            await clarifyHelper(question, insert, update, findOne, 'UserQuestion', 'ModeratorQuestion');
          } else {
            // console.log('astroAnswer mode called');
            await clarifyHelper(question, insert, update, findOne, 'ModeratorQuestion', 'AstrologerAnswer');
          }
          return 'successfully updated';
        }
        throw new Error('updated faild');
      }
      throw new Error('Inserted failed');
    });
    return res;
  } catch (e) {
    console.log('clarify error', e);
    throw new Error('Data Access faild');
  }
};
