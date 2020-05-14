import db from '../db';

export default async (id) => {

  try {
    const result = await db.execute(async ({ deleteQuery }) => {
      const delRes = await deleteQuery('News', { id });
      if (delRes) {
        return delRes;
      }
      throw new Error('Model deletion faild');
    });
    return result;
  } catch (e) {
    console.log('error in delete news api', e);
    throw e;
  }
};
