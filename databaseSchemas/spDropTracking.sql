DELIMITER //

CREATE PROCEDURE spDropTracking(
IN bid VARCHAR(255),
IN uid INT,
OUT status VARCHAR(50)) 
BEGIN 
	IF EXISTS (SELECT user_id FROM tracking_list WHERE user_id = uid and b_id = bid) THEN 
		DELETE FROM tracking_list WHERE user_id = uid and b_id = bid;
        SET status = "Manga removed from tracking";
	ELSE 
		SET status = "Manga not found in tracking list";
    END IF;
END //

DELIMITER ;