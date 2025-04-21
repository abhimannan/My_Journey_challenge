create database if not exists day4;
use day4;
create table students (
name varchar(50),
age int ,
date_of_birth date
);

create table products (
id int primary key,
name varchar(50),
price decimal(7,2),
stock boolean
);
insert into products values(1,"Mobiles",12999.99,1);
select * from products;
insert into students values ("abhi",20,"2005-08-10");
alter table products
rename column price cvcv float;
