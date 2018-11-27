create table if not exists trainerservice (
    id int auto_increment primary key,
    trainer_id int not null,
    service_id int not null,
    description text,
    foreign key (trainer_id)
        references trainer (id),
    foreign key (service_id)
        references trainee (id),
);
