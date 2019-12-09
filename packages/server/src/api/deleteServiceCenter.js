import db from '../db';

export default async (id) => {

  try {
    const result = await db.execute(async ({ deleteQuery }) => {
      const delRes = await deleteQuery('ServiceCenter', { id });
      if (delRes) {
        return delRes;
      }
      throw 'ServiceCenter deletion faild';
    });
    return result;
  } catch (e) {
    console.log('error in delete dealer api', e);
    throw e;
  }
};
