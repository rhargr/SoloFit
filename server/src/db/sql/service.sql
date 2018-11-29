create table if not exists service (
    id int auto_increment primary key,
    name varchar(45) not null
);

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

call spGetServices();

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

call spGetService(1);

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
