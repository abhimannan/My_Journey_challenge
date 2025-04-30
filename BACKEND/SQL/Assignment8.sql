create database Assignment8;
use Assignment8;
drop table employees;
create table employees (
emp_id int,
emp_name varchar(50),
depertment varchar(50),
salary float,
age int,
email varchar(100),
hire_date date
);
show databases;

insert into employees values(1,"Ravi","HR",45000.00,28,"ravi@gmail.com","2022-03-12");
insert into employees values(2,"priya","IT",60000,32,"priya123@gmail.com","2021-07-01"),
						     (3,"ankit","sales",35000.00,24,"ankit@outlook.com","2023-01-25"),
							(4,"Swathi","HR",48000.00,29,"swathi@gmail.com","2020-11-10"),
                            (5,"Kiran","IT",70000.00,35,null,"2019-04-15"),
                            (6,"Sneha","Marketing",30000.00,22,"sneha@rediffmail.com","2020-11-10");
select * from employees
where depertment in("IT");
select emp_name from employees
where salary > 50000;
select * from employees
where age < 30;
select * from employees
where email like "%gmail.com";
select emp_name,salary from employees
where salary between 30000 and 50000;
select * from employees
where depertment not in("HR","Sales");
select * from employees
where email like "null";
select * from employees
where hire_date in('2022-03-12');
select * from employees
where emp_name like "S%";
select * from employees
where age not between 25 and 32;
