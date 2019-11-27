import db from '../db';

export default async (record) => {
  // console.log('add note api called', record);
  try {
    const res = await db.execute(async ({ update }) => {
      switch (record.type) {
        case 'modQuestion':
          await update('ModeratorQuestion', { note: record.note }, { questionId: record.questionId });
          return 'Successfully updated';
        case 'astroAnswer':
          await update('AstrologerAnswer', { note: record.note }, { questionId: record.questionId });
          return 'Successfully updated';
        case 'modAnswer':
          await update('ModeratorAnswer', { note: record.note }, { questionId: record.questionId });
          return 'Successfully updated';
        case 'clarifyQuestion':
          await update('ClarifyQuestion', { note: record.note }, { questionId: record.questionId });
          return 'Successfully updated';
        default:
          throw 'faild to add note';
      }
    });
    return res;
  } catch (e) {
    console.log(e);
    throw new Error('Data Access faild');
  }
};
