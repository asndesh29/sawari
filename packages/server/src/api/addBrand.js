import db from '../db';

export default async (record) => {
  console.log('add brand Api called', record);
  const { image } = record;
  delete record.image;

  const mainRes = await db.execute(async ({ insert, update, findOne }) => {
    if (record.id) {
      const updateRes = await update('ServiceTypeBrand', { ...record, brandImageUrl: image }, { id: parseInt(record.id, 10) });
      const findOneres = await findOne('ServiceTypeBrand', { id: parseInt(record.id, 10) });
      return findOneres;
    }
    const res = await insert('ServiceTypeBrand', { ...record, brandImageUrl: image, sid: parseInt(record.sid, 10), stypeId: parseInt(record.stypeId, 10) });

    return { res, brandImageUrl: image };
  });
  return mainRes;
};
