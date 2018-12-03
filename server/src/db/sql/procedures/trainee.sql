drop procedure if exists spGetTrainees;

delimiter $$
create procedure spGetTrainees ()
begin
    select
        t.id as trainerId,
        t.user_id as userId,
        u.name,
        u.age,
        u.email
    from
        trainee t
    join    
        user u
    on
        u.id = t.user_id;
end $$
delimiter ;

drop procedure if exists spGetTrainee;

delimiter $$
create procedure spGetTrainee (in trainee_id int)
begin
    select
        t.id as trainerId,
        t.user_id as userId,
        u.name,
        u.age,
        u.email
    from
        trainee t
    join    
		user u
    on 
		u.id = t.user_id
	where
		t.id = trainee_id;
end $$
delimiter ;

drop procedure if exists spInsertTrainee;

delimiter $$
create procedure spInsertTrainee (in _name varchar (60), in _age tinyint, in _email varchar (60))
begin
    call spInsertUser(_name, _age,  _email, @user_id);
    insert into trainee (user_id)
    values (@user_id);
end $$
delimiter ;
call spInsertTrainee();

drop procedure if exists spUpdateTrainee;

delimiter $$
create procedure spUpdateTrainee (in trainee_id int, in _name varchar
(60), in _age tinyint, in _email varchar
(60))
begin
    set @user_id = (select user_id from trainee where trainee.id = trainee_id);
    call spUpdateUser (@user_id, _name, _age, _email);
end $$
delimiter ;

drop procedure if exists spDeleteTrainee;

delimiter $$
create procedure spDeleteTrainee (in trainee_id int)
begin
    delete
    from trainee
    where id = trainee_id;
end $$
delimiter ;