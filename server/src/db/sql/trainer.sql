create table if not exists trainer (
    id int auto_increment primary key,
    user_id int,
    foreign key (user_id)
        references users(id)
);

drop procedure if exists spGetTrainers;

delimiter $$
create procedure spGetTrainers ()
begin
    select
        *
    from
        trainer t
    join 
        user u
    on
        u.id = t.user_id;
end $$
delimiter ;

call spGetTrainers
();

drop procedure if exists spGetTrainerByService;

delimiter $$
create procedure spGetTrainerByService (in service_id int)
begin
    select
        *
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
        ts.service_id = service_id;
end $$
delimiter ;

drop procedure if exists spGetTrainerByRating;

delimiter $$
create procedure spGetTrainerByRating (in rating int)
begin
    select
        *
    from
        review r
        join
        trainer t
        on 
        t.id = r.trainer_id
    join 
        user u
    on
        u.id = t.user_id
	where
        r.rating = rating;
end
$$
delimiter ;

drop procedure if exists spGetTrainer;

delimiter $$
create procedure spGetTrainer (in trainer_id int)
begin
    select
        *
    from
        trainer t
    join 
		user u
    on 
		u.id = t.user_id
	where
		t.id = trainer_id;
end
$$
delimiter ;

drop procedure if exists spInsertTrainer;

delimiter $$
create procedure spInsertTrainer (in _name varchar (60), in _age tinyint, in _email varchar (60))
begin
    call spInsertUser(_name, _age,  _email, @user_id);
    insert into trainer (user_id)
    values (@user_id);
end $$
delimiter ;

drop procedure if exists spUpdateTrainer;

delimiter $$
create procedure spUpdateTrainer (in trainer_id int, in _name varchar (60), in _age tinyint, in _email varchar (60))
begin
    set @user_id = (select user_id from trainer where trainer.id = trainer_id);
    call spUpdateUser (@user_id, _name, _age, _email);
end $$
delimiter ;

drop procedure if exists spDeleteTrainer;

delimiter $$
create procedure spDeleteTrainer (in trainer_id int)
begin
    delete
    from trainer
    where id = trainer_id;
end
$$
delimiter ;