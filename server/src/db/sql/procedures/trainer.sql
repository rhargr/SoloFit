drop procedure if exists spGetTrainers;
delimiter $$
create procedure spGetTrainers()
begin
    select
        t.*,
        u.name,
        u.age,
        u.email,
        a.id as address_id,
        a.street1,
        a.street2,
        a.city,
        a.state,
        a.zip,
        a.latitude,
        a.longitude
    from
        trainer t
    left outer join
        address a
    on
        a.user_id = t.user_id
    join    
		user u
    on 
		u.id = t.user_id;
end $$
delimiter ;

drop procedure if exists spGetTrainer;
delimiter $$
create procedure spGetTrainer (in p_trainer_id int)
begin
    select
        t.*,
        u.name,
        u.age,
        u.email,
        a.id as address_id,
        a.street1,
        a.street2,
        a.city,
        a.state,
        a.zip,
        a.latitude,
        a.longitude
    from
        trainer t
    left outer join
        address a
    on
        a.user_id = t.user_id
    join    
		user u
    on 
		u.id = t.user_id
	where
		t.id = p_trainer_id;
end $$
delimiter ;


drop procedure if exists spGetTrainerByService;
delimiter $$
create procedure spGetTrainerByService (in p_service_id int)
begin
    select 
        t.*,
        ts.description,
        u.name,
        u.age,
        u.email,
        a.id as address_id,
        a.street1,
        a.street2,
        a.city,
        a.state,
        a.zip,
        a.latitude,
        a.longitude
    from
        trainerservice ts
    join 
        trainer t
    on 
        t.id = ts.trainer_id
    left outer join
        address a
    on
        a.user_id = t.user_id
    join
        user u
    on
        u.id = t.user_id
	where
        ts.service_id = p_service_id;
end $$
delimiter ;

drop procedure if exists spGetTrainerByRating;
delimiter $$
create procedure spGetTrainerByRating (in p_rating int)
begin
    select
        t.*,
        u.name,
        u.age,
        u.email,
        r.id as review_id,
        r.rating,
        r.text,
        a.id as address_id,
        a.street1,
        a.street2,
        a.city,
        a.state,
        a.zip,
        a.latitude,
        a.longitude
    from
        review r
    join 
        trainer t
    on 
        t.id = r.trainer_id
    left outer join
        address a
    on
        a.user_id = t.user_id
    join
        user u
    on
        u.id = t.user_id
	where
        r.rating = p_rating;
end $$
delimiter ;

drop procedure if exists spInsertTrainer;
delimiter $$
create procedure spInsertTrainer (in _name varchar (60), in _age tinyint, in _email varchar (60), in _hash varchar(60))
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

    insert into trainer (user_id) values (@user_id);

    select
        last_insert_id() as id;
end $$
delimiter ;

drop procedure if exists spUpdateTrainer;
delimiter $$
create procedure spUpdateTrainer (in trainer_id int, in _name varchar (60), in _age tinyint, in _email varchar (60))
begin
    set @user_id = (select user_id from trainer where trainer.id = trainer_id);
    call spUpdateUser(@user_id, _name, _age, _email);
end$$
delimiter ;

drop procedure if exists spDeleteTrainer;
delimiter $$
create procedure spDeleteTrainer (in trainer_id int)
begin
    delete
    from trainer
    where id = trainer_id;
end $$
delimiter ;