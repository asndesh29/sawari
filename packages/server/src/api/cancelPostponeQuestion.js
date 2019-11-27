import db from '../db';

export default async (record) => {
  // console.log('cancelPostpone api called', record);
  const result = await db.execute(async ({ update, insert }) => {
    const { questionId, serveStatus, userId } = record;
    let updateRes = null;
    switch (serveStatus) {
      case 'modQuestion':
        updateRes = await update('UserQuestion', { locker: false }, { id: questionId });
        // insert('PostpondQuestion', { questionId, userId, type: serveStatus, timeStamp: Date.now() });
        return updateRes;
      case 'astroAnswer':
        updateRes = await update('ModeratorQuestion', { locker: false }, { questionId });
        // insert('PostpondQuestion', { questionId, userId, type: serveStatus, timeStamp: Date.now() });
        return updateRes;
      case 'modAnswer':
        updateRes = await update('AstrologerAnswer', { locker: false }, { questionId });
        // insert('PostpondQuestion', { questionId, userId, type: serveStatus, timeStamp: Date.now() });
        return updateRes;
      default:
        return 'no match found';
    }
  });
  return result;
};
