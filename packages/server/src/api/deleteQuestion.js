import db from '../db';

export default async (record) => {
  // console.log('delte quesiton api called', record);
  const result = await db.execute(async ({ update }) => {
    const updateRes = await update('UserQuestion', { webDeleteStatus: 1 }, { id: record.questionId });
    if (updateRes) {
      return updateRes;
    }
    throw new Error('Question delete faild');
  });
  return result;
};
