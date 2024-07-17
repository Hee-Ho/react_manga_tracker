DELIMITER //

CREATE PROCEDURE spInsertManga (
IN bid VARCHAR(255),
IN en_title VARCHAR(255),
IN bstatus VARCHAR(50),
IN updated_At DATETIME,
IN imagepath VARCHAR(255)
)
BEGIN
	DECLARE status_code INT DEFAULT 0;
    IF bstatus = 'ongoing' THEN 
		SET status_code = 1;
	ELSEIF bstatus = 'completed' THEN 
		SET status_code = 2;
	ELSEIF bstatus = 'hiatus' THEN 
		SET status_code = 3;
	ELSE
		SET status_code = 0;
    END IF;
    IF NOT EXISTS (SELECT b_id FROM manga WHERE b_id = bid) THEN
		INSERT INTO manga(b_id, title_en, b_status, updatedAt, image_path) values(bid, en_title, status_code, updated_At, imagepath);
	ELSE 
		UPDATE manga SET updatedAT = updated_At WHERE b_id = bid and updatedAt < updated_At;
    END IF;
END //
DELIMITER ;

DROP PROCEDURE spInsertManga