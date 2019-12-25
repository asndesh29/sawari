-- Up

CREATE TABLE IF NOT EXISTS SellVehicle(
  id INTEGER PRIMARY KEY,
  stypeId INTEGER NOT NULL,
  sbId INTEGER NOT NULL,
  vehicleName TEXT,
  kmsDriven TEXT,
  ownerShip TEXT,
  city TEXT,
  expectedPrice INTEGER,
  ownerName TEXT,
  ownerEmail TEXT,
  ownerPhoneNo INTEGER,
  image1 TEXT,
  image2 TEXT,
  image3 TEXT,
  image4 TEXT,
  image5 TEXT,

  --CONSTRAINT
  CONSTRAINT SellVehicle_fk_sbId FOREIGN KEY (sbId) REFERENCES ServiceTypeBrand(id)
);

CREATE TABLE IF NOT EXISTS DealerEnquiry(
  id INTEGER PRIMARY KEY,
  dealerId INTEGER NOT NULL,
  name TEXT,
  email TEXT,
  phoneNo INTEGER,
  address TEXT,
  message TEXT,

  --CONSTRAINT
  CONSTRAINT DealerForm_fk_dealerId FOREIGN KEY (dealerId) REFERENCES Dealer(id)
);

CREATE TABLE IF NOT EXISTS ServiceCenterEnquiry(
  id INTEGER PRIMARY KEY,
  serviceCenterId INTEGER NOT NULL,
  name TEXT,
  email TEXT,
  phoneNo INTEGER,
  address TEXT,
  message TEXT,

  --CONSTRAINT
  CONSTRAINT DealerForm_fk_serviceCenterId FOREIGN KEY (serviceCenterId) REFERENCES ServiceCenter(id)
);

-- Down

