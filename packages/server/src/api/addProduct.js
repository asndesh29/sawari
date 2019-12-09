import db from '../db';

export default async (record) => {
  console.log('add brand Api called', record);
  const { image } = record;

  const mainRes = await db.execute(async ({ insert, update, findOne }) => {
    if (record.id) {
      const updateRes = await update('ServiceTypeBrandProductDetails', { ...record, sid: parseInt(record.sid, 10), stypeId: parseInt(record.stypeId, 10), sbId: parseInt(record.sbId, 10) }, { id: parseInt(record.id, 10) });
      const findOneres = await findOne('ServiceTypeBrandProductDetails', { id: parseInt(record.id, 10) });
      return findOneres;
    }
    const res = await insert('ServiceTypeBrandProductDetails', { ...record, sid: parseInt(record.sid, 10), stypeId: parseInt(record.stypeId, 10), sbId: parseInt(record.sbId, 10) });
    return { res, image };
  });
  return mainRes;
};
