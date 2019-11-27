--Up
CREATE TABLE IF NOT EXISTS PostpondQuestion(
  id INTEGER PRIMARY KEY,
  userId INTEGER NOT NULL,
  type TEXT NOT NULL,
  questionId INTEGER NOT NULL,
  timeStamp INTEGER NOT NULL,

  -- CONTRAINTS
  CONSTRAINT PostpondQuestion_fk_userId FOREIGN KEY (userId) REFERENCES User(id),
  CONSTRAINT PostpondQuestion_fk_qustionId FOREIGN KEY (questionId) REFERENCES UserQuestion(id)
);
-- Down

