import db from '../db';

export default async (record) => {
  // console.log('send message api called', record);
  try {
    const result = await db.execute(async ({ insert }) => {
      const insertRes = await insert('ContactUsMessage', { ...record, timeStamp: Date.now() });
      if (insertRes) {
        return insertRes;
      }
      throw new Error('insertion faild');
    });
    return result;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
