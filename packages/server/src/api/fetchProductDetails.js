import db from '../db';

export default async (id) => {

  const mainRes = await db.execute(async ({ findOne }) => {
    const vehicleBrandProduct = await findOne('ServiceTypeBrandProductDetails', { id: parseInt(id, 10) });
    return vehicleBrandProduct;
  });
 return mainRes;
};
