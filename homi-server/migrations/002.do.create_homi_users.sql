CREATE TABLE homi_users (
  id SERIAL PRIMARY KEY,
  user_name TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  password TEXT NOT NULL,
  nickname TEXT,
  date_created TIMESTAMP NOT NULL DEFAULT now(),
  date_modified TIMESTAMP
);

ALTER TABLE homi_properties
  ADD COLUMN
    user_id INTEGER REFERENCES homi_users(id)
    ON DELETE SET NULL;
