drop procedure if exists spGetReviewsByTrainer;

delimiter $$
create procedure spGetReviewsByTrainer (in trainer_id int)
begin
    select
        *
    from
        review
    where
        review.trainer_id = trainer_id;
end $$
delimiter ;

call spGetReviewsByTrainer(11);

drop procedure if exists spGetReviewsByTrainee;

delimiter $$
create procedure spGetReviewsByTrainee (in trainee_id int)
begin
    select
        *
    from
        review
    where
        review.trainee_id = trainee_id;
end $$
delimiter ;

call spGetReviewsByTrainee(1);

drop procedure if exists spGetReviews;

delimiter $$
create procedure spGetReviews ()
begin
    select
        *
    from
        review;
end $$
delimiter ;

call spGetReviews();

drop procedure if exists spInsertReview;

delimiter $$
create procedure spInsertReview (in _trainer_id int, in _trainee_id int, in _text text, _rating int)
begin
    insert into review (trainer_id, trainee_id, text, rating)
    values (_trainer_id, _trainee_id, _text, _rating);
end $$
delimiter ;

call spInsertReview(11, 1, 'new review', 5);

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

call spUpdateReview(1, 'new review', 5);

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

call spDeleteReview(1);