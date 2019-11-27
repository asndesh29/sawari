import db from '../db';

export default async (record) => {
  // console.log('postpone api called', record);
  const result = await db.execute(async ({ update, insert, findOne }) => {
    const { questionId, serveStatus, userId } = record;
    let updateRes = null;
    const findeOneRes = await findOne('PostpondQuestion', { questionId });
    if (findeOneRes) {
      throw new Error('This quesiton is aleady postponded please send it for calarificaiton');
    }
    updateRes = await insert('PostpondQuestion', { questionId, userId, type: serveStatus, timeStamp: Date.now() });
    return updateRes;
  });
  return result;
};
