-- Up

ALTER TABLE ServiceTypeBrandProductDetails ADD COLUMN mileage TEXT;
ALTER TABLE ServiceTypeBrandProductDetails ADD COLUMN bodyType TEXT;
ALTER TABLE ServiceTypeBrandProductDetails ADD COLUMN fuelType TEXT;

ALTER TABLE Dealer ADD COLUMN province TEXT;
ALTER TABLE Dealer ADD COLUMN type TEXT;

ALTER TABLE ServiceCenter ADD COLUMN province TEXT;
ALTER TABLE ServiceCenter ADD COLUMN type TEXT;

-- Down

