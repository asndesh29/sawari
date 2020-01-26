--Up
ALTER TABLE Dealer ADD COLUMN email TEXT;
ALTER TABLE ServiceCenter ADD COLUMN email TEXT;

ALTER TABLE SellVehicle ADD COLUMN customerType TEXT;
ALTER TABLE SellVehicle ADD COLUMN makeYear TEXT;
ALTER TABLE SellVehicle ADD COLUMN vehicleType TEXT;
ALTER TABLE SellVehicle ADD COLUMN brand TEXT;
ALTER TABLE SellVehicle ADD COLUMN model TEXT;
ALTER TABLE SellVehicle ADD COLUMN variant TEXT;
ALTER TABLE SellVehicle ADD COLUMN displacement TEXT;
ALTER TABLE SellVehicle ADD COLUMN taxClearance TEXT;
ALTER TABLE SellVehicle ADD COLUMN registrationNo TEXT;

-- Down
