create table if not exists trainee (
    id int auto_increment primary key,
    user_id int,
    foreign key (user_id)
        references users (id)
);
