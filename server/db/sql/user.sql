create table if not exists user (
    id int auto_increment primary key,
    name varchar(60) not null,
    age tinyint not null,
    email varchar(60) not null,
    created_at datetime default current_timestamp,
    updated_at datetime default current_timestamp on update current_timestamp
);
