create database Assignment9;
use Assignment9;
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
order by salary
limit 3;
select * from employees
where hire_date > "2022-01-01"
limit 2;
select * from employees
order by age
limit 2 offset 2;
select * from employees
where depertment in("HR")
limit 4;
select * from employees
where depertment in("Marketing")
limit 1;
select * from employees
where age > 30
order by salary desc;
select * from employees
where salary > 35000
limit 3 offset 1;
select emp_name from employees
where age < 28
limit 5;
select * from employees 
where depertment in("Sales")
limit 1;


