import db from '../db';

export default async (record) => {
  console.log('add discount offer Api called', record);
  const { image } = record;
  delete record.image;

  const mainRes = await db.execute(async ({ insert, update, findOne }) => {
    if (record.id) {
      const updateRes = await update('DiscountOffer', { ...record, image, id: parseInt(record.id, 10), variantId: parseInt(record.variantId, 10) }, { id: parseInt(record.id, 10) });
      const findOneres = await findOne('DiscountOffer', { id: parseInt(record.id, 10) });
      return findOneres;
    }
    const res = await insert('DiscountOffer', { ...record, image, variantId: parseInt(record.variantId, 10) });

    return { res, image };
  });
  return mainRes;
};
