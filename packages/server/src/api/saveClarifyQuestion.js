import db from '../db';

const clarifyHelper = async (qsn, user, insert, update, findOne, pTable, sTable, mod, status) => {
  // console.log('clarify handler called', pTable, sTable, status);
  const question = qsn;
  const id = pTable === 'UserQuestion' ? 'id' : 'questionId';
  delete question.type;
  const findQuestion = await findOne('ClarifyQuestion', { questionId: question.questionId });
  if (findQuestion) {
    const updateModQuestionRes = await update('ClarifyQuestion', { ...question, mod, modStatus: status, clarifyText: null }, { questionId: question.questionId });
    if (status === 0) {
      await update(sTable, { serveStatus: 3 }, { questionId: qsn.questionId });
    } else {
      await update(pTable, { serveStatus: 3 }, { [id]: qsn.questionId });
    }
    if (updateModQuestionRes) {
      return 'successfully updated';
    }
    // throw new Error('updated faild');
  } else {
    const insertModRes = await insert('ClarifyQuestion', { ...question, clarifyText: null, timeStamp: Date.now(), mod, modStatus: status });

    if (status === 0) {
      await update(sTable, { serveStatus: 3 }, { questionId: qsn.questionId });
    } else {
      await update(pTable, { serveStatus: 3 }, { [id]: qsn.questionId });
    }
    if (insertModRes) {
      return 'Inserted successfully';
    }
    // throw new Error('Inserted failed');
  }
};

export default async (question, user) => {
  // console.log('question clarification called', question, user);
  try {
    const res = await db.execute(async ({ insert, update, findOne }) => {
      let modRes = null;
      let astroRes = null;
      switch (Object.keys(question.type)[0]) {
        case 'modQuestion':
          modRes = await clarifyHelper(question, user, insert, update, findOne, 'UserQuestion', 'ModeratorQuestion', 'modQuestion', Object.values(question.type)[0]);
          return modRes;
        case 'astroAnswer':
          astroRes = await clarifyHelper(question, user, insert, update, findOne, 'ModeratorQuestion', 'AstrologerAnswer', 'astroAnswer', Object.values(question.type)[0]);
          return astroRes;
        default:
          return null;
      }
    });
    return res;
  } catch (e) {
    console.log('error in clarify question', e);
    throw new Error('Data Access faild');
  }
};
