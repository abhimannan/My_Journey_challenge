-- Constraints : set of rules
show databases;
use abhi;
show tables;
select * from employee;

create table students(
id int primary key,
name varchar(50) NOT NULL,
email varchar(50) UNIQUE,
phone_number int unique,
age int check(age>=18),
course varchar(50) default "JAVA"
);

create table course(
course_id int primary key,
course_name varchar(50)
);

create table enrolment(
enrol_id int primary key,
student_id int,
course_id int,
foreign key(student_id) references students(id),
foreign key(course_id) references course(course_id)
);

create table employees (
emp_id int primary key,
name varchar(50),
email varchar(50) unique,
age int check(age>21),
status varchar(50) default "Active",
dept_id int,
foreign key(dept_id) references departments(dept_id)
);

insert into employees (emp_id,name,email,age,dept_id) values(1,"abhi","abhi543@gmail.com",22,12);
insert into employees (emp_id,name,email,age,dept_id) values(2,"Geetha",null,24,12);
alter table employees
add column gender varchar(5) check(gender in('M','F'));
insert into employees (emp_id,name,email,age,dept_id,gender) values(5,"Kumar","abhi123tech@gmail.com",24,12,'M');

drop table departments;

create table departments(
dept_id int primary key,
dept_name varchar(50)
);
insert into departments values(12,"CSE");

create table products (
id int primary key,
price int check(price>0)
);
alter table products
add column created_on datetime default current_timestamp;

alter table products
drop column price;
alter table products
add column price int;
select * from products;



