create table if not exists review (
    id int auto_increment primary key,
    text text,
    rating int not null,
    trainee_id int,
    trainer_id int,
    created_at datetime default current_timestamp,
    updated_at datetime default current_timestamp on update current_timestamp
    foreign key (trainee_id)
        references trainee (id)
    foreign key (trainer_id)
        references trainer (id)
);
