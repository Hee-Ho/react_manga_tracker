CREATE DATABASE mangaTracker;

USE mangaTracker; 

CREATE TABLE User_accounts (
	user_id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(128) NOT NULL,
    salt VARCHAR(40) NOT NULL,
    PRIMARY KEY (user_id)
);


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
INSERT INTO manga_status VALUE (2, "complete");
INSERT INTO manga_status VALUE (3, "hiatus");

CREATE TABLE Tracking_list (
	user_id INT NOT NULL,
    b_id VARCHAR(40) NOT NULL,
    PRIMARY KEY (user_id, b_id),
    FOREIGN KEY (user_id) REFERENCES User_accounts(user_id) ON DELETE CASCADE,
    FOREIGN KEY (b_id) REFERENCES Manga(b_id) ON DELETE CASCADE
);
CREATE INDEX uid_index on tracking_list (user_id);


-- FUTURE DB TABLE, DO NOT RUN--------------------------------------------------------------------------------------------------------------------
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