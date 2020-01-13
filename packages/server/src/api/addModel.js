import db from '../db';

export default async (record) => {
  console.log('add Model Api called', record);
  const { image } = record;
  delete record.image;

  const mainRes = await db.execute(async ({ insert, update, findOne }) => {
    if (record.id) {
      const updateRes = await update('ServiceTypeBrandModel', { ...record, image, id: parseInt(record.id, 10), sid: parseInt(record.sid, 10), stypeId: parseInt(record.stypeId, 10), sbId: parseInt(record.sbId, 10) }, { id: parseInt(record.id, 10) });
      const findOneres = await findOne('ServiceTypeBrandModel', { id: parseInt(record.id, 10) });
      return findOneres;
    }
    const res = await insert('ServiceTypeBrandModel', { ...record, image, sid: parseInt(record.sid, 10), stypeId: parseInt(record.stypeId, 10) });

    return { res, image };
  });
  return mainRes;
};
