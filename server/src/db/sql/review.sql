create table if not exists review (
    id int auto_increment primary key,
    text text,
    rating int not null,
    trainee_id int,
    trainer_id int,
    foreign key (trainee_id)
        references trainee (id)
    foreign key (trainer_id)
        references trainer (id)
);
