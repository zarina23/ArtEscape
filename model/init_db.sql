DROP TABLE if exists questions;

CREATE TABLE questions (
	id INT NOT NULL AUTO_INCREMENT,
	quiz_type VARCHAR(255) NOT NULL,
	artist_name_key VARCHAR(255),
	question_type VARCHAR(255) NOT NULL,
	question_text VARCHAR(255) NOT NULL,
	question_image_url TEXT,
	option0_text TEXT,
	option0_image_url TEXT,
	option1_text TEXT,
	option1_image_url TEXT,
	option2_text TEXT,
	option2_image_url TEXT,
	option3_text TEXT,
	option3_image_url TEXT,
	PRIMARY KEY (id)
);
