import db from '../db';

export default async (record) => {
  console.log('add Varient Api called', record);
  const { schema } = record;
  delete record.schema;
  if (schema !== 'ServiceTypeBrandModelVarient') {
    delete record.userId;
  }
  const mainRes = await db.execute(async ({ insert, update, findOne }) => {
    if (record.id) {
      const updateRes = await update(schema, { ...record }, { id: parseInt(record.id, 10) });
      const findOneres = await findOne(schema, { id: parseInt(record.id, 10) });
      return findOneres;
    }
    const res = await insert(schema, { ...record });
    return { res };
  });
  return mainRes;
};
