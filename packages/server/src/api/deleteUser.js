import db from '../db';

export default async (userId) => {

  try {
    const result = await db.execute(async ({ deleteQuery }) => {
      const delRes = await deleteQuery('User', { id: userId });
      if (delRes) {
        return delRes;
      }
      throw 'User deletion faild';
    });
    return result;
  } catch (e) {
    console.log('error in delete user api', e);
    throw e;
  }
};
