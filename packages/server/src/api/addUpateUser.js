import db from '../db';

export default async (record) => {
  console.log('add user Api called', record);
  const mainRes = await db.execute(async ({ insert, update, findOne }) => {
    if (record.id) {
      const updateRes = await update('User', record, { id: parseInt(record.id, 10) });
      const findOneres = await findOne('User', { id: parseInt(record.id, 10) });
      return findOneres;
    }
    const res = await insert('User', record);
    return res;
  });
  return mainRes;
};
