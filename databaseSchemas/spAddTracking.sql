DELIMITER //

CREATE PROCEDURE spAddTracking 
(
IN bid VARCHAR(255),
IN en_title VARCHAR(255),
IN bstatus VARCHAR(50),
IN updated_At DATETIME,
IN imagepath VARCHAR(255),
IN uid INT,
OUT status VARCHAR(50)
)
BEGIN
	CALL spInsertManga(bid, en_title, bstatus, updated_At, imagepath);
    IF EXISTS (SELECT user_id FROM user_accounts WHERE user_id = uid) THEN 
		IF NOT EXISTS (SELECT user_id, b_id FROM tracking_list) THEN 
			INSERT INTO tracking_list VALUES(uid, bid);
			SET status = "Added to tracking list";
		ELSE 
			SET status = "Already in tracking list";
		END IF;
    END IF;
END //

DELIMITER ;

DROP PROCEDURE spAddTracking;