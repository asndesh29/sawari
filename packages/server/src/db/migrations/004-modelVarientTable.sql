--Up
CREATE TABLE IF NOT EXISTS ServiceTypeBrandModel(
  id INTEGER PRIMARY KEY,
  sid INTEGER NOT NULL,
  stypeId INTEGER NOT NULL,
  sbId INTEGER NOT NULL,
  userId INTEGER NOT NULL,
  name TEXT NOT NULL,
  image TEXT,
  timeStamp INTEGER,
 --CONSTRAINT
  CONSTRAINT ServiceTypeBrandModelDetials_fk_stypeId FOREIGN KEY (stypeId) REFERENCES ServiceType(id),
  CONSTRAINT ServiceTypeBrandModelDetials_fk_sbId FOREIGN KEY (sbId) REFERENCES ServiceTypeBrand(id)
);

CREATE TABLE IF NOT EXISTS ServiceTypeBrandModelVarient(
  id INTEGER PRIMARY KEY,
  modelId INTEGER NOT NULL,
  sid INTEGER NOT NULL,
  stypeId INTEGER NOT NULL,
  sbId INTEGER NOT NULL,
  userId INTEGER NOT NULL,
  name TEXT NOT NULL,
  onRoadPrice INTEGER NOT NULL,
  exShowRoomPrice INTEGER NOT NULL,

  --CONSTRAINT
  CONSTRAINT ServiceTypeBrandModelVarientDetials_fk_stypeId FOREIGN KEY (stypeId) REFERENCES ServiceType(id),
  CONSTRAINT ServiceTypeBrandModelVarientDetials_fk_sbId FOREIGN KEY (sbId) REFERENCES ServiceTypeBrand(id),
  CONSTRAINT ServiceTypeBrandModelVarientDetials_fk_modelId FOREIGN KEY (modelId) REFERENCES ServiceTypeBrandModel(id)
);

CREATE TABLE IF NOT EXISTS CarVarientOverview(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  mileage TEXT,
  engine TEXT,
  BHP TEXT,
  transmission TEXT,
  seats INTEGER,
  serviceCost INTEGER,

  --CONSTRAINTS
  CONSTRAINT CarVarientOverView_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS CarVarientKeySpecification(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  ARAIMileage TEXT,
  fuelType TEXT,
  displacement INTEGER,
  maxPower TEXT,
  maxTorque TEXT,
  seatingCapacity INTEGER,
  transmissionTYpe TEXT,
  bootSpace INTEGER,
  fuelTankCapacity INTEGER,
  bodyType TEXT,
  serviceCost INTEGER,

  --CONSTRAINT
  CONSTRAINT CarVarientKeySpecification_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS CarVarientKeyFeatures(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  powerSteering INTEGER,
  powerWindowsFront INTEGER,
  antiLockBrakingSystem INTEGER,
  airConditioner INTEGER,
  driverAirbag INTEGER
  passengerAirbag INTEGER,
  automaticClimateControl INTEGER,
  fogLightsFront INTEGER,
  alloyWheels INTEGER,

  --CONSTRAINT
  CONSTRAINT CarVarientKeyFeaturs_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS CarVarientEngineTransmission(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  engineType TEXT,
  displacement TEXT,
  maxPower TEXT,
  maxTorque TEXT,
  noOfcylinder INTEGER,
  valvesPerCylinder INTEGER,
  valveConfiguration TEXT,
  fuelSupplySystem TEXT
  turboCharger TEXT,
  superCharge TEXT,
  transmissionType TEXT,
  gearBox TEXT,
  driveType TEXT,

--CONSTRAINT
  CONSTRAINT CarVarientEnginTransmission_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS CarVarientFuelPerformance(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  fuelType TEXT,
  mileage TEXT,
  fuelTankCapacity INTEGER,
  topSpeed INTEGER,

    --CONSTRAINT
  CONSTRAINT CarVarientFuelAndPerformance_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS CarVarientSuspensionSteeringBreak(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  frontSuspension TEXT,
  rearSuspension TEXT,
  shockAbsorbersType TEXT,
  steeringType TEXT,
  steeringColumn TEXT,
  steeringGearType TEXT,
  turningRadius INTEGER,
  frontBrakeType TEXT,
  rearBrakeType TEXT,

 --CONSTRAINT
  CONSTRAINT CarVarientSuspensionSteeringBreak_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS CarVarientDimentionCapacity(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  length INTEGER,
  width INTEGER,
  height INTEGER,
  bootSpace INTEGER,
  seatingCapacity INTEGER,
  groundClearanceUnladen INTEGER,
  wheelBase INTEGER,
  frontTread INTEGER,
  rearTread INTEGER,
  rearHeadroom INTEGER,
  frontHeadroom TEXT,
  frontLegroom TEXT,
  rearShoulderroom INTEGER,
  noOfDoors INTEGER,

  --CONSTRAINT
  CONSTRAINT CarVarientDimentionCapacity_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS CarVarientComfortConvenience(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  powerSteering INTEGER,
  powerWindowsFront INTEGER,
  powerWindowsRear INTEGER,
  airConditioner INTEGER,
  heater INTEGER,
  adjustableSteering INTEGER,

    --CONSTRAINT
  CONSTRAINT CarVarientComfirtConvendience_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS CarVarientInterior(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  tachometer INTEGER,
  electronicMultiTripmeter INTEGER,
  digitalClock INTEGER,
  cigaretteLighter INTEGER,
  digitalOdometer INTEGER,
  heightAdjustableDriverSeat INTEGER,

  --CONSTRAINT
  CONSTRAINT CarVarientInterior_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS CarVarientExterior(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  adjustableHeadlights INTEGER,
  fogLightsFront INTEGER,
  fogLightsRear INTEGER,
  exteriorRearViewMirror INTEGER,
  wheelCovers INTEGER,
  alloyWheelSize INTEGER,
  roofCarrier INTEGER,
  outsideRearViewMirrorTurnIndicators INTEGER,

  --CONSTRAINT
  CONSTRAINT CarVarientExterior_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);


CREATE TABLE IF NOT EXISTS CarVarientSafty(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  antiLockBrakingSystem INTEGER,
  centralLocking INTEGER,
  antiTheftAlarm INTEGER,
  noOfAirbags INTEGER,

  --CONSTRAINT
  CONSTRAINT CarVarientSafty_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);


CREATE TABLE IF NOT EXISTS CarVarientEntertainmentCommunication(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  DVDPlayer INTEGER,
  audioSystemRemoteControl INTEGER,
  integrated2DINAudio INTEGER,
  USBAuxiliaryinput INTEGER,
  bluetoothConnectivity INTEGER,
  touchScreen INTEGER,
  connectivity TEXT,

  --CONSTRAINT
  CONSTRAINT CarVarientEntertainmentCommunication_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS BikeVarientOverview(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  engine INTEGER,
  power INTEGER,
  torque INTEGER,
  mileage INTEGER,
  brakes TEXT,
  tyreType TEXT,

    --CONSTRAINT
  CONSTRAINT BikeVarientOverview_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS BikeVarientKeySpecification(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  mileage INTEGER,
  engineType TEXT,
  displacement INTEGER,
  noOfCylinders INTEGER,
  maxPower TEXT,
  maxTorque TEXT,
  frontBrake TEXT,
  rearBrake TEXT,
  fuelCapacity TEXT,
  bodyType TEXT,

    --CONSTRAINT
  CONSTRAINT BikeVarientKeySpecification_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);


CREATE TABLE IF NOT EXISTS BikeVarientKeyFeaturs(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  ABS INTEGER,
  brakingType TEXT,
  speedometer TEXT,
  odometer TEXT,
  fuelGauge INTEGER,

    --CONSTRAINT
  CONSTRAINT BikeVarientKeyFeaturs_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);


CREATE TABLE IF NOT EXISTS BikeVarientEngineTransmission(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  engineType TEXT,
  displacement TEXT,
  maxPower TEXT,
  maxTorque TEXT,
  noOofCylinders TEXT,
  coolingSystem TEXT,
  driveType TEXT,
  starting TEXT,
  fuelSupply TEXT,
  clutch TEXT,
  ignition TEXT,
  transmission TEXT,
  gearBox TEXT,
  compressionRatio TEXT,

  --CONSTRAINT
  CONSTRAINT BikeVarientEngineTransmission_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);


CREATE TABLE IF NOT EXISTS BikeVarientFeatursSafety(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  ABS INTEGER,
  brakingType TEXT,
  i3stechnology INTEGER,
  speedometer TEXT,
  odometer TEXT,
  fuelGauge TEXT,
  console TEXT,
  passSwitch INTEGER,
  additionalFeatures TEXT,
  passengerFootrest INTEGER,

  --CONSTRAINT
  CONSTRAINT BikeVarientFeatursSafety_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);


CREATE TABLE IF NOT EXISTS BikeVarientMileagePerformance(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  ARAIMileage INTEGER,
  maxSpeed INTEGER,
  Acceleration TEXT,

  --CONSTRAINT
  CONSTRAINT BikeVarientMileagePerformance_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);


CREATE TABLE IF NOT EXISTS BikeVarientChassisSuspension(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  chassis TEXT,
  bodyType TEXT,
  frontSuspension TEXT,
  rearSuspension TEXT,
  bodyGraphics TEXT,

  --CONSTRAINT
  CONSTRAINT BikeVarientChassisSuspension_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS BikeVarientDimensionCapacity(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  length INTEGER,
  width INTEGER,
  height INTEGER,
  fuelCapacity INTEGER,
  fuelReserve INTEGER,
  saddleHeight INTEGER,
  groundClearance INTEGER,
  wheelbase INTEGER,
  kerbWeight INTEGER,
  loadCapacity INTEGER,

  --CONSTRAINT
  CONSTRAINT BikeVarientDimensionCapacity_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS BikeVarientElectricals(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  headlight TEXT,
  tailLight TEXT,
  turnSignalLamp TEXT,
  batteryType TEXT,
  batteryCapacity TEXT,

  --CONSTRAINT
  CONSTRAINT BikeVarientElectricals_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS BikeVarientTyresBrakes(
  id INTEGER PRIMARY KEY,
  varientId INTEGER NOT NULL,
  tyreSize TEXT,
  tyreType TEXT,
  wheelSize TEXT,
  wheelsType TEXT,
  frontBrake TEXT,
  rearBrake TEXT,
  frontBrakeDiameter TEXT,
  rearBrakeDiameter TEXT,
  radialTyre TEXT,

  --CONSTRAINT
  CONSTRAINT BikeVarientTyresBrakes_fk_varientId FOREIGN KEY (varientId) REFERENCES ServiceTypeBrandModelVarient(id)
);

CREATE TABLE IF NOT EXISTS ServiceTypeBrandModelFile(
  id INTEGER PRIMARY KEY,
  modelId INTEGER NOT NULL,
  userId INTEGER NOT NULL,
  image TEXT,
  contentType TEXT,
  fileType TEXT,
  timeStamp INTEGER,

  --CONSTRAINTS
  CONSTRAINT ServiceTypeBrandModelImage_fk_varientId FOREIGN KEY (modelId) REFERENCES ServiceTypeBrandModel(id)
);
-- Down
