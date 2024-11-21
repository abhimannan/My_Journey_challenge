-- Assignment 1
-- create a database for your college
create database if not exists College;
use College;
-- Create a table named Teacher
create table Teacher(
id int primary key,
name varchar(25),
subject varchar(30),
salary int
);
insert into Teacher value(23,"Ajay","math",50000),
(47,"Bharat","english",60000),(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);
select * from Teacher;
-- Select teacher whose salaru=y is morethan 55k
select * from Teacher
where salary>50000;
-- Rename the salary column to CTC
alter table Teacher
rename column salary to CTC;
-- update the salary of all teachers by increment of 25%
select name,CTC+CTC*(0.25) as "+25%" from Teacher;

update Teacher
set CTC=CTC+CTC/25
where id in(9,18,23,47);

-- add a new column called city,default is ""Gaurgaon"
alter table Teacher
add column City varchar(25) default "Gaurgaon";
alter table Teacher
drop column city;

-- delete the salary column
alter table Teacher
drop column CTC;
select * from Teacher;

drop table Teacher;

-- Assignment 2
-- Create the student information table
create table student_info(
roll_num int primary key,
name varchar(25),
city varchar(50),
marks double
);
insert into student_info values
(110,"adam","Delhi",76),(108,"bob","Mumbai",76),
(124,"casey","pune",94),(112,"duke","pune",80);
select * from student_info;

-- select all the students above 75+
select * from student_info
where marks>=75;
-- find names of all cities where students where from
select city,name from student_info;
-- find the maximum marks of students from each city
select max(marks),city from student_info
group by city;
-- find the average of the class
select avg(marks) as Average_Marks from student_info;
-- add a new column grade
alter table student_info
add column grade varchar(5);

update student_info
set grade="O"
where marks>80;
select * from student_info;
update student_info
set grade="A"
where marks between 70 and 80;
update student_info
set grade="B"
where marks between 60 and 70;

select * from student_info;