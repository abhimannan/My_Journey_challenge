-- show tables;
-- -- show databases;
-- select * from emp_info;
-- select emp_name,salary from emp_info;
use delta;
-- show databases;
-- drop table if exists user;
-- drop table if exists user1;
-- drop table if exists students;

create table user(
id int primary key,
username varchar(30),
email varchar(30),
pass_word varchar(40)
);
-- create table products(id int,name varchar(30));
select * from user;
-- show tables;
create table user2(
id int primary key,
username varchar(30),
email varchar(30),
pass_word varchar(40)
);
select * from user2;