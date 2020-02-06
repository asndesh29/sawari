--Up
CREATE TABLE IF NOT EXISTS DiscountOffer(
  id INTEGER PRIMARY KEY,
  variantId INTEGER NOT NULL,
  userId INTEGER NOT NULL,
  image TEXT,
  message TEXT,
  priceDiscount INTEGER,
  status INTEGER,

  --CONSTRAINT
  CONSTRAINT DiscountOffer_fk_userId_variantId FOREIGN KEY (userId,variantId) REFERENCES ServiceTypeBrandModelVarient(userId, id) ON DELETE CASCADE
);

-- Down
