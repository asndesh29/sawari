import db from '../db';

export default async (record) => {
  console.log('add sellVehilcl api called', record);
  const res = await db.execute(async ({ insert, update }) => {
    if (record.id) {
      const updateRes = await update('SellVehicle', record, { id: record.id });
      return updateRes;
    }
    const insertRes = await insert('SellVehicle', record);
    return insertRes;
  });
  return res;
};
