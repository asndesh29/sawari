import db from '../db';

export default async ({ id }) => {
  console.log('detete video api called', id);
  try {
    const result = await db.execute(async ({ deleteQuery }) => {
      const delRes = await deleteQuery('Videos', { id: parseInt(id, 10) });
      if (delRes) {
        return delRes;
      }
      throw 'brand deletion faild';
    });
    return result;
  } catch (e) {
    console.log('error in delete videos api', e);
    throw e;
  }
};
