import db from '../db';

export default async (record) => {
  console.log('add news Api called', record);
  const mainRes = await db.execute(async ({ insert, update, findOne }) => {
    if (record.id) {
      const updateRes = await update('News', record, { id: parseInt(record.id, 10) });
      const findOneres = await findOne('News', { id: parseInt(record.id, 10) });
      return findOneres;
    }
    const res = await insert('News', record);
    return res;
  });
  return mainRes;
};
