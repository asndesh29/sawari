export default (allUnservedAstroAnswer, allModeratorQuestion, user, preAstroAnswers) => {
  const astroAnswerTobeServed = allUnservedAstroAnswer.find((ans, idx) => {
    const isModQsnFound = allModeratorQuestion.find(modqsn => modqsn.modId === user.id && modqsn.questionId === ans.questionId);
    if (isModQsnFound) {
      return true;
    }

    if (preAstroAnswers[idx].length === 0) {
      return true;
    }

    if ((parseInt(ans.astroAnsTimeStamp, 10) + 60 * 60 * 1000) < Date.now()) {
      return true;
    }
    return null;
  });
  if (astroAnswerTobeServed) {
    return { questionId: astroAnswerTobeServed.questionId, registrationToken: astroAnswerTobeServed.registrationToken };
  }
  return null;
};
