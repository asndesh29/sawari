export default (currentQuestion, oldAnswerDetail, user) => {
  let secondBonus = false;
  let firstBonus = false;
  if (oldAnswerDetail.length === 2) {
    firstBonus = (
      oldAnswerDetail.length === 2
      && currentQuestion.type === 'paid'
      && oldAnswerDetail[1].type === 'free'
      && oldAnswerDetail[0].type === 'paid'
      && oldAnswerDetail[0].modId === user.id
      && oldAnswerDetail[1].modId === user.id
    );
  }
  if (oldAnswerDetail.length >= 3) {
    secondBonus = currentQuestion.type === 'paid';
  }
  return { firstBonus, secondBonus };
};
