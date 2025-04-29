create database if not exists Assignment7;
use Assignment7;
create table employees(
id int,
name varchar(40),
salary int
);
insert into employees values(1,"abhi",15000),(1,"geetha",25000),(1,"vijay",35000),(1,"kumar",85000);
select * from employees
where salary>20000;
create table students(
id int,
name varchar(50),
age int
);
insert into students values(1,"vijay",18),(2,"abhi",20);
select * from students
where age between 18 and 22;
select * from students
where name not in("abhi");
select * from students
where age in(18,22);
create table products(
id int,
product_name varchar(50),
price int
);
insert into products values(1,"shirt",350),(1,"pant",550);
select * from products
where price between 300 and 600;
select * from products
where price > 100;
create table customers(
id int,
name varchar(50),
country varchar(70)
);
insert into customers values(1,"geetha","new yark"),(2,"kumar","new yark");
select name from customers
where country = "new yark";
create table books(
id int,
book_name varchar(100),
published date
);
insert into books values(2,"Atomic habits","2025-10-10");
select * from books
where published > "2024-10-10";
select * from employees;
select * from employees
where name like "a%";
select * from employees
where name like "%a";
create table orders(
id int,
product_name varchar(100),
order_date date
);
insert into orders values (1,"pencial","2021-01-01");
select * from orders
where order_date < "2022-01-01";
