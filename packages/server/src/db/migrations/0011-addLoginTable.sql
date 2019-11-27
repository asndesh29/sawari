--Up
CREATE TABLE IF NOT EXISTS LoginStatus (
  id INTEGER PRIMARY KEy,
  userId INTEGER NOT NULL,
  timeStamp INTEGER NOT NULL,
  type TEXT NOT NULL,
  remarks TEXT,

  --CONSTRAINTS
  CONSTRAINT LoginStatus_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);
-- Down

