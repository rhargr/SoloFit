DROP PROCEDURE IF EXISTS spGetMessages;
DELIMITER $$
CREATE PROCEDURE spGetMessages(
    IN p_room_id INT
)
BEGIN

    SELECT 
        *
    FROM
        Messages
    WHERE
        room_id = p_room_id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertMessage;
DELIMITER $$
CREATE PROCEDURE spInsertMessage(
    IN p_room_id INT,
    IN p_sender_id INT,
    IN p_message LONGTEXT
)
BEGIN

    INSERT INTO Messages (
        room_id, 
        sender_id,
        message
    )
    VALUES (
        p_room_id,
        p_sender_id,
        p_message
    );

    SELECT
        LAST_INSERT_ID() AS id;

END$$
DELIMITER ;
