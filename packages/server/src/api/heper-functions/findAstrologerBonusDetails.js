export default (currentModeratorQuestion, allOldAstroAnswer, user) => {
  let firstBonus = false;
  let secondBonus = false;

  if (allOldAstroAnswer.length === 2) {
    firstBonus = (
      allOldAstroAnswer.length === 2
      && currentModeratorQuestion.type === 'paid'
      && allOldAstroAnswer[allOldAstroAnswer.length - 1].type === 'free'
      && allOldAstroAnswer[allOldAstroAnswer.length - 2].type === 'paid'
      && allOldAstroAnswer[allOldAstroAnswer.length - 2].astroId === user.id
    );
  }
  if (allOldAstroAnswer.length >= 3) {
    secondBonus = currentModeratorQuestion.type === 'paid';
  }
  return { firstBonus, secondBonus };
};
