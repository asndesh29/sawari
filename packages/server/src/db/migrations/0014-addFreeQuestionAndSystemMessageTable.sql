--Up
CREATE TABLE IF NOT EXISTS FreeQuestion(
  id INTEGER PRIMARY KEY,
  userId INTEGER NOT NULL,
  registrationToken INTEGER NOT NULL,
  timeStamp INTEGER  NOT NULL,
  status INTEGER NOT NULL,
  noOfFreeQsn INTEGER NOT NULL,

  --CONSTRAINT
  CONSTRAINT FreeQuestion_fk_userId FOREIGN KEY (userId) REFERENCES BidhaUser(id)
);

CREATE TABLE IF NOT EXISTS SystemMessage(
  id INTEGER PRIMARY KEY,
  message TEXT NOT NULL,
  userId INTEGER NOT NULL,
  type TEXT,

  --CONSTRAINT
  CONSTRAINT SystemMessage_fk_userId FOREIGN KEY (userId) REFERENCES BidhaUser(id)
);
-- Down

