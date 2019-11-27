-- Up

CREATE TABLE IF NOT EXISTS User(
  id INTEGER PRIMARY KEY,
  userName TEXT NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL
);

-- Creating user by default....
INSERT OR REPLACE INTO User (id, userName, password, name, type) VALUES
(1, "bidha", "$2b$10$W0rnKFoVT3dWFDrjiad8mOqyFR04b9tiH3Ic.yZjn8TFITsrvaOwm", "Bhagya Sah", "super");

CREATE TABLE IF NOT EXISTS Astrologer(
  id INTEGER PRIMARY KEY,
  userId INTEGER NOT NULL,
  name TEXT NOT NULL,
  gender TEXT NOT NULL,
  experience TEXT NOT NULL,
  qualification TEXT NOT NULL,
  phoneNo INTEGER NOT NULL,
  image TEXT,

  -- Constraints
CONSTRAINT Astrologer_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS BidhaUser(
  id INTEGER PRIMARY KEY,
  firstName TEXT NOT NULL,
  gender TEXT NOT NULL,
  dob TEXT NOT NULL,
  country TEXT,
  state TEXT,
  city TEXT,
  accurateTime TEXT,
  time TEXT,
  registrationToken TEXT,
  image TEXT,
  fbToken TEXT,
  vedicSign TEXT
);

-- Creating Bidhauser by defaut for auto increment from 1000....
INSERT OR REPLACE INTO BidhaUser (id, firstName, gender, dob ) VALUES
(1000, "bidha", "test", "test");

CREATE TABLE IF NOT EXISTS SampleQuestion(
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  question TEXT NOT NULL,
  astrologerId INTEGER NOT NULL,
  timeStamp INTEGER NOT NULL,

  --Constraints

  CONSTRAINT SampleQuestion_fk_UserID FOREIGN KEY (astrologerId) REFERENCES Astrologer(id)
);

CREATE TABLE IF NOT EXISTS UserQuestion(
    id INTEGER PRIMARY KEY,
    userId INTEGER NOT NULL,
    serveStatus TEXT NOT NULL,
    question TEXT NOT NULL,
    timeStamp INTEGER NOT NULL,
    type TEXT NOT NULL,
    starRating INTEGER,
    paymentStatus TEXT NOT NULL,
    registrationToken TEXT NOT NULl,
    paymentToken TEXT,
    deleteStatus TEXT,

    --Constraints
    CONSTRAINT Question_fk_UserId FOREIGN KEY (userId) REFERENCES BidhaUser(id)
);

CREATE TABLE IF NOT EXISTS ModeratorQuestion(
  id INTEGER PRIMARY KEY,
  questionId INTEGER NOT NULL,
  modId INTEGER NOT NULL,
  modQuestion TEXT NOT NULL,
  modQsnTimeStamp TEXT NOT NULL,
  serveStatus TEXT NOT NULL,
  note TEXT,
  --Constraints
  CONSTRAINT ModQuestion_fk_questionId FOREIGN KEY (questionId) REFERENCES UserQuestion(id),
  CONSTRAINT ModQuestion_fk_questionId FOREIGN KEY (modId) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS AstrologerAnswer(
  id INTEGER PRIMARY KEY,
  modQuestionId INTEGER NOT NULL,
  astroAnswer TEXT NOT NULL,
  astroId INTEGER NOT NULL,
  astroAnsTimeStamp INTEGER NOT NULL,
  serveStatus TEXT NOT NULL,
  questionId INTEGER NOT NULL,
  note TEXT,

  --Constraint
  CONSTRAINT AstroAnswer_fk_modQuestionId FOREIGN KEY (modQuestionId) REFERENCES ModeratorQuestion(id),
  CONSTRAINT AstroAnswer_fk_astroId FOREIGN KEY (astroId) REFERENCES User(id),
  CONSTRAINT AstroAnswer_fk_questionId FOREIGN KEY (questionId) REFERENCES UserQuestion(id)
);

CREATE TABLE IF NOT EXISTS ModeratorAnswer(
  id INTEGER PRIMARY KEY,
  astroAnswerId INTEGER NOT NULL,
  questionId INTEGER NOT NULL,
  modId INTEGER NOT NULL,
  modAnswer TEXT NOT NUll,
  modAnsTimeStamp INTEGER NOT NULL,
  serveStatus TEXT NOT NULL,
  deleteStatus TEXT,
  note TEXT,

  --Constraint
  CONSTRAINT ModAnswer_fk_modId FOREIGN KEY (modId) REFERENCES User(id),
  CONSTRAINT ModAnswer_fk_astroAnswerId FOREIGN KEY (astroAnswerId) REFERENCES AstrologerAnswer(id),
  CONSTRAINT ModAnswer_fk_questionId FOREIGN KEY (questionId) REFERENCES UserQuestion(id)
);

CREATE TABLE IF NOT EXISTS ClarifyQuestion(
  id INTEGER PRIMARY KEY,
  questionId INTEGER,
  clarifyText TEXT,
  mod TEXT,
  adminId INTEGER,
  timeStamp INTEGER,
  serveStatus INTEGER,
  modStatus INTEGER,
  note TEXT
);

CREATE TABLE IF NOT EXISTS AppConfiguration(
  id INTEGER PRIMARY KEY,
  questionRate INTEGER NOT NULL,
  initialMessage TEXT NOT NULL,
  freeQuestionRound INTEGER NOT NULL,
  userId INTEGER NOT NULL,

  --Constraint
  CONSTRAINT AppConfiguration_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS ContactUsMessage(
  id INTEGER PRIMARY KEY,
  userName TEXT NOT NULL,
  userEmail TEXT NOT NULL,
  userMessage TEXT NOT NULL,
  timeStamp INTEGER NOT NULL,
  fbToekn TEXT,
  registrationToken TEXT
);
-- Down

