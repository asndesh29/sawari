import db from '../db';

export default async (record) => {
  // console.log('payment salary api called', record);
  const result = await db.execute(async ({ insert }) => {
    let updateRes = null;
    updateRes = await insert('EmployeePayment', record);
    return updateRes;
  });
  return result;
};
