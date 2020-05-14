import db from '../db';

export default async (record) => {
  console.log('add videos Api called', record);
  const mainRes = await db.execute(async ({ insert, update, findOne }) => {
    if (record.id) {
      const updateRes = await update('Videos', record, { id: parseInt(record.id, 10) });
      const findOneres = await findOne('Videos', { id: parseInt(record.id, 10) });
      return findOneres;
    }
    const res = await insert('Videos', record);
    return res;
  });
  return mainRes;
};
