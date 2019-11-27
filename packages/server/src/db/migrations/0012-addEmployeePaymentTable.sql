--Up
ALTER TABLE EmployeeSalary ADD COLUMN modFixedSalaryAnswer INTEGER;

CREATE TABLE IF NOT EXISTS EmployeePayment(
  id INTEGER PRIMARY KEY,
  userId INTEGER NOT NULL,
  empId INTEGER NOT NULL,
  amount INTEGER NOT NULL,
  remarks TEXT,

  --CONSTRAINT
  CONSTRAINT EmployeePayment_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);
-- Down
