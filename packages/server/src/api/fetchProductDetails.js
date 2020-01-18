import db from '../db';

export default async (id) => {

  const mainRes = await db.execute(async ({ find, findOne }) => {
    const vehicleBrandProduct = await findOne('ServiceTypeBrandModel', { id: parseInt(id, 10) });
    const varients = await find('ServiceTypeBrandModelVarient', { modelId: parseInt(id, 10) });
    return { ...vehicleBrandProduct, varients };
  });
 return mainRes;
};
