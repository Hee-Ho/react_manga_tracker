DROP PROCEDURE spGetAccount

DELIMITER //
CREATE PROCEDURE spGetAccount (
IN user_name varchar(50)
)
BEGIN
	SELECT user_id, password, username FROM user_accounts WHERE LOWER(username) = LOWER(user_name);
END //
DELIMITER ;
