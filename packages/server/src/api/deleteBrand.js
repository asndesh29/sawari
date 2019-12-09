import db from '../db';

export default async (id) => {

  try {
    const result = await db.execute(async ({ deleteQuery }) => {
      const delRes = await deleteQuery('ServiceTypeBrand', { id });
      if (delRes) {
        return delRes;
      }
      throw 'brand deletion faild';
    });
    return result;
  } catch (e) {
    console.log('error in delete brand api', e);
    throw e;
  }
};
