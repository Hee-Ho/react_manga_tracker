CREATE DATABASE mangaTracker;

USE mangaTracker; 

CREATE TABLE User_accounts (
	user_id INT NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    password VARCHAR(128) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE Manga_status ( 
	b_id VARCHAR(40) NOT NULL,
    title VARCHAR(255) NOT NULL,
    b_type VARCHAR(40) NOT NULL,
    b_status VARCHAR(40) NOT NULL,
    updatedAt DATETIME NOT NULL,
	PRIMARY KEY(b_id)
);

CREATE TABLE Tracking_list (
	user_id INT NOT NULL,
    b_id VARCHAR(40) NOT NULL,
    PRIMARY KEY (user_id, b_id),
    FOREIGN KEY (user_id) REFERENCES User_accounts(user_id),
    FOREIGN KEY (b_id) REFERENCES Manga_status(b_id)
);

CREATE TABLE Posts (
	post_id INT NOT NULL,
    creator_id INT NOT NULL,
    post_content TEXT NOT NULL,
    PRIMARY KEY (post_id),
    FOREIGN KEY (creator_id) REFERENCES User_accounts(user_id) 
);

CREATE TABLE Comments (
	comment_id INT NOT NULL,
    reply_to INT NOT NULL,
    comment_content TEXT NOT NULL,
    PRIMARY KEY (comment_id),
    FOREIGN KEY (reply_to) REFERENCES Posts(post_id)
);
