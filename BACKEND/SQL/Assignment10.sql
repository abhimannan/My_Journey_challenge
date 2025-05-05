create database Assignment10;
use Assignment10;
create table employees(
emp_id int,
name varchar(100),
department varchar(100),
salary int
);
insert into employees values
(1,"Raj","HR",35000),
(2,"Priya","Sales",45000),
(3,"Arun","HR",40000),
(4,"Sneha","IT",50000),
(5,"Manoj","Sales",42000);
select count(emp_id) from employees;
select sum(salary) from employees;
select avg(salary) from employees;
select min(salary),max(salary) from employees;
select count(emp_id),department from employees
group by department;
select sum(salary),department from employees
group by department;
select avg(salary),department from employees
group by department;
 select department,count(emp_id) from employees
 group by department
 having count(emp_id) > 1;
select department,max(salary) from employees
group by department;
select department,sum(salary) from employees
group by department
having sum(salary) > 70000;



