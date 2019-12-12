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
(1, "automobile", "$2b$10$KpGPmpBC2sRO2YuQxqCWG.QjYvC3OL2hQFJuJB968bCzN/rMHG7Pq", "Admin", "admin");

-- Creating service table that show all the service available in site
CREATE TABLE IF NOT EXISTS Service(
  id INTEGER PRIMARY KEY,
  type TEXT NOT NULL,
  userId INTEGER NOT NULL,
  timeStamp INTEGER NOT NULL,
  name TEXT NOT NULL,

  --CONSTRAINT
  CONSTRAINT Service_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);
-- INSERTING ONE service Vehical.. for now later must be dynamic added by admin
INSERT OR REPLACE INTO Service (id,type,userId,timeStamp,name) VALUES
(1, 'vehicle', 1, 1574927572971, 'Vehicle');

-- Creating table for service type that present subtime of sevive in case of vehical like 2w 3w or 4w
CREATE TABLE IF NOT EXISTS ServiceType(
  id INTEGER PRIMARY KEY,
  sid INTEGER NOT NULL,
  name TEXT NOT NULL,
  userId INTEGER NOT NULL,
  timeStamp INTEGER NOT NULL,

  --CONSTRAINT
  CONSTRAINT ServiceType_fk_sid FOREIGN KEY (sid) REFERENCES Service(id)
);

--Inserting 2w 3v and 4w for veihical service default bcz it same for all vehical
INSERT OR REPLACE INTO ServiceType (id, sid, name, userId, timeStamp) VALUES
(1,1, 'Car', 1,1574927572971);

INSERT OR REPLACE INTO ServiceType (id, sid, name, userId, timeStamp) VALUES
(2,1, 'Bike', 1,1574927572971);

INSERT OR REPLACE INTO ServiceType (id, sid, name, userId, timeStamp) VALUES
(3,1, 'Bus', 1,1574927572971);

INSERT OR REPLACE INTO ServiceType (id, sid, name, userId, timeStamp) VALUES
(4,1, 'Truck', 1,1574927572971);

INSERT OR REPLACE INTO ServiceType (id, sid, name, userId, timeStamp) VALUES
(5,1, 'Tempo', 1,1574927572971);

-- Creating table for service type brand like suzuki mahindra etc
CREATE TABLE IF NOT EXISTS ServiceTypeBrand(
  id INTEGER PRIMARY KEY,
  sid INTEGER NOT NULL,
  stypeId INTEGER NOT NULL,
  userId INTEGER NOT NULL,
  brandName TEXT NOT NULL,
  brandImageUrl TEXT NOT NULL,

  --CONSTRAINT
  CONSTRAINT ServiceTypeBrand_fk_sid FOREIGN KEY (sid) REFERENCES Service(id),
  CONSTRAINT ServiceTypeBrand_fk_sid FOREIGN KEY (stypeId) REFERENCES ServiceType(id)
) ;

--Creating table for product details

CREATE TABLE IF NOT EXISTS ServiceTypeBrandProductDetails(
  id INTEGER PRIMARY KEY,
  sid INTEGER NOT NULL,
  stypeId INTEGER NOT NULL,
  sbId INTEGER NOT NULL,
  userId INTEGER NOT NULL,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  displacement TEXT,
  power TEXT,
  torque TEXT,
  fueltankCapacity TEXT,
  tyre TEXT,
  groundClearance TEXT,
  battery TEXT,
  availableColor TEXT,
  image TEXT,
  markPopular INTEGER,
  markNew INTEGER,
  offer INTEGER,
  mileage Text,
  bodyType TEXT,
  fuelType TEXT,

  --CONSTRAINT
  CONSTRAINT ServiceTypeBrandProductDetials_fk_sid FOREIGN KEY (sid) REFERENCES Service(id),
  CONSTRAINT ServiceTypeBrandProductDetials_fk_stypeId FOREIGN KEY (stypeId) REFERENCES ServiceType(id),
  CONSTRAINT ServiceTypeBrandProductDetials_fk_sbId FOREIGN KEY (sbId) REFERENCES ServiceTypeBrand(id)
);

-- Creating talble for user enquiry
CREATE TABLE IF NOT EXISTS UserEnquiry(
  id INTEGER PRIMARY KEY,
  pId INTEGER NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  phoneNo TEXT,
  address TEXT,
  markStatus TEXT,
  latitude TEXT,
  longitude TEXT,
  markedbyUserId INTEGER,
  message TEXT,

  --CONSTRAINTS
  CONSTRAINT UserQuiry_fk_pId FOREIGN KEY (pId) REFERENCES ServiceTypeBrandProductDetails(id)
);

CREATE TABLE IF NOT EXISTS Dealer(
  id INTEGER PRIMARY KEY,
  sId INTEGER NOT NULL,
  stypeId INTEGER NOT NULL,
  sbId INTEGER NOT NULL,
  province TEXT,
  type TEXT,
  userId INTEGER NOT NULL,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  image TEXT,
  phoneNo TEXT,
  description TEXT,
  latitude INTEGER,
  logitude INTEGER,

  --CONSTRAINT
  CONSTRAINT Dealer_fk_sbId FOREIGN KEY (sbId) REFERENCES ServiceTypeBrand(id)
);

CREATE TABLE IF NOT EXISTS ServiceCenter(
  id INTEGER PRIMARY KEY,
  sbId INTEGER NOT NULL,
  stypeId INTEGER NOT NULL,
  sid INTEGER NOT NULL,
  userId INTEGER NOT NULL,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  image TEXT,
  phoneNo TEXT,
  description TEXT,
  latitude INTEGER,
  logitude INTEGER,
  province TEXT,
  type TEXT,

  --CONSTRAINT
  CONSTRAINT Dealer_fk_sbId FOREIGN KEY (sbId) REFERENCES ServiceTypeBrand(id)
);
-- Down
