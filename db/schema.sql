CREATE database products; 

USE products; 

CREATE TABLE indica ( 
	/*giving them a refrence number*/ 
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(60),
	type (7), 
	PRIMARY KEY (id) 
); 

CREATE TABLE sativa (  
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(60),
	type (7), 
	PRIMARY KEY (id) 
); 

CREATE TABLE hybrid ( 
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(60),
	type (7), 
	PRIMARY KEY (id) 
); 



INSERT INTO indica (name, type) 
VALUES ("super powered harry purple eater", sativa);

INSERT INTO sativa (name, type)
VALUES ("bfcronic 9000", indica);

INSERT INTO hybrin (name, type)
VALUES ("this is permanent");