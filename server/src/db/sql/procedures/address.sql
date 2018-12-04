drop procedure if exists spGetAddress;

delimiter $$
create procedure spGetAddress (in address_id int)
begin
    select
        *
    from
        address
    where
        address.id = address_id;
end $$
delimiter ;


drop procedure if exists spGetAddressByTrainer;

delimiter $$
create procedure spGetAddressByTrainer (in user_id int)
begin
    select
        *
    from
        address
    where
        address.user_id = user_id;
end $$
delimiter ;

drop procedure if exists spInsertAddress;

delimiter $$
create procedure spInsertAddress (in user_id int, in _address varchar (80), in _latitude float (10, 6), in _longitude float (10, 6))
begin
    insert into address (user_id, _address, _latitude, _longitude)
    values (user_id, _address, _latitude, _longitude);

    select
        last_insert_id() as id;
end $$
delimiter ;

drop procedure if exists spUpdateAddress;

delimiter $$
create procedure spUpdateAddress (in user_id int, in _address varchar (80), in _latitude float (10, 6), in _longitude float (10, 6))
begin
    update
       address
    set
		address.address = coalesce(_address, address.address),
        address.latitude = coalesce(_latitude, address.latitude),
        address.longitude = coalesce(_longitude, address.longitude),
   where
       id = user_id;
end $$
delimiter ;

drop procedure if exists spDeleteAddress;

delimiter $$
create procedure spDeleteAddress (in address_id int)
begin
    delete
    from address
    where id = address_id;
end $$
delimiter ;

drop procedure if exists spDeleteAddressByTrainer;

delimiter $$
create procedure spDeleteAddressByTrainer (in user_id int)
begin
    delete
    from address
    where address.user_id = user_id;
end $$
delimiter ;
