import db from '../db';

export default async (configuration, user) => {
  // console.log('configuration data', configuration);
  try {
    const res = await db.execute(async ({ insert, update, findOne }) => {
      const findOneRes = await findOne('AppConfiguration', { id: 1 });
      if (findOneRes) {
        const updateRes = await update('AppConfiguration', { ...configuration, userId: user.id }, { id: findOneRes.id });
        if (updateRes) {
          return 'App configuration updated successfully';
        }
        throw 'App configuration update faild';
      }
      const insertRes = await insert('AppConfiguration', { ...configuration, userId: user.id });
      if (insertRes) {
        return 'App configuration updated successfully';
      }
      throw 'App configuration update faild';
    });
    return res;
  } catch (e) {
    console.log('save app config error', e);
    throw e;
  }
};
