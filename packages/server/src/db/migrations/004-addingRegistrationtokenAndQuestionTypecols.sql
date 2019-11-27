--Up
ALTER TABLE ModeratorQuestion ADD COLUMN registrationToken TEXT;
ALTER TABLE ModeratorQuestion ADD COLUMN type TEXT;

ALTER TABLE AstrologerAnswer ADD COLUMN registrationToken TEXT;
ALTER TABLE AstrologerAnswer ADD COLUMN type TEXT;

ALTER TABLE ModeratorAnswer ADD COLUMN registrationToken TEXT;
ALTER TABLE ModeratorAnswer ADD COLUMN type TEXT;

-- Down
