create database if not exists Abhi;
use Abhi;
create table employee(
id int,
name varchar(50),
age int,
salary int
);

insert into employee values(1,"Abhi",20,50000),
						    (2,"Vijay",19,8500000);
select name,age from employee;
select * from employee
where age>15;

select * from employee
order by age;

select avg(salary) from employee;

update employee
set age=19,age=20
where id=2;

set SQL_SAFE_UPDATES=0;

delete from employee
where id=1;

insert into employee values(3,"Geetha",35,56251),
							(4,"Kumar",45,690215),
                            (5,"Abhi",21,658214);
select * from employee;
select name,salary from employee;
select * from employee
where age<25;
select name from employee
where age between 30 AND 50;
select * from employee
where name in("Abhi","Geetha");
select MAX(salary) AS max_salary from employee;
select distinct(name) from employee;
select * from employee
order by salary;
select * from employee
where name like 'A%';
                            