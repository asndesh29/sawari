import db from '../db';

export const findQuestionDetails = async (questionId) => {
  let userDetails = null;
  let modQDetails = null;
  let modADetails = null;
  let astroDetails = null;
  let adminDetails = null;
  const result = await db.execute(async ({ findOne }) => {
    try {
      const userQuestionRes = await findOne('UserQuestion', { id: questionId });
      if (userQuestionRes) {
        userDetails = await findOne('BidhaUser', { id: userQuestionRes.userId });
      }
      const modQuesionRes = await findOne('ModeratorQuestion', { questionId });
      if (modQuesionRes) {
        modQDetails = await findOne('Astrologer', { userId: modQuesionRes.modId });
      }
      const astroAnswerRes = await findOne('AstrologerAnswer', { questionId });
      if (astroAnswerRes) {
        astroDetails = await findOne('Astrologer', { userId: astroAnswerRes.astroId });
      }
      const modAnswerRes = await findOne('ModeratorAnswer', { questionId });
      if (modAnswerRes) {
        modADetails = await findOne('Astrologer', { userId: modAnswerRes.modId });
      }
      const clarifyQuestionRes = await findOne('ClarifyQuestion', { questionId });
      if (clarifyQuestionRes) {
        adminDetails = await findOne('Astrologer', { userId: clarifyQuestionRes.adminId });
      }
      return {
        translatorDetails: {
          modQuestion: modQuesionRes ? { modQuestion: modQuesionRes, userDetails: modQDetails || undefined } : null,
          astroAnswer: astroAnswerRes ? { astroAnswer: astroAnswerRes, userDetails: astroDetails || undefined } : null,
          modAnswer: modAnswerRes ? { modAnswer: modAnswerRes, userDetails: modADetails || undefined } : null,
          userQuestion: userQuestionRes ? { userQuestion: userQuestionRes, userDetails: userDetails || undefined } : null,
          clarifyQuestion: (clarifyQuestionRes && clarifyQuestionRes.clarifyText) ? { clarifyQuestion: clarifyQuestionRes, userDetails: adminDetails || undefined } : null,
        },
      };
    } catch (e) {
      throw e;
    }
  });
  return result;
};

const findUserQuestionByid = async (userId, selectType) => {
  try {
    const promises = [];
    const result = await db.execute(async ({ find }) => {
      let userQuestionList = null;
      if (selectType === 'paidOnly') {
        userQuestionList = await find('UserQuestion', { userId, paymentStatus: '1' });
      } else {
        userQuestionList = await find('UserQuestion', { userId });
      }

      userQuestionList.forEach(async (question) => {
        promises.push(findQuestionDetails(question.id));
      });
      const QuestionDetailRes = await Promise.all(promises);
      return QuestionDetailRes;
    });
    return result;
  } catch (e) {
    throw e;
  }
};

export default async (registrationToken, user, questionId, selectType, userId) => {
  // console.log('AnsQuestionDtails finder called', registrationToken, user, questionId);
  try {
    let MainRegistrationToken = null;
    const promises = [];
    const result = await db.execute(async ({ find, findOne }) => {
      if (registrationToken === 'undefined' || registrationToken === undefined) {
        const findOneRes = await findOne('UserQuestion', { id: questionId });
        MainRegistrationToken = findOneRes.registrationToken;
      } else if (userId) {
        const findoneRes = await findOne('BidhaUser', { id: userId });
        MainRegistrationToken = findoneRes.registrationToken;
      } else {
        MainRegistrationToken = registrationToken;
      }
      // console.log('user registration token final', MainRegistrationToken);
      const userDetailsRes = await find('BidhaUser', { registrationToken: MainRegistrationToken });
      // console.log('userDetailsRes', userDetailsRes);
      userDetailsRes.forEach(async (data) => {
        promises.push(findUserQuestionByid(data.id, selectType));
      });
      const testResult = await Promise.all(promises);
      // console.log('test change result', testResult);
      return { userChangeLogs: testResult, userDetails: userDetailsRes };
    });

    let currentQuestionDetails = null;
    if (questionId) {
      currentQuestionDetails = await findQuestionDetails(questionId);
    }
    return {
      ...result,
      ...currentQuestionDetails,
    };
  } catch (e) {
    throw e;
  }
};
