--Up
CREATE TABLE IF NOT EXISTS EmployeeSalary(
  id INTEGER PRIMARY KEY,
  userId INTEGER NOT NULL,
  astroFixedSalary INTEGER,
  astroFirstBonus INTEGER,
  astroSecondBonus INTEGER ,
  modFirstBonus INTEGER,
  modFixedSalary INTEGER,
  modSecondBonus INTEGER,
-- CONSTRAINTS
CONSTRAINT EmployeeSalary_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS EmployeeFixedAndBonusSalary(
  id INTEGER PRIMARY KEY,
  userId INTEGER NOT NULL,
  timeStamp INTEGER NOT NULL,
  fixedSalary INTEGER,
  firstBonus INTEGER,
  secondBonus INTEGER,

-- CONTRAINTS

  CONSTRAINT EmployeeFixedAndBonusSalary_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);
-- Down





