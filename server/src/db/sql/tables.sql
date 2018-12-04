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
        references trainee (id)
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
    id int auto_increment primary key,
    address varchar (80) not null,
    latitude float (10, 6) not null,
    longitude float (10, 6) not null,
    user_id int not null,
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


insert into user (name, email, age) values ('Calley Leeson', 'cleeson0@sciencedaily.com', 46);
insert into user (name, email, age) values ('Eugene Edgeley', 'eedgeley1@surveymonkey.com', 24);
insert into user (name, email, age) values ('Damita Longworth', 'dlongworth2@dmoz.org', 27);
insert into user (name, email, age) values ('Susette Esposita', 'sesposita3@github.io', 40);
insert into user (name, email, age) values ('Glory Mochar', 'gmochar4@blogtalkradio.com', 26);
insert into user (name, email, age) values ('Olympe Thominga', 'othominga5@chicagotribune.com', 20);
insert into user (name, email, age) values ('Sterne O''Leahy', 'soleahy6@pagesperso-orange.fr', 36);
insert into user (name, email, age) values ('Gaultiero Compfort', 'gcompfort7@cocolog-nifty.com', 38);
insert into user (name, email, age) values ('Leanor Krauze', 'lkrauze8@columbia.edu', 28);
insert into user (name, email, age) values ('Evonne Milne', 'emilne9@jalbum.net', 20);

select * from user;

insert into trainer (user_id) values (11);
insert into trainer (user_id) values (1);
insert into trainer (user_id) values (21);

insert into trainee (user_id) values (31);
insert into trainee (user_id) values (41);
insert into trainee (user_id) values (51);
insert into trainee (user_id) values (61);
insert into trainee (user_id) values (71);
insert into trainee (user_id) values (81);
insert into trainee (user_id) values (91);

select * from trainee t join user u on u.id = t.user_id;
select * from trainer t join user u on u.id = t.user_id;

insert into service (name) values('yoga');
insert into service (name) values('strength training');
insert into service (name) values('weight loss');

select * from trainer;
select * from service;

insert into trainerservice (trainer_id, service_id, description) values (1, 1, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.');
insert into trainerservice (trainer_id, service_id, description) values (11, 11, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.');
insert into trainerservice (trainer_id, service_id, description) values (21, 21, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.');

select * from trainerservice;

select * from trainer;
select * from trainee;

insert into review (text, trainee_id, trainer_id, rating) values ('In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 61, 11, 3);
insert into review (text, trainee_id, trainer_id, rating) values ('In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 21, 11, 5);
insert into review (text, trainee_id, trainer_id, rating) values ('In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 31, 11, 4);
insert into review (text, trainee_id, trainer_id, rating) values ('In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 41, 11, 1);
insert into review (text, trainee_id, trainer_id, rating) values ('In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 51, 11, 1);
insert into review (text, trainee_id, trainer_id, rating) values ('In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, 11, 3);


insert into review (text, trainee_id, trainer_id, rating) values ('Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, 11, 3);
insert into review (text, trainee_id, trainer_id, rating) values ('Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.', 41, 21, 14);
insert into review (text, trainee_id, trainer_id, rating) values ('In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 51, 11, 2);
insert into review (text, trainee_id, trainer_id, rating) values ('Curabitur gravida nisi at nibh.', 31, 1, 5);

insert into address (address, latitude, longitude, user_id) values ('2317 6th Ave S Birmingham, AL 35233', 6.7205676, 11.2580472, 1);
insert into address (address, latitude, longitude, user_id) values ('513 22nd St S, Birmingham, AL 35233', -23.144255, -64.325272, 11);
insert into address (address, latitude, longitude, user_id) values ('1501 5th Ave S, Birmingham, AL 35203', 63.8135855, 20.2147861, 21);
