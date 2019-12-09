import db from '../db';

export default async (id) => {

  try {
    const result = await db.execute(async ({ deleteQuery }) => {
      const delRes = await deleteQuery('Dealer', { id });
      if (delRes) {
        return delRes;
      }
      throw 'dealer deletion faild';
    });
    return result;
  } catch (e) {
    console.log('error in delete dealer api', e);
    throw e;
  }
};
