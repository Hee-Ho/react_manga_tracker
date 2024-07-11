DELIMITER //

CREATE PROCEDURE spCreateAccount(
IN user_email varchar(255), 
IN user_password varchar(128),
IN user_salt varchar(40),
OUT status varchar(40),
OUT uid INT) 

BEGIN
	IF EXISTS (SELECT email from user_accounts WHERE email = user_email) THEN 
		SET status = "User already exist";
	ELSE
		INSERT INTO user_accounts(email, password, salt) VALUES(user_email, user_password, user_salt);
        SET status = "Account Created";
        SELECT user_id INTO uid FROM user_accounts WHERE email = user_email;
	END IF;
END //

DELIMITER ;

DROP PROCEDURE spCreateAccount;

