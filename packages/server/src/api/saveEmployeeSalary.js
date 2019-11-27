import db from '../db';

export default async (configuration, user) => {
  // console.log('configuration data', configuration);
  try {
    const res = await db.execute(async ({ insert, update, findOne }) => {
      const findOneRes = await findOne('EmployeeSalary', { id: 1 });
      if (findOneRes) {
        const updateRes = await update('EmployeeSalary', { ...configuration, userId: user.id }, { id: findOneRes.id });
        if (updateRes) {
          return 'Updated successfully';
        }
        throw new Error('Update faild');
      }
      const insertRes = await insert('EmployeeSalary', { ...configuration, userId: user.id });
      if (insertRes) {
        return 'Updated successfully';
      }
      throw new Error('Update faild');
    });
    return res;
  } catch (e) {
    console.log('save app config error', e);
    throw e;
  }
};
