show tables;

drop table users;
create table users(
id int NOT NULL,
username varchar(25),
followers int,
primary key(id)
);

create table posts(
id int,
content varchar(500),
userid int,
foreign key(userid) references users(id)
);

insert into users values(1,"kumar",1245),(2,"vijay",235689);

insert into posts values(52,"good",2),(12,"Nice",1);

select * from users;
select * from posts;

show databases;

