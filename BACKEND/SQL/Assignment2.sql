create database Student_Data;
use Student_Data;

create table students(
id int primary key,
name varchar(100),
hallticket_no varchar(50),
college varchar(50),
age varchar(50),
gender char(1),
department varchar(50)
);
insert into students values(1,"abhi","22f41a0548","SRM",20,'M',"CSE"),
						   (2,"vijay","22f41a0549","Jain",19,'M',"ECE");
select * from students;

-- Assignment
create table Employees(
Id int primary key,
Name varchar(100) NOT NULL,
Age int,
Department varchar(100)
);

create table Products (
ProductID  int primary key,
Name varchar(100),
Price int,
Quality int
);

insert into Employees values(1,"Ravi",25,"Sales");

insert into Employees values(2,"Geetha",35,"HR"),(3,"Kumar",45,"Maintance"),(4,"Vijay",19,"Development");

Create table Books (
BookID int primary key,
Title varchar(200),
Author varchar(50),
Price int
);

insert into Books values(1,"Learn SQL","John Doe",399);

Create table Customers (
Customer_ID int primary key,
Name varchar(100) NOT NULL,
Email varchar(100) NOT NULL
);

insert into Customers values (1,"Abhi","abhi543it@gmail.com"),(2,"Vijay","Vijay@gmail.com");

create table Courses (
CounseID int primary key,
Name varchar(100),
Duration int
);

insert into Courses values (1,"Java",10),(2,"DSA",8);


