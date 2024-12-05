
CREATE TABLE user (
  id INT PRIMARY KEY,
  username VARCHAR(30),
  email VARCHAR(50) UNIQUE NOT NULL,
  password_s VARCHAR(31)
);





