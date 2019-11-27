import db from '../db';
import { genHashPassword } from '../auth/passwordHandler';

export default async (record, user) => {
  // console.log('update profile data', record);
  const hasPassword = await genHashPassword(record.password);
  // console.log('generated hash password', hasPassword);
  try {
    const res = await db.execute(async ({ findOne, update, insert }) => {
      const findOneRes = await findOne('Astrologer', { userId: record.userId });
      // console.log('findRes in upate profile', findOneRes);
      if (findOneRes) {
        await update('Astrologer', record, { id: findOneRes.id });
        await update('User', { password: hasPassword }, { id: findOneRes.userId });
        const resPonse = await findOne('Astrologer', { id: findOneRes.id });
        return resPonse;
      }
      const insertRes = await insert('Astrologer', record);
      // console.log('insert res', insertRes);
      const resPonse = await findOne('Astrologer', { id: insertRes });
      return resPonse;
    });
    return res;
  } catch (e) {
    console.log('error in udpte profile', e);
    return (e);
  }
};
