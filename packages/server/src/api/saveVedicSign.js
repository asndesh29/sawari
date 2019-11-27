import db from '../db';

export default async (record, user) => {
  // console.log('add note api called', record);
  try {
    const res = await db.execute(async ({ update }) => {
      await update('BidhaUser', { vedicSign: JSON.stringify(record) }, { id: record.userId });
      return 'Successfully updated';
    });
    return res;
  } catch (e) {
    console.log(e);
    throw new Error('Data Access faild');
  }
};
