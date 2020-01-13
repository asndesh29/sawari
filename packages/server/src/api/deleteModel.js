import db from '../db';

export default async (id) => {

  try {
    const result = await db.execute(async ({ deleteQuery }) => {
      const delRes = await deleteQuery('ServiceTypeBrandModel', { id });
      if (delRes) {
        return delRes;
      }
      throw 'Model deletion faild';
    });
    return result;
  } catch (e) {
    console.log('error in delete brand api', e);
    throw e;
  }
};
