import db from '../db';

export default async (record) => {
  console.log('add ServiceCenter Api called', record);
  const { image } = record;
  delete record.image;

  const mainRes = await db.execute(async ({ insert, update, findOne }) => {
    if (record.id) {
      const updateRes = await update('ServiceCenter', { ...record, image }, { id: parseInt(record.id, 10) });
      const findOneres = await findOne('ServiceCenter', { id: parseInt(record.id, 10) });
      return findOneres;
    }
    const res = await insert('ServiceCenter', { ...record, image, sbId: parseInt(record.sbId, 10), sId: parseInt(record.sId, 10), stypeId: parseInt(record.stypeId, 10) });

    return { res, image };
  });
  return mainRes;
};
