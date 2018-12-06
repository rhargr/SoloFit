drop table if exists address;
drop table if exists trainerservice;
drop table if exists review;
drop table if exists trainer;
drop table if exists trainee;
drop table if exists token;
drop table if exists service;
drop table if exists user;

create table user (
    id int auto_increment primary key,
    name varchar(60) not null,
    age tinyint not null,
    email varchar(60) not null,
    hash varchar(60) not null
);

create table trainer (
    id int auto_increment primary key,
    user_id int not null,
    foreign key (user_id)
        references user (id)
);

create table trainee (
    id int auto_increment primary key,
    user_id int not null,
    foreign key (user_id)
        references user (id)
);

create table service (
    id int auto_increment primary key,
    name varchar(45) not null
);

create table trainerservice (
    id int auto_increment primary key,
    trainer_id int not null,
    service_id int not null,
    description text,
    foreign key (trainer_id)
        references trainer (id),
    foreign key (service_id)
        references service (id)
);


create table review (
    id int auto_increment primary key,
    text text,
    rating int not null,
    trainee_id int not null,
    trainer_id int not null,
    foreign key (trainee_id)
        references trainee (id),
    foreign key (trainer_id)
        references trainer (id)
);

-- https://developers.google.com/maps/documentation/javascript/mysql-to-maps#creating-a-table-in-mysql
create table address (
    id int not null auto_increment primary key,
    user_id int not null,
    street1 varchar(256) default null,
    street2 varchar(256) default null,
    city varchar(256) default null,
    state char(2) default null,
    zip varchar(10) default null,
    latitude float default null,
    longitude float default null,
    foreign key (user_id)
        references user (id)
);

create table token (
    id int auto_increment,
    user_id int not null,
    primary key (id, user_id),
    foreign key (user_id)
        references user (id)
);