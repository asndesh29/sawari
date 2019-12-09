import db from '../db';

export default async (record) => {
  console.log('add dealer Api called', record);
  const { image } = record;
  delete record.image;

  const mainRes = await db.execute(async ({ insert, update, findOne }) => {
    if (record.id) {
      const updateRes = await update('Dealer', { ...record, image }, { id: parseInt(record.id, 10) });
      const findOneres = await findOne('Dealer', { id: parseInt(record.id, 10) });
      return findOneres;
    }
    const res = await insert('Dealer', { ...record, image, sbId: parseInt(record.sbId, 10), sId: parseInt(record.sId, 10), stypeId: parseInt(record.stypeId, 10) });

    return { res, image };
  });
  return mainRes;
};
