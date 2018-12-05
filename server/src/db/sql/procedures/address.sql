-- DROP PROCEDURE IF EXISTS spDeleteAddress;
-- DELIMITER $$
-- CREATE PROCEDURE spDeleteAddress(
--     IN p_id INT
-- )
-- BEGIN
--     DELETE
--     FROM
--         address
--     WHERE
--         id = p_id;

-- END$$
-- DELIMITER ;

-- DROP PROCEDURE IF EXISTS spGetAddress;
-- DELIMITER $$
-- CREATE PROCEDURE spGetAddress(
--     IN p_id INT
-- )
-- BEGIN

--     SELECT
--         *
--     FROM
--         address
--     WHERE
--         id = p_id
--     LIMIT
--         1;

-- END$$
-- DELIMITER ;

-- DROP PROCEDURE IF EXISTS spGetAddresses;
-- DELIMITER $$
-- CREATE PROCEDURE spGetAddresses(

-- )
-- BEGIN

--     SELECT 
--         *
--     FROM
--         address;

-- END$$
-- DELIMITER ;

-- DROP PROCEDURE IF EXISTS spInsertAddress;
-- DELIMITER $$
-- CREATE PROCEDURE spInsertAddress(
--     IN p_user_id INT,
--     IN p_street1 VARCHAR(255),
--     IN p_street2 VARCHAR(255),
--     IN p_city VARCHAR(255),
--     IN p_state CHAR(2),
--     IN p_zip VARCHAR(10),
--     IN p_latitude FLOAT,
--     IN p_longitude FLOAT
-- )
-- BEGIN

--     INSERT INTO address (
--         user_id,
--         street1,
--         street2 ,
--         city ,
--         state,
--         zip,
--         latitude,
--         longitude
--     )
--     VALUES (
--         p_user_id,
--         p_street1,
--         p_street2 ,
--         p_city ,
--         p_state,
--         p_zip,
--         p_latitude,
--         p_longitude  
--     );

--     SELECT
--         LAST_INSERT_ID() AS id;

-- END$$
-- DELIMITER ;

-- DROP PROCEDURE IF EXISTS spUpdateAddress;
-- DELIMITER $$
-- CREATE PROCEDURE spUpdateAddress(
--     IN p_id INT,
--     IN p_user_id INT,
--     IN p_street1 VARCHAR(255),
--     IN p_street2 VARCHAR(255),
--     IN p_city VARCHAR(255),
--     IN p_state CHAR(2),
--     IN p_zip VARCHAR(10),
--     IN p_latitude FLOAT,
--     IN p_longitude FLOAT
-- )
-- BEGIN

--     UPDATE
--         addresses
--     SET
--         user_id = COALESCE(p_user_id, user_id),
--         street1 = COALESCE(p_street1 , street1),
--         steet2 = COALESCE(p_street2 , street2),
--         city = COALESCE(p_city, city),
--         state = COALESCE(p_state, state),
--         zip = COALESCE(p_zip, zip),
--         latitude = COALESCE(p_latitude, latitude),
--         longtitude = COALESCE(p_longitude, longitude)
--     WHERE
--         id = p_id
--     LIMIT
--         1;

-- END$$
-- DELIMITER ;

DROP PROCEDURE IF EXISTS spDeleteAddress;
DELIMITER $$
CREATE PROCEDURE spDeleteAddress(
    IN p_id INT
)
BEGIN
    DELETE
    FROM
        address
    WHERE
        id = p_id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetAddress;
DELIMITER $$
CREATE PROCEDURE spGetAddress(
    IN p_id INT
)
BEGIN

    SELECT
        *
    FROM
        address
    WHERE
        id = p_id
    LIMIT
        1;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetAddresses;
DELIMITER $$
CREATE PROCEDURE spGetAddresses(

)
BEGIN

    SELECT 
        *
    FROM
        address;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertAddress;
DELIMITER $$
CREATE PROCEDURE spInsertAddress(
    IN p_user_id INT,
    IN p_street1 VARCHAR(255),
    IN p_street2 VARCHAR(255),
    IN p_city VARCHAR(255),
    IN p_state CHAR(2),
    IN p_zip VARCHAR(10)
)
BEGIN

    INSERT INTO address (
        user_id,
        street1,
        street2 ,
        city ,
        state,
        zip
    )
    VALUES (
        p_user_id,
        p_street1,
        p_street2 ,
        p_city ,
        p_state,
        p_zip
    );

    SELECT
        LAST_INSERT_ID() AS id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spUpdateAddress;
DELIMITER $$
CREATE PROCEDURE spUpdateAddress(
    IN p_id INT,
    IN p_user_id INT,
    IN p_street1 VARCHAR(255),
    IN p_street2 VARCHAR(255),
    IN p_city VARCHAR(255),
    IN p_state CHAR(2),
    IN p_zip VARCHAR(10)
)
BEGIN

    UPDATE
        address
    SET
        user_id = COALESCE(p_user_id, user_id),
        street1 = COALESCE(p_street1 , street1),
        street2 = COALESCE(p_street2 , street2),
        city = COALESCE(p_city, city),
        state = COALESCE(p_state, state),
        zip = COALESCE(p_zip, zip)
    WHERE
        id = p_id
    LIMIT
        1;

END$$
DELIMITER ;