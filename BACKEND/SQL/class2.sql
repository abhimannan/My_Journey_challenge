show databases;
use instagram;
show tables;
select * from users;

select * from users
where followers<2000;

insert into users values(3,"geetha",45216),(4,"abhi",4526),(5,"arun",32658),(6,"aval",963);
insert into users values(63,"geetha",2536),(96,"abhi",3647),(25,"arun",10),(108,"aval",0);

select * from users
where followers<1500 AND followers>900;

select * from users
where followers=1245 OR followers=963;

select * from users
where followers in(4526);

select * from users
where username not in("kumar");

select * from users
where followers between 4000 AND 10000;

-- Limit clause
select * from users
limit 3;

-- order by clause
select username,followers from users
order by username;

select * from users
order by followers desc;

select * from users
order by followers ASC;

-- Aggregate functions
-- count(), max(),min(),sum(),avg()
select count(*) as TOTAL from users;
select * from users;
select max(followers) from users;
select min(followers) from users;
select avg(followers) from users;
select sum(followers) from users;

-- group by clause
select username,count(followers) from users
group by username;

select username,avg(followers) from users
group by username
having followers<1000;

create table uploads
(
postname varchar(100),
age int,
likes int
);

insert into uploads values("a",20,2200),("b",15,250),("c",30,3520),("d",35,3625),("e",10,23),
                            ("b",10,23),("a",10,23),("c",10,23);

select * from uploads;

-- having clauese
select postname,max(likes) from uploads
group by postname
having max(likes)>200;

-- CRUD
-- update
update uploads
set postname="a",postname="Abhi"
where age in(20,10);

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM UPLOADS;

update uploads
set postname="b",postname="Geetha"
where age=15;

update uploads
set postname ="c",postname="Vijay"
where age=30;

update uploads
set postname="d",postname="Kumar"
where age=35;

-- delete
delete from uploads
where likes=250;

-- alter
alter table uploads
add column city varchar(100) default "ABR City";
select * from uploads;
alter table uploads
drop column city;
	
alter table uploads
rename to abhi;
select * from abhi;

alter table abhi
modify city varchar(100) default "ABR";

alter table abhi
change column postname Content varchar(100);

