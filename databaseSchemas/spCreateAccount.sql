DELIMITER //

CREATE PROCEDURE spCreateAccount(
IN user_email varchar(255), 
IN user_password varchar(128),
IN user_name varchar(255),
IN user_salt varchar(40),
OUT status varchar(40),
OUT uid INT,
OUT uname VARCHAR(255))

BEGIN
	IF EXISTS (SELECT email from user_accounts WHERE email = user_email) THEN 
		SET status = "User already exist";
	ELSEIF EXISTS (SELECT username from user_accounts WHERE LOWER(username) = LOWER(user_name)) THEN 
		SET status = "Username already taken";
	ELSE
		INSERT INTO user_accounts(email, password, salt, username) VALUES(user_email, user_password, user_salt, user_name);
        SET status = "Account Created";
        SELECT user_id, username INTO uid, uname FROM user_accounts WHERE email = user_email;
	END IF;
END //

DELIMITER ;

DROP PROCEDURE spCreateAccount;

