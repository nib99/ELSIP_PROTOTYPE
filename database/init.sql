CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  phone VARCHAR(32) UNIQUE,
  skills JSONB,
  qr_token VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS jobs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  location VARCHAR(100),
  skills JSONB,
  salary NUMERIC
);
INSERT INTO jobs (title, location, skills, salary) VALUES
('Construction Worker','Addis Ababa','["masonry","carpentry"]',8000),
('UAE Nurse','Dubai','["nursing","english"]',25000);
