DROP PROCEDURE spGetAccount

DELIMITER //

CREATE PROCEDURE spGetAccount (
IN hash_email varchar(255)
)
BEGIN
	SELECT user_id, password FROM user_accounts WHERE email = hash_email;
END //
DELIMITER ;