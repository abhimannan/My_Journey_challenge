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
select * from products;
select * from students
where age>=20;
select name,date_of_birth from students;
create table appointments (
patient_name char(30),
visit time,
visit_date date
);
insert into appointments values("vijay","14:25:00","2025-12-14"),
							("geetha","12:30:00","2025-12-15");
 select * from appointments
 where visit_date > "2025-10-10";
 
