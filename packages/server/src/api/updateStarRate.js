import db from '../db';

export default async (record) => {
  // console.log('data in api star', record);
  try {
    const result = await db.execute(async ({ update }) => {
      const res = await update('UserQuestion', { starRating: record.star }, { id: record.qid });
      return res;
    });
    return result;
  } catch (e) {
    console.log('error star rating update api', e);
    throw e;
  }
};
