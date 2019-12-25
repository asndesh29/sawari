import db from '../db';

export default async (record) => {
  console.log('add sellVehilcl api called', record);
  const res = await db.execute(async ({ insert }) => {
    const insertRes = await insert('SellVehicle', record);
    return insertRes;
  });
  return res;
};
