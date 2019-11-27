import db from '../db';

export default async (data) => {
  try {
    const result = await db.execute(async ({ update }) => {
      if (data.type === 'question') {
        const updateRes = await update('UserQuestion', { deleteStatus: true }, { id: data.qid });
        if (updateRes) {
          return 'Successfully deleted';
        }
      } else {
        const updateResAns = await update('ModeratorAnswer', { deleteStatus: true }, { questionId: data.qid });
        if (updateResAns) {
          return 'Successfully deleted';
        }
      }
    });
    return result;
  } catch (e) {
    console.log('error in deleteMessage api', e);
    throw e;
  }
};
