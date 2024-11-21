create database delta;
drop database delta;
show databases;
use delta;
create table Students(
roll_no int,
name varchar(30),
marks int
);
insert into Students values(101,"geetha",95),(102,"kumar",96);
describe table Students;
select * from Students;

show databases;
show tables;
create database if not exists instagram;
use instagram;
show tables;
create table insta(
id int primary key,
name varchar(30) not null,
age int,
email varchar(50) unique,
address varchar(50),
followers int,
followings int,
constraint check (age>=18)
);
insert into insta values(1,"abhi",20,"abhi53it@gmail.com","ABR City",250,10);
select * from insta;
alter table insta add posts int;
alter table insta drop posts;
drop table insta;
show tables;

-- foreign key
-- create table student(
-- id int primary key not null,
-- name varchar(30),
-- teacher_id int
-- );
-- drop table student;
-- create table teacher(
--   id int primary key,
--   teacher_name varchar(20)
--   
-- );

-- FOREIGN KEY EXAMPLE	
-- USER TABLE 
create table user(
id int primary key,
age int,
names varchar(30),
email varchar(20),
followings int,
followers int
);
-- POSTS TABLE
create table posts_details(
id int,
content varchar(1000),
user_id int,
foreign key(user_id) references user(id)
);

show tables;
drop table user;
insert into user values(1,20,"abhi","abhi123@gamil.com",12,10),(2,23,"geetha","geetha123@gamil.com",15,45),
(3,22,"kumar","vii123@gamil.com",120,12);
insert into posts_details values(101,"this is my new post",3);
insert into posts_details values(102,"i am bad",2),(103,"i am good",1);
select * from user;
select * from posts_details;
select age from user;
select age from user
where age>20;
select distinct * from user;

select * from posts_details;

create table family(
roll int,
name varchar(30),
age int,
salary double
);
drop table family;
insert into family values(1,"Abhi",20,25000),(98,"geetha",35,35050),
(20,"vijay",19,32005),(21,"kumar",40,78000),(22,"Abhi",25,136000),
(23,"geetha",38,89000),(24,"aval",20,58000),(25,"priya",18,32000),
(26,"thambi",32,65000),(27,"sathy",23,561000),(28,"hari",69,125000);
select * from family;

select name from family;
select distinct name from family
where name like "a%";
select distinct name from family
where name like "%a";
select distinct name from family
where name like "_a%";
select * from family
where salary<50000;
select name,age from family
order by name;

select name from family
where age<25 and salary>25000;
select * from family
where age<20 or age<19;
select * from family
where name in("abhi","vijay");
select * from family
where name in("abhi");
select * from family
where name not in("abhi")
limit 3;
select name,salary from family
where salary between 20000 and 30000;
select  roll,name from family
order by roll desc;

-- Aggregate Functions
select count(roll) as Total from family;
select max(age) from family;
select min(salary) from family;
select avg(salary) from family;
select sum(salary) from family;

select age,count(roll) from family
group by age
having count(roll)>1;

select age,count(roll) from family
group by age
having min(salary)<50000
order by age asc;
-- Update table
create table sample(
id int,
name varchar(30),
age int
);
insert into sample values(1,"Geetha",35);
select * from sample;
update sample
set AGE=25,NAME="kUMAR"
where id=1;
-- Update
UPDATE sample
set name="Vijay"
where id=1;
-- To prevent the error when we are executing update first time
set SQL_SAFE_UPDATES=0;
-- Delete
delete from sample
where id=1;
select * from sample;
alter table sample add salary int;
insert into sample values(101,"Abhi",20,50000);
truncate table sample;
