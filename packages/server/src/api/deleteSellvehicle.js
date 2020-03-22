import db from '../db';

export default async (id) => {
  console.log('delete sell api called', id);
  try {
    const result = await db.execute(async ({ deleteQuery }) => {
      const delRes = await deleteQuery('SellVehicle', { id });
      if (delRes) {
        return delRes;
      }
      throw new Error('ServiceCenter deletion faild');
    });
    return result;
  } catch (e) {
    console.log('error in delete dealer api', e);
    throw e;
  }
};
