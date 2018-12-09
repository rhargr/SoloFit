DROP PROCEDURE IF EXISTS spGetRoom;
DELIMITER $$
CREATE PROCEDURE spGetRoom(
    IN p_id INT
)
BEGIN

    SELECT
        *
    FROM
        Rooms
    WHERE
        id = p_id
    LIMIT
        1;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetRooms;
DELIMITER $$
CREATE PROCEDURE spGetRooms(
    IN p_user_id INT
)
BEGIN

    SELECT
        r.*,
        u.name
    FROM
        Rooms r
    JOIN
        User u
    ON
        (u.id = r.user_id_1 AND u.id <> p_user_id) OR
        (u.id = r.user_id_2 AND u.id <> p_user_id)
    WHERE
        r.user_id_1 = p_user_id OR
        r.user_id_2 = p_user_id;    

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertRoom;
DELIMITER $$
CREATE PROCEDURE spInsertRoom(
    IN p_user_id_1 INT, 
    IN p_user_id_2 INT
)
BEGIN

    INSERT INTO Rooms (
        user_id_1, 
        user_id_2
    )
    VALUES (
        p_user_id_1,
        p_user_id_2
    );

    SELECT
        LAST_INSERT_ID() AS id;

END$$
DELIMITER ;