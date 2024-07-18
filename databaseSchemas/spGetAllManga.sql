DROP PROCEDURE spGetAllManga;
DELIMITER //
CREATE PROCEDURE spGetAllManga() 
BEGIN 
	SELECT m.b_id, m.title_en, s.status_name, m.updatedAt FROM manga as m LEFT JOIN manga_status AS s ON m.b_status = s.status_code;
END //

DELIMITER ;

