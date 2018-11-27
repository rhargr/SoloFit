create table if not exists user (
    id int auto_increment primary key,
    name varchar(60) not null,
    age tinyint not null,
    email varchar(60) not null
);
