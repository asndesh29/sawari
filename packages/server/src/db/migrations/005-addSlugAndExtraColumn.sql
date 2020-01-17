-- Up
ALTER TABLE ServiceTypeBrandModel ADD COLUMN slug TEXT;
ALTER TABLE ServiceTypeBrandModelVarient ADD COLUMN fuelType TEXT;
ALTER TABLE ServiceTypeBrandModelVarient ADD COLUMN bodyType TEXT;
-- Down
