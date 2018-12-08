drop procedure if exists spGetServices;

delimiter $$
create procedure spGetServices ()
begin
    select
        *
    from
        service;
end $$
delimiter ;

drop procedure if exists spGetService;

delimiter $$
create procedure spGetService (in service_id int)
begin
    select
        *
    from
        service
    where
        service.id = service_id;
end $$
delimiter ;

drop procedure if exists spInsertService;

delimiter $$
create procedure spInsertService (in _name varchar (45))
begin
    insert into service (name)
    values (_name);
end $$
delimiter ;

drop procedure if exists spUpdateService;

delimiter $$
create procedure spUpdateService (in service_id int, in _name varchar (45))
begin
    update
        service
    set
        service.name = coalesce(_name, service.name)
    where
        service.id = service_id;
end $$
delimiter ;

drop procedure if exists spDeleteService;

delimiter $$
create procedure spDeleteService (in service_id int)
begin
    delete
    from service
    where id = service_id;
end $$
delimiter ;

drop procedure if exists spGetServiceByTrainer;
delimiter $$
create procedure spGetServiceByTrainer (in p_trainer_id int)
begin
    select 
        t.*,
        ts.description,
        u.name,
        u.age,
        u.email
    from
        trainerservice ts
    join 
        trainer t
    on 
        t.id = ts.trainer_id
    join
        user u
    on
        u.id = t.user_id
	where
        ts.trainer_id = p_trainer_id;
end $$
delimiter ;

drop procedure if exists spGetServicesByTrainer;
delimiter $$
create procedure spGetServicesByTrainer (
    in p_trainer_id int
)

begin

    select 
        s.*
    from    
        service s
    join
        trainerservice ts
    on 
        ts.service_id = s.id AND
        ts.trainer_id = p_trainer_id;

end $$
delimiter ;