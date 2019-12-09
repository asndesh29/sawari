import db from '../db';

export default async (id) => {
console.log('delete api called', id);
  try {
    const result = await db.execute(async ({ deleteQuery }) => {
      const delRes = await deleteQuery('ServiceTypeBrandProductDetails', { id });
      if (delRes) {
        return delRes;
      }
      throw 'brand product deletion faild';
    });
    return result;
  } catch (e) {
    console.log('error in delete brand product api', e);
    throw e;
  }
};
