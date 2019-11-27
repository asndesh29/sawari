import db from '../db';
import fetchAnsQuestionTransDetails from './fetchAnsQsnTransDetails';
import {
  findIndexOfUnservedUserQuestion as findIdUnservedUserQuestion,
  moderatorBonusHandler,
  findIdOfUnservedAstroAnswer,
  findIdOfUnservedModeratorQuestion,
  findAstrologerBonusDetails,
} from './heper-functions';

export default async (user) => {
  const result = await db.execute(async ({ find, findOne, update }) => {

    // finding all unserved questions ............................................
    const allUnservedQuestionNormal = await find('UserQuestion', { serveStatus: 1, paymentStatus: '1', locker: 0 });
    const allUnservedQuestionLocker = await find('UserQuestion', { serveStatus: 1, paymentStatus: '1', locker: user.id });
    const allPostPoneQuestion = await find('PostpondQuestion', { userId: user.id });
    // console.log('allUnservedQuestionLocker', allUnservedQuestionLocker);
    const allUnservedQuestion = [...allUnservedQuestionLocker, ...allUnservedQuestionNormal].filter(qsn => !allPostPoneQuestion.find(pqsn => pqsn.userId === user.id && pqsn.questionId === qsn.id && pqsn.type === 'modQuestion'));
    // console.log('allUnservedQuestion after filter for postpone', allUnservedQuestion);
    const allUnservedAstrologerAnswerNormal = await find('AstrologerAnswer', { serveStatus: 1, locker: 0 });
    const allUnservedAstrologerAnswerLocker = await find('AstrologerAnswer', { serveStatus: 1, locker: user.id });
    // console.log('allUnservedAstrologerAnswerLocker', allUnservedAstrologerAnswerLocker);
    const allUnservedAstrologerAnswer = [...allUnservedAstrologerAnswerLocker, ...allUnservedAstrologerAnswerNormal].filter(qsn => !allPostPoneQuestion.find(pqsn => pqsn.userId === user.id && pqsn.questionId === qsn.questionId && pqsn.type === 'astroAnswer'));
    // console.log('all Unserved and paid Question', allUnservedQuestion);

    // Finding current Bonus and salary for current User...............
    const bonusAndSalary = await findOne('EmployeeSalary', { id: 1 });
    const isModerator = user.type === 'moderator';
    const fixedSalary = isModerator ? bonusAndSalary.modFixedSalary : bonusAndSalary.astroFixedSalary;
    const firstBonus = isModerator ? bonusAndSalary.modFirstBonus : bonusAndSalary.astroFirstBonus;
    const secondBonus = isModerator ? bonusAndSalary.modSecondBonus : bonusAndSalary.astroSecondBonus;
    const fixedModSalaryAnswer = bonusAndSalary.modFixedSalaryAnswer;
    let qsnAnswerIdTobeServe = null;
    let bonusDetail = null;
    let allDetails = null;
    let continueFlowFaild = true;

    const ansQuestionLockUnlockHandler = async (lockStatus, table, registrationToken) => {
      const allQuestionCurrentAsk = await find(table, { registrationToken, serveStatus: 1 });
      let allQuestionCurrentAskFiltered = null;
      if (table === 'UserQuestion') {
        allQuestionCurrentAskFiltered = allQuestionCurrentAsk.filter(qsn => !allPostPoneQuestion.find(pqsn => pqsn.userId === user.id && pqsn.questionId === qsn.id));
        // console.log('allQuestionCurrentAskFiltered', allQuestionCurrentAskFiltered);
        const updateLockPromises = allQuestionCurrentAskFiltered.map(qsn => update(table, { locker: lockStatus }, { id: qsn.id }));
        Promise.all(updateLockPromises);
      } else {
        allQuestionCurrentAskFiltered = allQuestionCurrentAsk.filter(qsn => !allPostPoneQuestion.find(pqsn => pqsn.userId === user.id && pqsn.questionId === qsn.questionId));
        const updateLockPromises = allQuestionCurrentAskFiltered.map(qsn => update(table, { locker: lockStatus }, { questionId: qsn.questionId }));
        Promise.all(updateLockPromises);
      }
    };

    const serveUserQuestion = async () => {
      const previusAskQuestionAnswerPrmises = allUnservedQuestion.map(cqsn => find('ModeratorAnswer', { registrationToken: cqsn.registrationToken }));
      const previusAskQuestionAnswers = await Promise.all(previusAskQuestionAnswerPrmises);
      // finding own user
      const indexOfQuestionTobeServe = previusAskQuestionAnswers.findIndex(arr => (arr.length > 0 ? arr[arr.length - 1].modId === user.id : false));
      if (indexOfQuestionTobeServe === -1) {
        // serve for new user...
        // console.log('serve for new user question');
        qsnAnswerIdTobeServe = await findIdUnservedUserQuestion(allUnservedQuestion, previusAskQuestionAnswers);
        if (qsnAnswerIdTobeServe) {
          ansQuestionLockUnlockHandler(user.id, 'UserQuestion', qsnAnswerIdTobeServe.registrationToken);
          setTimeout(() => ansQuestionLockUnlockHandler(false, 'UserQuestion', qsnAnswerIdTobeServe.registrationToken), 8 * 60 * 60 * 1000);
          const currentQuetionAllDetails = await fetchAnsQuestionTransDetails(undefined, user, qsnAnswerIdTobeServe.questionId, 'paidOnly');
          allDetails = {
            ...currentQuetionAllDetails,
            translatorDetails: {
              ...currentQuetionAllDetails.translatorDetails,
              fixedSalary,
              firstBonus: qsnAnswerIdTobeServe.firstBonus ? firstBonus : 0,
              secondBonus: qsnAnswerIdTobeServe.secondBonus ? secondBonus : 0,
              userId: qsnAnswerIdTobeServe.userId || user.id,
            },
          };
        } else {
          console.log('User question not found switching to astro answer mode');
          if (continueFlowFaild) {
            continueFlowFaild = false;
            await serveAstroAnswer();
          }
        }
      } else {
        // serve for own user...
        // console.log('serve for own user question');
        qsnAnswerIdTobeServe = allUnservedQuestion[indexOfQuestionTobeServe].id;
        bonusDetail = moderatorBonusHandler(allUnservedQuestion[indexOfQuestionTobeServe], previusAskQuestionAnswers[indexOfQuestionTobeServe], user);
        ansQuestionLockUnlockHandler(user.id, 'UserQuestion', allUnservedQuestion[indexOfQuestionTobeServe].registrationToken);
        setTimeout(() => ansQuestionLockUnlockHandler(false, 'UserQuestion', allUnservedQuestion[indexOfQuestionTobeServe].registrationToken), 8 * 60 * 60 * 1000);
        const currentQuetionAllDetails = await fetchAnsQuestionTransDetails(undefined, user, qsnAnswerIdTobeServe, 'paidOnly');
        allDetails = {
          ...currentQuetionAllDetails,
          translatorDetails: {
            ...currentQuetionAllDetails.translatorDetails,
            fixedSalary,
            firstBonus: bonusDetail.firstBonus ? firstBonus : 0,
            secondBonus: bonusDetail.secondBonus ? secondBonus : 0,
            userId: user.id,
          },
        };
      }
    };

    const serveAstroAnswer = async () => {
      // serving astrologer answer by moderator....
      console.log('serving astro answer');
      // const allUnservedAstroAnswer = await find('AstrologerAnswer', { serveStatus: 1, locker: 0 });
      const allModeratorQuestionofCurrentAstroAnserPromises = allUnservedAstrologerAnswer.map(ans => findOne('ModeratorQuestion', { questionId: ans.questionId }));
      const allModQsnofCurrentAstroAnswer = await Promise.all(allModeratorQuestionofCurrentAstroAnserPromises);
      const allServedAstroAnswerPromises = [];
      allUnservedAstrologerAnswer.forEach(ans => allServedAstroAnswerPromises.push(find('ModeratorAnswer', { registrationToken: ans.registrationToken })));
      const preAstroAnswers = await Promise.all(allServedAstroAnswerPromises);
      qsnAnswerIdTobeServe = await findIdOfUnservedAstroAnswer(allUnservedAstrologerAnswer, allModQsnofCurrentAstroAnswer, user, preAstroAnswers);
      if (qsnAnswerIdTobeServe) {
        ansQuestionLockUnlockHandler(user.id, 'AstrologerAnswer', qsnAnswerIdTobeServe.registrationToken);
        setTimeout(() => ansQuestionLockUnlockHandler(false, 'AstrologerAnswer', qsnAnswerIdTobeServe.registrationToken), 8 * 60 * 60 * 1000);
        const currentQuetionAllDetails = await fetchAnsQuestionTransDetails(undefined, user, qsnAnswerIdTobeServe.questionId, 'paidOnly');
        const preModQsnBonus = await findOne('EmployeeFixedAndBonusSalary', { questionId: qsnAnswerIdTobeServe.questionId, bonusType: 'modQuestion' });

        allDetails = {
          ...currentQuetionAllDetails,
          translatorDetails: {
            ...currentQuetionAllDetails.translatorDetails, fixedSalary: fixedModSalaryAnswer, firstBonus: preModQsnBonus.firstBonus, secondBonus: preModQsnBonus.secondBonus, userId: preModQsnBonus.userId,
          },
        };
      } else {
        console.log('astro answer not found switching to question mode');
        await serveUserQuestion();
      }
    };

    // Finding next serve task for moderator....
    if (user.type === 'moderator') {
      console.log('moderator mode');
      if (allUnservedQuestion.length > 0 || allUnservedAstrologerAnswer.length > 0) {
        // deciding what need to serve first answer or qustion according to pre-serve
        const allModeratorQuestions = await find('ModeratorQuestion', { modId: user.id });
        const allModeratorAnswers = await find('ModeratorAnswer', { modId: user.id });
        console.log('allmoderaotrquestions=', allModeratorQuestions, 'all moderator anser', allModeratorAnswers);
        if (allModeratorQuestions.length === 0) {
          await serveUserQuestion();
        } else if (allModeratorAnswers.length === 0) {
          await serveAstroAnswer();
        }
        else {
          const isServeUserQuestion = allModeratorQuestions[allModeratorQuestions.length - 1].modQsnTimeStamp < allModeratorAnswers[allModeratorAnswers.length - 1].modAnsTimeStamp;
          if (isServeUserQuestion) {
            console.log('User question mode');
            await serveUserQuestion();
          } else {
            console.log('Astro answer mode');
            await serveAstroAnswer();
          }
        }
      }
    }

    // Finding next serve task for astrologer...
    if (user.type === 'astrologer') {
      const allUnservedModeratorQuestionNormal = await find('ModeratorQuestion', { serveStatus: 1, locker: 0 });
      const allUnservedModeratorQuestionLocker = await find('ModeratorQuestion', { serveStatus: 1, locker: user.id });
      const allUnservedModeratorQuestion = [...allUnservedModeratorQuestionLocker, ...allUnservedModeratorQuestionNormal].filter(qsn => !allPostPoneQuestion.find(pqsn => pqsn.userId === user.id && pqsn.questionId === qsn.questionId));
      const allOldAstroAnswerPromises = allUnservedModeratorQuestion.map(modQsn => find('AstrologerAnswer', { registrationToken: modQsn.registrationToken }));
      const allOldAstroAnswer = await Promise.all(allOldAstroAnswerPromises);
      const indexOfModQuestionTobeServe = allOldAstroAnswer.findIndex(arr => (arr.length > 0 ? arr[arr.length - 1].astroId === user.id : false));

      if (indexOfModQuestionTobeServe === -1) {
        // find next user for astro
        console.log('serving new mod question');
        qsnAnswerIdTobeServe = await findIdOfUnservedModeratorQuestion(allUnservedModeratorQuestion, allOldAstroAnswer);
        if (qsnAnswerIdTobeServe) {
          ansQuestionLockUnlockHandler(user.id, 'ModeratorQuestion', qsnAnswerIdTobeServe.registrationToken);
          setTimeout(() => ansQuestionLockUnlockHandler(false, 'ModeratorQuestion', qsnAnswerIdTobeServe.registrationToken), 8 * 60 * 60 * 1000);
          const currentQuetionAllDetails = await fetchAnsQuestionTransDetails(undefined, user, qsnAnswerIdTobeServe.questionId, 'paidOnly');
          allDetails = {
            ...currentQuetionAllDetails,
            translatorDetails: {
              ...currentQuetionAllDetails.translatorDetails,
              fixedSalary,
              firstBonus: qsnAnswerIdTobeServe.firstBonus ? firstBonus : 0,
              secondBonus: qsnAnswerIdTobeServe.secondBonus ? secondBonus : 0,
              userId: qsnAnswerIdTobeServe.userId || user.id,
            },
          };
        }
      } else {
        // find bonusdetails and question id
        console.log('serving own mod question');
        qsnAnswerIdTobeServe = allUnservedModeratorQuestion[indexOfModQuestionTobeServe].questionId;
        bonusDetail = findAstrologerBonusDetails(allUnservedModeratorQuestion[indexOfModQuestionTobeServe], allOldAstroAnswer[indexOfModQuestionTobeServe], user);
        // console.log('astrologer bonus details', bonusDetail);
        ansQuestionLockUnlockHandler(user.id, 'ModeratorQuestion', allUnservedModeratorQuestion[indexOfModQuestionTobeServe].registrationToken);
        setTimeout(() => ansQuestionLockUnlockHandler(false, 'ModeratorQuestion', allUnservedModeratorQuestion[indexOfModQuestionTobeServe].registrationToken), 8 * 60 * 60 * 1000);
        // console.log('indexOfFirstQuestion', qsnAnswerIdTobeServe);
        const currentQuetionAllDetails = await fetchAnsQuestionTransDetails(undefined, user, qsnAnswerIdTobeServe, 'paidOnly');
        allDetails = {
          ...currentQuetionAllDetails,
          translatorDetails: {
            ...currentQuetionAllDetails.translatorDetails,
            fixedSalary,
            firstBonus: bonusDetail.firstBonus ? firstBonus : 0,
            secondBonus: bonusDetail.secondBonus ? secondBonus : 0,
            userId: user.id,
          },
        };
      }
    }
    return allDetails;
  });
  return result;
};
