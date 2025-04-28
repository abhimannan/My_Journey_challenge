create database keys_database;
use keys_database;
create table departments(
dept_id int primary key,
dept_name varchar(50)
);
create table employess(
employee_id int,
employee_name varchar(50),
depertment int,
FOREIGN KEY(depertment) references departments(dept_id)
);
-- assignment
create table authors (
author_id int primary key,
name varchar(40)
);
create table books (
book_id int primary key,
title varchar(50),
author_id int,
foreign key(author_id) references authors(author_id)
);
insert into authors values(1,"abhi"),
					(2,"vijay");
insert into books (book_id,title,author_id) values(101,"Atomic Habits",1),
  (102,"The Power of your subconsious mind",2),(103,"Self Decipline",2);
  select * from authors;
create table enrollments (
student_id int,
course_id int,
enroll_date date,
primary key(student_id,course_id)
);
create table customer(
customer_id int primary key,
name varchar(50),
age int
);
create table orders(
order_id int primary key,
name varchar(50),
customer_ids int,
constraint CUST_CONSTRAINT FOREIGN KEY(customer_ids) REFERENCES customer(customer_id)
);
drop table orders;

alter table orders
drop constraint CUST_CONSTRAINT;

create table categories(
category_id int primary key,
category varchar(50),
parent_id int,
constraint category_constraint foreign key(parent_id) REFERENCES categories(category_id)
);
 insert into categories values(1,"SC",1);
insert into categories values(3,"OC",null);





