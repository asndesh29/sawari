export default (allUnservedQuestion, previusAskQuestionAnswers) => {
  let firstBonus = false;
  let secondBonus = false;
  let userId = null;

  // console.log('findIndex of unserved question called', allUnservedQuestion, previusAskQuestionAnswers);
  const indexOfQuestionTobeServe = allUnservedQuestion.find((qsn, idx) => {
    if (previusAskQuestionAnswers[idx].length === 0 || previusAskQuestionAnswers[idx] === 1) {
      return true;
    }
    if ((parseInt(qsn.timeStamp, 10) + 60 * 60 * 1000) < Date.now()) {
      // finding first binus of other moderator
      if (previusAskQuestionAnswers[idx].length === 2) {
        const isFirstBonus = (
          previusAskQuestionAnswers[idx][previusAskQuestionAnswers[idx].length - 1].modId === previusAskQuestionAnswers[idx][previusAskQuestionAnswers[idx].length - 2].modId
          && previusAskQuestionAnswers[idx][previusAskQuestionAnswers[idx].length - 1].type === 'free'
        );
        if (isFirstBonus) {
          firstBonus = true;
          userId = previusAskQuestionAnswers[idx][previusAskQuestionAnswers[idx].length - 1].modId;
        }
      }
      // finding second bonus of another astrologer
      if (previusAskQuestionAnswers[idx].length >= 3) {
        const isSecondBonus = qsn.type === 'paid' && previusAskQuestionAnswers[idx][previusAskQuestionAnswers[idx].length - 1].modId === previusAskQuestionAnswers[idx][previusAskQuestionAnswers[idx].length - 2].modId;
        secondBonus = isSecondBonus;
        if (secondBonus) {
          userId = previusAskQuestionAnswers[idx][previusAskQuestionAnswers[idx].length - 1].modId;
        }
      }
      return true;
    }
    return null;
  });

  if (indexOfQuestionTobeServe) {
    return { questionId: indexOfQuestionTobeServe.id, firstBonus, secondBonus, userId, registrationToken: indexOfQuestionTobeServe.registrationToken };
  }
  return null;
};
