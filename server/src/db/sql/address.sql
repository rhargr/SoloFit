-- https://developers.google.com/maps/documentation/javascript/mysql-to-maps#creating-a-table-in-mysql

create table if not exists address (
    id int auto_increment primary key,
    address varchar (80) not null,
    latitude float (10, 6) not null,
    longitude float (10, 6) not null,
    trainer_id int,
    foreign key (trainer_id)
        references trainer (id)
);
