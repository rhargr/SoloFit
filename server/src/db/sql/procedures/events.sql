DROP procedure IF EXISTS spDeleteEvent;
DELIMITER $$
CREATE PROCEDURE spDeleteEvent(
    IN p_id INT
)
BEGIN

    DELETE
    FROM
        Events
    WHERE
        id = p_id;

END$$
DELIMITER ;

DROP procedure IF EXISTS spGetEvent;
DELIMITER $$
CREATE PROCEDURE spGetEvent(
    IN p_id INT
)
BEGIN

    SELECT
        *
    FROM
        Events
    WHERE
        id = p_id
    LIMIT
        1;

END$$
DELIMITER ;

DROP procedure IF EXISTS spGetEvents;
DELIMITER $$
CREATE PROCEDURE spGetEvents(
    IN p_trainee_id INT,
    IN p_trainer_id INT
)
BEGIN

    SELECT 
        *
    FROM
        Events
    WHERE
        (trainee_id = p_trainee_id OR p_trainee_id IS NULL) AND
        (trainer_id = p_trainer_id OR p_trainer_id IS NULL);

END$$
DELIMITER ;

DROP procedure IF EXISTS spInsertEvent;
DELIMITER $$
CREATE PROCEDURE spInsertEvent(
    IN p_trainee_id INT,
    IN p_trainer_id INT,
    IN p_service_id INT,
    IN p_description TEXT,
    IN p_end DATETIME,
    IN p_start DATETIME,
    IN p_title VARCHAR(256)
)
BEGIN

    INSERT INTO Events (
        trainee_id,
        trainer_id,
        service_id,
        description,
        end,
        start,
        title
    )
    VALUES (
        p_trainee_id,
        p_trainer_id,
        p_service_id,
        p_description,
        p_end,
        p_start,
        p_title
    );

    SELECT
        LAST_INSERT_ID() AS id;

END$$
DELIMITER ;

DROP procedure IF EXISTS spUpdateEvent;
DELIMITER $$
CREATE PROCEDURE spUpdateEvent(
    IN p_id INT,
    IN p_trainee_id INT,
    IN p_trainer_id INT,
    IN p_service_id INT,
    IN p_description TEXT,
    IN p_end DATETIME,
    IN p_start DATETIME,
    IN p_title VARCHAR(256)
)
BEGIN

    UPDATE
        Events
    SET
        trainee_id = COALESCE(p_trainee_id, trainee_id),
        trainer_id = COALESCE(p_trainer_id, trainer_id),
        service_id = COALESCE(p_service_id, service_id),
        description = COALESCE(p_description, description),
        end = COALESCE(p_end, end),
        start = COALESCE(p_start, start),
        title = COALESCE(p_title, title)
    WHERE
        id = p_id
    LIMIT
        1;

END$$
DELIMITER ;
