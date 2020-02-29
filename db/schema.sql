DROP DATABASE IF EXISTS cats_db

CREATE DATABASE cats_db

USE cats_db

CREATE TABLE cats(
    id INT NOT NULL AUTO INCREMENT,
    cat_name VARCHAR (225) NOT NULL,
    adopted BOOLEAN DEFAULT false NOT NULL,
    PRIMARY KEY (id)

);

INSERT INTO cats 
(cat_nam)
VALUES 
('jasper')
('Hope')
('James')

SELECT * FROM cats