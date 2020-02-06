--Up
CREATE TABLE IF NOT EXISTS News(
  id INTEGER PRIMARY KEY,
  userId INTEGER NOT NULL,
  header TEXT NOT NULL,
  timeStamp INTEGER NOT NULL,
  content TEXT NOT NULL,
  image TEXT,

  --CONSTRAINTS
  CONSTRAINT News_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS Videos(
  id INTEGER PRIMARY KEY,
  userId INTEGER NOT NULL,
  header TEXT NOT NULL,
  videoId TEXT NOT NULL,
  url TEXT,
  image TEXT,

  --CONTSTRAINTS
  CONSTRAINT Videos_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);

ALTER TABLE ServiceTypeBrandModelVarient ADD COLUMN offerImage TEXT;
ALTER TABLE ServiceTypeBrandModelVarient ADD COLUMN offerMessage TEXT;

-- Down
