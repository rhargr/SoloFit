create table
if not exists user (
    id int auto_increment primary key,
    name varchar (60) not null,
    age tinyint not null,
    email varchar (60) not null
);

drop procedure if exists spDeleteUser;

delimiter $$
create procedure spDeleteUser (in user_id int)
begin
    delete
    from user
    where id = user_id;
end $$
delimiter ;

drop procedure if exists spGetUser;

delimiter $$
create procedure spGetUser (in user_id int)
begin
    select
        *
    from
        user
    where
       id = user_id
    limit 1;

end $$
delimiter ;

drop procedure if exists spGetUsers;

delimiter $$
create procedure spGetUsers ()
begin
    select
        *
    from
        user;
end $$
delimiter ;

drop procedure if exists spInsertUser;

delimiter $$
create procedure spInsertUser (in _name varchar (60), in _age tinyint, in _email varchar (60))
begin
    insert into user (
        name,
        age,
        email
    )
    values(
        _name,
        _age,
        _email
   );

    select
        LAST_INSERT_ID() as id;
end$$
delimiter ;

drop procedure if exists spUpdateUser;

delimiter $$
create procedure spUpdateUser (in user_id int, in _name varchar (60), in _age tinyint, in _email varchar (60))
begin
    update
       user
    set
		user.name = _name,
        user.age = _age,
        user.email = _email
   where
       id = user_id
   limit 1;
end$$
delimiter ;
