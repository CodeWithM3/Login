CREATE DATABASE SignIn;
CREATE EXTENSION IF NOT EXISTS "uuid-oosp";

CREATE TABLE users( user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
user_name TEXT NOT NULL,
user_email TEXT NOT NULL UNIQUE,
user_password TEXT NOT NULL );


SELECT * FROM users;

INSERT INTO users( user_name, user_email, user_password)
VALUES('Tony', 'tee@gmail.com', '12345678');
INSERT INTO users( user_name, user_email, user_password)
VALUES('Cindy', 'cindy@gmail.com', '87654321');

--psql - U postgres

--\c SignIn

--\dt

--heroku pg:psql