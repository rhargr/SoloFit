drop procedure if exists spGetAverageRatingForTrainer;
delimiter $$
create procedure spGetAverageRatingForTrainer (in trainer_id int)
begin
    select
        avg(r.rating) as average_rating,
        r.trainer_id
    from
        review r
    where
        r.trainer_id = trainer_id;
end $$
delimiter ;

drop procedure if exists spGetReviewsByTrainer;
delimiter $$
create procedure spGetReviewsByTrainer (in p_trainer_id int)
begin
    select
        r.*,
        u_te.name as trainee_name,
        u_tr.name as trainer_name
    from
        review r
	join
		trainee te
	on
		r.trainee_id = te.id
	join
		user u_te
	on
		u_te.id = te.user_id
	join
		trainer tr
	on
		r.trainer_id = tr.id
	join
		user u_tr
	on
		u_tr.id = tr.user_id
    where
        r.trainer_id = p_trainer_id;
end $$
delimiter ;

drop procedure if exists spGetReviewsByTrainee;
delimiter $$
create procedure spGetReviewsByTrainee (in p_trainee_id int)
begin
    select
        r.*,
        u_te.name as trainee_name,
        u_tr.name as trainer_name
    from
        review r
	join
		trainee te
	on
		r.trainee_id = te.id
	join
		user u_te
	on
		u_te.id = te.user_id
	join
		trainer tr
	on
		r.trainer_id = tr.id
	join
		user u_tr
	on
		u_tr.id = tr.user_id
    where
        r.trainee_id = p_trainee_id;
end $$
delimiter ;

drop procedure if exists spGetReviews;
delimiter $$
create procedure spGetReviews ()
begin
    select
        r.*,
        u_te.name as trainee_name,
        u_tr.name as trainer_name
    from
        review r
	join
		trainee te
	on
		r.trainee_id = te.id
	join
		user u_te
	on
		u_te.id = te.user_id
	join
		trainer tr
	on
		r.trainer_id = tr.id
	join
		user u_tr
	on
		u_tr.id = tr.user_id;
end $$
delimiter ;

drop procedure if exists spInsertReview;
delimiter $$
create procedure spInsertReview (in _trainer_id int, in _trainee_id int, in _text text, _rating int)
begin
    insert into review (trainer_id, trainee_id, text, rating)
    values (_trainer_id, _trainee_id, _text, _rating);

    select
        last_insert_id() as id;
end $$
delimiter ;

drop procedure if exists spUpdateReview;
delimiter $$
create procedure spUpdateReview (in review_id int, in _text text, _rating int)
begin
    update
       review
    set
        review.text = coalesce(_text, review.text),
        review.rating = coalesce(_rating, review.rating)
   where
       review.id = review_id
   limit 1;
end $$
delimiter ;

drop procedure if exists spDeleteReview;
delimiter $$
create procedure spDeleteReview (in review_id int)
begin
    delete from review
    where
       review.id = review_id
    limit 1;
end $$
delimiter ;