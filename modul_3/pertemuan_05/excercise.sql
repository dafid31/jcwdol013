/* Create db name as purwadhika_student, purwadhika_schedule, purwadhika_branch */
create database purwadhika_student;
create database purwadhika_schedule;
create database purwadhika_branch;

/*Show list of database with name contain purwadhika.*/
show databases like '%purwadhika%';

-- Delete database purwadhika_schedule-- 

drop database purwadhika_schedule;

use database purwadhika_student
select * from purwadhika_student;



/*Create table name as Students in purwadhika_student db, with field id, last_name, first_name, address, city. The
id field should be in integer type while the rest is varchar.*/  

use purwadhika_student;
create table student(
id int,
first_name varchar(255),
last_name varchar(255),
addres varchar(255),
city varchar(255)
);

-- Add email column into table Students with type varchar.-- 

alter table student
add column email varchar(255);

-- Add gender, batch_code, phone_number, alternative_phone_number column in single query--  

alter table student
add column gender varchar(10),
add column batch_code varchar(20),
add column phone_number varchar(20),
add column alternative_phone_number varchar(20);

-- Change alternative_phone_number column name into description with varchar type--  

alter table student 
change column alternative_phone_number description varchar(255);

-- Remove column gender in table Students--  
alter table student 
drop column gender;

-- Try to create table with output look like image below:-- 
use purwadhika_branch;


create table branch (
id int auto_increment primary key,
branch_name varchar(50),
pic varchar(50),
address varchar(50),
city varchar(50),
province varchar(50)
);

insert into branch(branch_name,pic,address,city,province) values
('BSD','thomas','green office park 9','BSD','Tangerang'),
('JKT','budi','MSIG tower','Jakarta Selatan','Batam'),
('BTM','angel','Nosa','Batam','Kep.Riau');

-- Change PIC name into Dono if city is BSD-- 
update branch set pic='Dono'
where id=1;

-- Add another branch with branch name BLI, pic is Tono, address is Gianyar, city is Gianyar, province is Bali-- 

insert into branch (branch_name,pic,address,city,province) values ('BLI','Tono','Gianyar','Gianyar','Bali');

