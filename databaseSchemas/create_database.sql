CREATE DATABASE mangaTracker;
USE mangaTracker; 

-- User Table-----------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE User_accounts (
	user_id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(128) NOT NULL,
    salt VARCHAR(40) NOT NULL,
    PRIMARY KEY (user_id)
);
ALTER TABLE user_accounts ADD username VARCHAR(255);
CREATE INDEX username_index on user_accounts (username); -- make username a non-clustered index 


-- Manga Table----------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE Manga ( 
	b_id VARCHAR(40) NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    b_status INT NOT NULL,
    updatedAt DATETIME NOT NULL,
    image_path VARCHAR(255),
	PRIMARY KEY(b_id)
);

CREATE TABLE manga_status (
	status_code INT NOT NULL, 
    status_name VARCHAR(50) NOT NULL
);

INSERT INTO manga_status VALUE (0, "cancelled");
INSERT INTO manga_status VALUE (1, "ongoing");
INSERT INTO manga_status VALUE (2, "completed");
INSERT INTO manga_status VALUE (3, "hiatus");

-- User Tracking--------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE Tracking_list (
	user_id INT NOT NULL,
    b_id VARCHAR(40) NOT NULL,
    PRIMARY KEY (user_id, b_id),
    FOREIGN KEY (user_id) REFERENCES User_accounts(user_id) ON DELETE CASCADE,
    FOREIGN KEY (b_id) REFERENCES Manga(b_id) ON DELETE CASCADE
);


-- Blacklisted Token----------------------------------------------------------------------------------------------------------------------------
Create Table Invalid_tokens (
	user_id INT, 
    iat INT
)

-- FUTURE DB TABLE, DO NOT RUN------------------------------------------------------------------------------------------------------------------
/*
CREATE TABLE Posts (
	post_id INT NOT NULL AUTO_INCREMENT,
    creator_id INT NOT NULL,
    post_content TEXT NOT NULL,
    PRIMARY KEY (post_id),
    FOREIGN KEY (creator_id) REFERENCES User_accounts(user_id) 
);

CREATE TABLE Comments (
	comment_id INT NOT NULL AUTO_INCREMENT,
    post_id INT NOT NULL,
    comment_content TEXT NOT NULL,
    PRIMARY KEY (comment_id),
    FOREIGN KEY (post_id) REFERENCES Posts(post_id)
);
*/