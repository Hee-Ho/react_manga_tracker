DELIMITER //

CREATE PROCEDURE spCreateAccount(
IN user_email varchar(255), 
IN user_password varchar(128),
IN user_salt varchar(40)) 

BEGIN
	IF EXISTS (SELECT email from user_accounts WHERE email = user_email) THEN 
		SELECT email from user_accounts WHERE email = user_email; 
	ELSE
		INSERT INTO user_accounts(email, password, salt) VALUES(user_email, user_password, user_salt);
        SELECT email from user_accounts WHERE email = user_email;
	END IF;
END //

DELIMITER ;


