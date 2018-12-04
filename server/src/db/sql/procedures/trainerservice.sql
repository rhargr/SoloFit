drop procedure if exists spInsertTrainerService;

delimiter $$
create procedure spInsertTrainerService (in _trainer_id int, in _service_id int, in _description text)
begin
    insert into trainerservice (trainer_id, service_id, description)
    values (_trainer_id, _service_id, _description);

    select
        last_insert_id() as id;
end $$
delimiter ;

drop procedure if exists spUpdateTrainerService;

delimiter $$
create procedure spUpdateTrainerService (in _trainerservice_id int, in _description text)
begin
    update
        trainerservice
    set
        trainerservice.description = coalesce(_description, trainerservice.description)
    where
        trainerservice.id = _trainerservice_id;
end $$
delimiter ;

drop procedure if exists spDeleteTrainerService;

delimiter $$
create procedure spDeleteTrainerService (in _trainerservice_id int)
begin
    delete
    from
        trainerservice
    where
        trainerservice.id = _trainerservice_id;
end $$
delimiter ;
