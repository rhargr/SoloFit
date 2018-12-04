drop procedure if exists spGetTrainees;
delimiter $$
create procedure spGetTrainees ()
begin
    select
        t.id as trainer_id,
        t.user_id,
        u.name,
        u.age,
        u.email,
        a.address,
        a.latitude,
        a.longitude
    from
        trainee t
    join
        address a
    on 
        a.user_id = t.user_id
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
        u.email,
        a.address,
        a.latitude,
        a.longitude
    from
        trainee t
    join
        address a
    on 
        a.user_id = t.user_id
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
create procedure spInsertTrainee (in _name varchar (60), in _age tinyint, in _email varchar (60), in _hash varchar(60))
begin
    insert into user (
        name,
        age,
        email,
        hash
    )
    values(
        _name,
        _age,
        _email,
        _hash
   );

    set @user_id = last_insert_id();

    insert into trainee (user_id) values (@user_id);

    select
        last_insert_id() as id;
end $$
delimiter ;

drop procedure if exists spUpdateTrainee;
delimiter $$
create procedure spUpdateTrainee (in trainee_id int, in _name varchar(60), in _age tinyint, in _email varchar(60))
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