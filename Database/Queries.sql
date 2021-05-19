Create database Capstone_Project_Group6 ;

use Capstone_Project_Group6;

create table customer_details(customer_id int primary key auto_increment, first_name varchar(50), last_name varchar(50),
email varchar(50));

create table address_details(address_id int primary key auto_increment, city varchar(30), country varchar(30),
state varchar(30), street varchar(100), zipcode varchar(20));

create table order_details(order_id int primary key auto_increment, total_quantity int, total_price double, address_id
 int , customer_id int, foreign key (`address_id`) references address_details(`address_id`), 
 foreign key (`customer_id`) references customer_details(`customer_id`));

create table login_details(user_id int primary key auto_increment NOT NULL,first_name varchar(50),
 last_name varchar(50),email varchar(50),user_password varchar(50));

select * from order_details;
select * from address_details;
select * from customer_details;
select * from login_details;


 