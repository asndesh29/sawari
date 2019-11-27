import db from '../db';

const fetchAnswerDetails = async (questionId) => {
  try {
    const result = await db.execute(async ({ findOne }) => {
      const answerRes = await findOne('ModeratorAnswer', { questionId });
      if (answerRes) {
        const astroIdRes = await findOne('AstrologerAnswer', { questionId });
        const astroDetails = await findOne('Astrologer', { userId: astroIdRes.astroId });
        if (astroDetails) {
          return { answerDetail: answerRes, astrologerDetail: astroDetails };
        }
      }
      return null;
    });
    return result;
  } catch (e) {
    throw e;
  }
};

const fetchAnswerQestionDetials = async (questionDetails) => {
  try {
    const result = await db.execute(async ({ findOne }) => {
      const answerDetails = await fetchAnswerDetails(questionDetails.id);
      const userDetails = await findOne('BidhaUser', { id: questionDetails.userId });
      return { answer: answerDetails ? { ...answerDetails } : null, question: { questionDetails, userDetails: { ...userDetails } } };
    });
    return result;
  } catch (e) {
    throw e;
  }
};

const fetchAstrologerDetails = async (id) => {
  try {
    const result = await db.execute(async ({ findOne }) => {
      const astroRes = await findOne('Astrologer', { userId: id });
      return astroRes;
    });
    return result;
  } catch (e) {
    throw e;
  }
};

export default async (condition) => {
  try {
    // console.log('initial fetch api called', condition);
    const result = await db.execute(async ({ find, findOne, executeSql }) => {
      const qsnRes = await find('UserQuestion', { registrationToken: condition });
      const promiseAll = [];
      const AstroPormise = [];
      qsnRes.forEach((data) => {
        promiseAll.push(fetchAnswerQestionDetials(data));
      });
      const allAnswerDetails = await Promise.all(promiseAll);
      const fetchConfiguration = await findOne('AppConfiguration', { id: 1 });
      const fetchAstrologerIdlist = await find('User', { type: 'astrologer' });
      fetchAstrologerIdlist.forEach((data) => {
        AstroPormise.push(fetchAstrologerDetails(data.id));
      });
      const astrologerList = await Promise.all(AstroPormise);
      const freeQuestion = await find('FreeQuestion', { registrationToken: condition }) || [];
      const userFirstRecord = await findOne('BidhaUser', { registrationToken: condition });
      // console.log('userFirst record', userFirstRecord);
      let userDeviceMessage = [];
      if (userFirstRecord) {
        const systemMessage = await executeSql('SELECT * FROM SystemMessage WHERE [timeStamp] BETWEEN ? AND ?', [userFirstRecord.registrationDateTime, Date.now()]);
        userDeviceMessage = systemMessage.filter(msg => msg.userId === condition || msg.userId === 1);
      }
      return { astroDetails: astrologerList, ansQuestionDetails: allAnswerDetails, appConfigurationDetails: fetchConfiguration, freeQuestion, systemMessage: userDeviceMessage };
    });
    return result;
  } catch (e) {
    console.log('error in fetching app initial data', e);
    throw e;
  }
};
