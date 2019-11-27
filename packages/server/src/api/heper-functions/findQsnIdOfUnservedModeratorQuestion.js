export default (allUnservedModeratorQuestion, allOldAstroAnswer) => {
  let firstBonus = false;
  let secondBonus = false;
  let userId = null;

  const moderatorQuestionTobeSolve = allUnservedModeratorQuestion.find((modQsn, idx) => {
    const currentModQuestionOldAstroDetail = allOldAstroAnswer[idx];
    if (currentModQuestionOldAstroDetail.length === 0) {
      return true;
    }

    if (parseInt(modQsn.modQsnTimeStamp, 10) + 3 * 60 * 1000 < Date.now()) {
      // finding first binus of other astrologer
      if (currentModQuestionOldAstroDetail.length === 2) {
        const isFirstBonus = (
          currentModQuestionOldAstroDetail[currentModQuestionOldAstroDetail.length - 1].astroId === currentModQuestionOldAstroDetail[currentModQuestionOldAstroDetail.length - 2].astroId
          && currentModQuestionOldAstroDetail[currentModQuestionOldAstroDetail.length - 1].type === 'free'
        );
        if (isFirstBonus) {
          firstBonus = true;
          userId = currentModQuestionOldAstroDetail[currentModQuestionOldAstroDetail.length - 1].astroId;
        }
      }
      // finding second bonus of another astrologer
      if (currentModQuestionOldAstroDetail.length >= 3) {
        const isSecondBonus = modQsn.type === 'paid' && currentModQuestionOldAstroDetail[currentModQuestionOldAstroDetail.length - 1].astroId === currentModQuestionOldAstroDetail[currentModQuestionOldAstroDetail.length - 2].astroId;
        secondBonus = isSecondBonus;
        if (secondBonus) {
          userId = currentModQuestionOldAstroDetail[currentModQuestionOldAstroDetail.length - 1].astroId;
        }
      }
      return true;
    }
  });
  if (moderatorQuestionTobeSolve) {
    return { questionId: moderatorQuestionTobeSolve.questionId, firstBonus, secondBonus, userId, registrationToken: moderatorQuestionTobeSolve.registrationToken };
  }
  return null;
};
