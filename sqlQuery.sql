-- create view orderfulldetails as
-- select orderitem.orderID, orderitem.customerid, orderitem.houseNumber,orderitem.streetName, orderitem.town,orderitem.district, orderitem.ordereddate, orderitem.employeeid, orderitem.driverid, orderitem.orderstatus, 
-- customer.firstName as customerName ,  ordereditemdetails.itemID,items.name ,ordereditemdetails.quantity, items.stockavailability, ordereditemdetails.totalPrice
-- from orderitem join customer on (orderitem.customerid = customer.id) join ordereditemdetails on (orderitem.orderID = ordereditemdetails.orderID)
-- join items on (items.itemID = ordereditemdetails.itemID)

-- insert into orderitem (customerid,ordereddate,houseNumber,streetName,town,district) values('2','1234','8','kovil road','jaffna','jaffna');

-- insert into ordereditemdetails (orderID, itemID, quantity, totalPrice) values('100008','50001','2', '100' )
-- select orderID from orderitem where orderitem.customerid = '2' and ordereddate = 'Sun Jan 08 202316:44:09';
-- drop view orderfulldetais

-- select * from orderfulldetails where orderstatus like "To Proceed" or orderstatus like "To Be Proceeded" or orderstatus like "Proccessing" 

-- update orderitem set orderstatus = "Shipped", employeeid= "2" where orderID = "100029"

-- drop view orderfulldetails;
-- create view orderfulldetails as
-- select orderitem.orderID, orderitem.customerid, orderitem.houseNumber,orderitem.streetName, orderitem.town,orderitem.district, 
-- orderitem.ordereddate, orderitem.employeeid, orderitem.driverid, orderitem.orderstatus, orderitem.store, customer.firstName as customerName ,  ordereditemdetails.itemID,items.name ,ordereditemdetails.quantity, items.stockavailability, 
-- ordereditemdetails.totalPrice
-- from orderitem join customer on (orderitem.customerid = customer.id) join ordereditemdetails on (orderitem.orderID = ordereditemdetails.orderID)
-- join items on (items.itemID = ordereditemdetails.itemID)


-- set global event_scheduler ="ON";

-- drop event  updateWeeklyHours

-- CREATE EVENT updateWeeklyHours
-- ON SCHEDULE EVERY 1 week
-- STARTS '2023-01-08 00:00:00'
-- DO
-- UPDATE driverschedule SET weeklyhours = 0;

-- CREATE EVENT updateConsecutiveDrives
-- ON SCHEDULE EVERY 1 week
-- STARTS '2023-01-08 00:00:00'
-- DO
-- UPDATE driver_schedule SET weeklyhours = 0;

-- drop  event update_price
-- alter table orderitem drop  ordereddate 
-- alter table orderitem add  ordereddate VARCHAR(100) 


-- create table  driver Scheduledriver_schedule

-- create table driverSchedule(
-- driverID int,
-- weeklyHours numeric(4,2),
-- consecutiveDrives decimal(1,0),
-- isAvailable tinyint(1),
-- primary key (driverID),
-- foreign key(driverID)
-- references driver(id)
-- on delete cascade on update cascade
-- )
-- insert into driverschedule values(1,23,1,1);
-- insert into driverschedule values(3,2,0,0);
-- insert into driverschedule values(4,38,1,0);


-- create view driverDetails as 
-- select driver.id, driver.driverTypeId, driver.firstName, driver.lastName, driver.contactNumber, driver.district,
-- driverschedule.weeklyHours, driverschedule.consecutiveDrives, driverschedule.isAvailable, driverschedule.driveStart, driverschedule.driveEnd
-- from driver join driverschedule on (driver.id = driverschedule.driverID) order by (weeklyHours) 

-- insert into driverschedule (isAvailable,driveStart,driveEnd) values(4) 
-- UPDATE driverschedule SET isAvailable = '1' WHERE driverID = '3';

-- create table route(
-- routeID int not null AUTO_INCREMENT,
-- routeName varchar(200),
-- routeHour int,
-- storeID varchar(4),
-- primary key (routeID),
-- foreign key (storeID) references store(storeID)
-- on delete cascade on update cascade
-- )auto_increment =200000;


-- create table routeDefinition(
-- routeID int,
-- town varchar(40),
-- noOfOrders int,
-- primary key (town),
-- foreign key (routeID) references route(routeID)
-- on delete cascade on update cascade
-- );

-- create view townRoute as
-- select route.routeID, routeName,routeHour, storeName ,town, noOfOrders, store.storeID
-- from route join routedefinition on ( route.routeID = routedefinition.routeID) join  store on (route.storeID = store.storeID) ;

-- insert into store values (1,"Jaffna");
-- insert into store values (2,"Colombo");
-- insert into store values (3,"Negambo");
-- insert into store values (4,"Galle");
-- insert into store values (5,"Matara");
-- insert into store values (6,"Trincomalle");
-- insert into store values (7,"Kandy");

-- create table store (
-- storeID VARCHAR(4),
-- storeName VARCHAR(100),
-- primary key (storeID)
-- )

-- insert into route (routeName,routeHour,storeID)values ("KKS Road",2,1);
-- insert into route (routeName,routeHour,storeID)values ("Parithithurai Road",4,1);
-- insert into route (routeName,routeHour,storeID)values ("Galle road",3,2);
-- insert into route (routeName,routeHour,storeID)values ("maraine drive",3,2);
-- insert into route (routeName,routeHour,storeID)values ("beach road",1,2);
-- insert into route (routeName,routeHour,storeID)values ("Negambo road",2,3);
-- insert into route (routeName,routeHour,storeID)values ("1st cross road",4,3);
-- insert into route (routeName,routeHour,storeID)values ("Galle town road",2,4);
-- insert into route (routeName,routeHour,storeID)values ("Viharamahadevi road",3,4);
-- insert into route (routeName,routeHour,storeID)values ("matara main road",2,5);
-- insert into route (routeName,routeHour,storeID)values ("beach road",4,5);
-- insert into route (routeName,routeHour,storeID)values ("temple road",1,6);
-- insert into route (routeName,routeHour,storeID)values ("trinco main road",4,6);
-- insert into route (routeName,routeHour,storeID)values ("temple road",1,7);
-- insert into route (routeName,routeHour,storeID)values ("park road",3,7);

-- insert into routedefinition (routeID,town,noOfOrders) values (200000,"Jaffna",1);
-- insert into routedefinition (routeID,town,noOfOrders) values (200000,"Kokuvil",1);
-- insert into routedefinition (routeID,town,noOfOrders) values (200000,"kondavil",3);
-- insert into routedefinition (routeID,town,noOfOrders) values (200000,"kks",5);
-- insedriveidUpdatert into routedefinition (routeID,town,noOfOrders) values (200001,"koppai",5);
-- insert into routedefinition (routeID,town,noOfOrders) values (200001,"Neerveli",3);
-- insert into routedefinition (routeID,town,noOfOrders) values (200001,"Parithurai",5);
-- insert into routedefinition (routeID,town,noOfOrders) values (200002,"Dehiwala",5);
-- insert into routedefinition (routeID,town,noOfOrders) values (200002,"Ratmalana",3);
-- insert into routedefinition (routeID,town,noOfOrders) values (200002,"Moratuwa",5);
-- insert into routedefinition (routeID,town,noOfOrders) values (200003,"Wellawata",5);
-- insert into routedefinition (routeID,town,noOfOrders) values (200003,"Kollupitiya",3);
-- insert into routedefinition (routeID,town,noOfOrders) values (200003,"Bambalapitiya",5);
-- insert into routedefinition (routeID,town,noOfOrders) values (200007,"Galle",5);
-- insert into routedefinition (routeID,town,noOfOrders) values (200007,"Ambalapitiya",3);
-- insert into routedefinition (routeID,town,noOfOrders) values (200007,"Bentota",5);
-- drop trigger driveidUpdate;

-- delimiter #
-- create trigger driveidUpdate after insert on driver 
-- for each row 
-- begin
-- insert into driverschedule(driverID) values (new.id);
-- end #
-- delimiter #
-- begin 
-- insert into driver (id, email,password,firstname,lastname,driverTypeId,address,contactNumber,district) 
-- values (15,"c.meenambika@gmail.com","meena","Meenambika","Chandirakumar","MaDri","1234","0775630057","Jaffna");

-- create view OrderAndRoute as
-- select orderfulldetails.orderID, houseNumber, streetName, orderfulldetails.town, district, driverid, orderstatus, customerName, name, quantity, totalPrice, routeID,noOfOrders
-- from orderfulldetails join routedefinition on (orderfulldetails.town = routedefinition.town);

-- alter table driverschedule
-- drop column driveStart;
-- alter table driverschedule
-- drop column driveEnd;
-- create view   as
-- select driver.id, driver.firstName, lastName, driver.driverTypeId, contactNumber, district, drivertype from driver join driver_type on (driver.driverTypeId = driver_type.drivertypeid)

-- create view driveDetailsView as 
-- select id, firstName, lastName, driverTypeId, contactNumber, district, drivertype , 
-- driverschedule.isAvailable, driverschedule.consecutiveDrives, driverschedule.weeklyHours
-- from driverview join driverschedule on (driverview.id = driverschedule.driverID)

-- create table driverSchedule 
-- create table driverSchedule(
-- driverID int,
-- weeklyHours numeric(4,2),
-- consecutiveDrives decimal(1,0),
-- isAvailable tinyint(1),
-- primary key (driverID),
-- foreign key(driverID)
-- references driver(id)
-- on delete cascade on update cascade
-- )

-- alter table orderitem 
-- add column assistantDriverID int;

-- drop view orderfulldetails,orderandroute;
--  create view orderfulldetails as
-- select orderitem.orderID, orderitem.customerid, orderitem.houseNumber,orderitem.streetName, orderitem.town,orderitem.district, 
-- orderitem.ordereddate, orderitem.employeeid, orderitem.Maindriverid, orderitem.orderstatus, orderitem.store, customer.firstName as customerName ,  ordereditemdetails.itemID,items.name ,ordereditemdetails.quantity, items.stockavailability, 
-- ordereditemdetails.totalPrice, orderitem.assistantDriverID
-- from orderitem join customer on (orderitem.customerid = customer.id) join ordereditemdetails on (orderitem.orderID = ordereditemdetails.orderID)
-- join items on (items.itemID = ordereditemdetails.itemID)

--  create view OrderAndRoute as
-- select orderfulldetails.orderID, houseNumber, streetName, orderfulldetails.town, district, Maindriverid,assistantDriverID, orderstatus, customerName, name, quantity, totalPrice, routeID,noOfOrders
-- from orderfulldetails join routedefinition on (orderfulldetails.town = routedefinition.town);

-- select *,count(orderID) as currentOrdersCount from OrderAndRoute where routeID=200000 group by routeID
-- alter table routeDefinition
-- drop column noOfOrders ;
-- alter table route
-- add column noOfOrders int;
--  update  route set noOfOrders = 50 where routeID = 200000;

-- create view manageorder as
-- select orderitem.orderID, orderitem.customerid, orderitem.houseNumber,orderitem.streetName, orderitem.town,orderitem.district, 
-- orderitem.ordereddate, orderitem.employeeid, orderitem.Maindriverid, orderitem.assistantDriverID, orderitem.orderstatus
-- from orderitem join customer on (orderitem.customerid = customer.id) 
-- join ordereditemdetails on (orderitem.orderID = ordereditemdetails.orderID)
-- join items on (items.itemID = ordereditemdetails.itemID)


-- create view storeRoute
-- create view storeRoute as
-- select route.routeID, routeName,routeHour, storeName , store.storeID, route.noOfOrders
-- from route join  store on (route.storeID = store.storeID) ;


-- create view townRoute as
-- select route.routeID, routeName,routeHour, storeName ,town, noOfOrders, store.storeID
-- from route join routedefinition on ( route.routeID = routedefinition.routeID) join  store on (route.storeID = store.storeID) ;

--  create view OrderAndRoute as
-- select orderfulldetails.orderID, houseNumber, streetName, orderfulldetails.town, district, Maindriverid,assistantDriverID, orderstatus, customerName, name, quantity, totalPrice, route.routeID,noOfOrders
-- from orderfulldetails join routedefinition on (orderfulldetails.town = routedefinition.town) join route on ( route.routeID = routedefinition.routeID);

-- update orderandroute set Maindriverid =12 where routeID = 200000;

-- select * from storeroute join orderfulldetails on (routeID) 
-- where storeName = 'jaffna' and orderstatus = 'Recived to District'
-- group by orderID

-- select * from OrderAndRoute where routeID='200000' and orderstatus = 'Recived to District'


-- drop trigger consecutiveDrivesUpdateMainDriver ;
-- delimiter #
-- create trigger consecutiveDrivesUpdateMainDriver after update on  orderitem

-- for each row 
-- begin
-- if new.Maindriverid<>old.Maindriverid then
-- update driverschedule 
-- set consecutiveDrives=0;
-- -- where driverID = new.Maindriverid;
-- end if;
-- end #
-- delimiter #
 
-- delimiter #
-- create trigger consecutiveDrivesUpdateMainDriver after update on  orderitem

-- for each row 
-- begin
-- if new.Maindriverid<>old.Maindriverid then
-- update driverschedule 
-- set consecutiveDrives=1
-- where driverID = new.Maindriverid;
-- end if;
-- end #
-- delimiter #

-- select distinct routeID from orderandroute where assistantDriverID = 3 






-- delimiter #
-- create trigger routeUpdateAssistantDriver after update on  orderitem
-- for each row 

-- begin
-- 	declare countRoutID int  ;
--     set getRouteID = 0;
-- 	select distinct routeID into getRouteID from orderandroute where assitantDriverID = new.assitantDriverID;
-- 	if new.assitantDriverID<>old.assitantDriverID then
-- 		
-- 		update driverandroute 
-- 		set assitantDriverID = new.assitantDriverID
-- 		where routeID = getRouteID ;
-- 		
-- 	end if;
-- end #
-- delimiter #

-- drop trigger consecutiveDrivesUpdateAssDriver


-- update column every week
-- set global event_scheduler ="ON";

-- CREATE EVENT updateWeeklyHours
-- ON SCHEDULE EVERY 1 week
-- STARTS '2023-01-08 00:00:00'
-- DO
-- UPDATE driverschedule SET weeklyhours = 40 where driverID in (select id from driver where driverTypeId="MaDri");

-- select driverID,weeklyHours from driverSchedule where driverID in (select id from driver where driverTypeId="MaDri");

--  drop event updateWeeklyHours;

-- CREATE EVENT updateWeeklyHoursAssitantDriver
-- ON SCHEDULE EVERY 1 week
-- STARTS '2023-01-08 00:00:00'
-- DO
-- UPDATE driverschedule SET weeklyhours = 60 where driverID in (select id from driver where driverTypeId="AsDri");





-- delimiter #
-- create trigger weeklyHoursUpdateAssistantDriver after update on driverschedule
-- for each row 
-- begin
-- declare getRouteHour int;
-- select distinct routeHour into getRouteHour from orderandroute where assistantDriverID = new.assistantDriverID;
-- if new.consecutiveDrives<>old.consecutiveDrives then

-- update driverschedule 
-- set weeklyHours=weeklyHours-getRouteHour
-- where driverID = new.assistantDriverID ;
-- end if;
-- end #
-- delimiter #


-- select distinct routeHour from orderandroute where assistantDriverID =3;




-- CREATE TABLE driverandroute (
-- routeID INT NOT NULL,
-- mainDriverID INT NULL,
-- assistantDriverID INT NULL,
-- PRIMARY KEY (routeID),
-- foreign key (mainDriverID) references driver(id)
-- on delete cascade on update cascade,
-- foreign key (assistantDriverID) references driver(id)
-- on delete cascade on update cascade
--   );


-- delimiter #
-- create trigger driveRouteUpdate after insert on route 
-- for each row 
-- begin
-- 	insert into driverandroute (routeID) values (new.routeID);
-- end #
-- delimiter #

-- update driverandroute set mainDriverID = 4 where routeID = 200001;


-- delimiter #
-- create trigger routeUpdateMainDriver after update on  orderitem
-- for each row 

-- begin
-- 	declare countRoutID int  ;
--     set getRouteID = 0;
-- 	select distinct routeID into getRouteID from orderandroute where assistantDriverID = new.assistantDriverID;
-- 	if new.assistantDriverID<>old.assistantDriverID then
-- 		
-- 		update driverandroute 
-- 		set mainDriverID = consecutiveDrives+1
-- 		where routeID = getRouteID ;
-- 		
-- 	end if;
-- end #
-- delimiter #

-- create view driver Details
-- create view driverDetails as 
-- select driver.id, driver.driverTypeId, driver.firstName, driver.lastName, driver.contactNumber, driver.district,
-- driverschedule.weeklyHours, driverschedule.consecutiveDrives, driverschedule.isAvailable
-- from driver join driverschedule on (driver.id = driverschedule.driverID) order by (weeklyHours)

-- delimiter #
-- create trigger routeUpdateMainDriver after update on  orderitem
-- for each row 

-- begin
-- 	declare getRouteID int ;
--     set getRouteID = 0;
-- 	select distinct routeID into getRouteID from orderandroute where mainDriverID = new.mainDriverID;
-- 	if new.mainDriverID<>old.mainDriverID then
--     
-- 		update driverandroute 
-- 		set mainDriverID = new.mainDriverID
-- 		where routeID = getRouteID ;
-- 		
-- 	end if;
-- end #
-- delimiter #

-- delimiter #
-- create trigger routeUpdateAssDriver after update on  orderitem
-- for each row 

-- begin
-- 	declare getRouteID int ;
--     set getRouteID = 0;
-- 	select distinct routeID into getRouteID from orderandroute where assistantDriverID = new.assistantDriverID;
-- 	if new.assistantDriverID<>old.assistantDriverID then
--     
-- 		update driverandroute 
-- 		set assistantDriverID = new.assistantDriverID
-- 		where routeID = getRouteID ;
-- 		
-- 	end if;
-- end #
-- delimiter #


-- delimiter #
-- create trigger consecutiveDrivesUpdateAssistantDriver after update on  driverandroute
-- for each row 

-- begin
-- 	if new.assistantDriverID<>old.assistantDriverID then
-- 		
-- 		update driverschedule 
-- 		set consecutiveDrives = consecutiveDrives+1
-- 		where assistantDriverID =  new.assistantDriverID ;
-- 		
-- 	end if;
-- end #
-- delimiter #




-- delimiter #
-- create trigger weeklyHoursUpdateAssistantDriver after update on driverandroute
-- for each row 
-- begin
-- 	declare getRouteHour int;
-- 	set getRouteHour = 0;
-- 	select distinct routeHour into getRouteHour from orderandroute where assistantDriverID = new.assistantDriverID;
-- 	if new.assistantDriverID<>old.assistantDriverID then

-- 	update driverschedule 
-- 	set weeklyHours=weeklyHours-getRouteHour
-- 	where driverID = new.assistantDriverID ;
-- 	end if;
-- end #
-- delimiter #



-- update orderandroute set assistantDriverID = 13 where routeID = 200000 and orderstatus ='Recived to District' 
-- select * from orderandroute where routeID = 200000 and orderstatus ='Recived to District'

-- UPDATE `supplychainmanagement`.`orderitem` SET `assistantDriverID` = '8' WHERE (`orderID` = '100050');


-- update orderandroute set assistantDriverID = '23' where routeID = '200000' and orderstatus ='Recived to District'

-- update driverandroute set assistantDriverID = 13 where routeID = 200001


-- delimiter #
-- create trigger consecutiveDrivesUpdateAssistantDriver after update on  driverandroute 
-- for each row 

-- begin
-- 	if new.assistantDriverID<>old.assistantDriverID then
-- 		
-- 		update driverschedule 
-- 		set consecutiveDrives = consecutiveDrives+1
-- 		where assistantDriverID =  new.assistantDriverID ;
-- 		
-- 	end if;
-- end #
-- delimiter 

-- drop trigger consecutiveDrivesUpdateMainDriver



-- delimiter #
-- create trigger weeklyHoursUpdateAssistantDriver after update on driverandroute
-- for each row 
-- begin
-- declare getRouteHour int;
-- set getRouteHour = 0;
-- select distinct routeHour into getRouteHour from orderandroute where Maindriverid = new.Maindriverid;
-- 	if new.assistantDriverID<>old.assistantDriverID then

-- 	update driverschedule 
-- 	set weeklyHours=weeklyHours-getRouteHour
-- 	where driverID = new.assistantDriverID ;
-- 	end if;
-- end #
-- delimiter #
-- drop view weeklyHoursMainDriver;
-- drop view weeklyHoursAssistantDriver;

 -- create view weeklyHoursMainDriver as
-- select driverandroute.routeID,driverID,weeklyHours, routeHour
-- from driverandroute join driverschedule 
-- on (driverandroute.mainDriverID=driverschedule.driverID) join route on (route.routeID=driverandroute.routeID);


-- create view weeklyHoursAssistantDriver as
-- select driverandroute.routeID,driverID,weeklyHours, routeHour
-- from driverandroute join driverschedule on (driverandroute.assistantDriverID=driverschedule.driverID)
-- join route on (route.routeID=driverandroute.routeID)

-- update weeklyHoursAssistantDriver set weeklyHours=weeklyHours-routeHour where routeID=


-- select drivedetailsview.id, firstName,lastName, driverTypeId, district, drivertype,drivedetailsview.isAvailable,drivedetailsview.consecutiveDrives, weeklyHours-(select route.routeHour from route where routeID = 200001) as countWeeklyHours
-- from drivedetailsview join driverschedule on (drivedetailsview.id= driverID)

 

-- select id, firstName, driverTypeId, weeklyHours-(select route.routeHour from route where routeID = 200001) as countWeeklyHours
-- from driver join driverschedule on (driver.id= driverID)

-- select *, weeklyHours-(select route.routeHour from route where routeID = 200001) as countWeeklyHours  from drivedetailsview 
 
 -- delimiter #
-- create trigger weeklyHoursUpdateAssistantDriver after update on driverschedule
-- for each row 
-- begin
-- declare getRouteHour int;
-- set getRouteHour = 0;
-- select distinct routeHour into getRouteHour from orderandroute where assistantDriverID = new.assistantDriverID;
-- if new.consecutiveDrives<>old.consecutiveDrives then

-- update driverschedule 
-- set weeklyHours=weeklyHours-getRouteHour
-- where driverID = new.assistantDriverID ;
-- end if;
-- end #
-- delimiter #

-- create view weeklyHoursAssistantDriver as
-- select route.routeID, routeHour, weeklyHours, mainDriverID, assistantDriverID from driverandroute join driverschedule on (driverschedule.driverID =assistantDriverID ) join route on (driverandroute.routeID = route.routeID)


-- delimiter #
-- create trigger weeklyHoursUpdateAssistantDriver after update on driverandroute
-- for each row 
-- begin

-- declare getRouteID int;
-- set getRouteID = 0;
-- select routeID into getRouteID from driverandroute where assistantDriverID = new.assistantDriverID;

-- if new.assistantDriverID<>old.assistantDriverID then

-- update weeklyhoursassistantdriver 
-- set weeklyHours=weeklyHours-routeHour
-- where driverID = new.assistantDriverID and routeID = getRouteID;
-- end if;
-- end #
-- delimiter #

-- drop trigger weeklyHoursUpdateAssistantDriver







-- update weeklyhoursassistantdriver 
-- set weeklyHours=weeklyHours-routeHour
-- where driverID = 23 and routeID = 200001;


-- delimiter #
-- create trigger weeklyHoursUpdateAssistantDriver after update on driverandroute
-- for each row 
-- begin

-- if new.assistantDriverID<>old.assistantDriverID then

-- update weeklyhoursassistantdriver 
-- set weeklyHours=weeklyHours-routeHour
-- where driverID = new.assistantDriverID;
-- end if;
-- end #
-- delimiter #

-- drop trigger weeklyHoursUpdateAssistantDriver

-- delimiter #
-- create trigger weeklyHoursUpdateMainDriver after update on driverandroute
-- for each row 
-- begin

-- if new.mainDriverID<>old.mainDriverID then

-- update weeklyhoursmaindriver 
-- set weeklyHours=weeklyHours-routeHour
-- where driverID = new.mainDriverID;
-- end if;
-- end #
-- delimiter #

-- drop trigger weeklyHoursUpdateMainDriver

-- delimiter #
-- create trigger consecutiveDriveUpdateAssistantDriver after update on driverandroute
-- for each row 
-- begin

-- if new.assistantDriverID<>old.assistantDriverID then

-- update driverschedule 
-- set consecutiveDrives=consecutiveDrives +1
-- where driverID = new.assistantDriverID;
-- end if;
-- end #
-- delimiter #

-- drop trigger consecutiveDriveUpdateMainDriver

-- delimiter #
-- create trigger consecutiveDriveUpdateMainDriver after update on driverandroute
-- for each row 
-- begin
-- if new.mainDriverID <> old.mainDriverID then
-- 	update driverschedule 
-- 	set consecutiveDrives=1
-- 	where driverID = new.Maindriverid;
-- end if;
-- end #
-- delimiter #
-- drop view orderandroute;
--  alter table orderitem add assignedtime varchar(50);

-- create view OrderAndRoute as
-- select orderfulldetails.orderID, houseNumber, streetName, orderfulldetails.town, district, Maindriverid,assistantDriverID, orderstatus, customerName, name, quantity, totalPrice,assignedtime, route.routeID,noOfOrders
-- from orderfulldetails join routedefinition on (orderfulldetails.town = routedefinition.town) join route on ( route.routeID = routedefinition.routeID);

-- drop view orderfulldetails;


-- create view orderfulldetails as
-- select orderitem.orderID, orderitem.customerid, orderitem.houseNumber,orderitem.streetName, orderitem.town,orderitem.district, assignedtime,
-- orderitem.ordereddate, orderitem.employeeid, orderitem.Maindriverid, orderitem.orderstatus, orderitem.store, customer.firstName as customerName ,  ordereditemdetails.itemID,items.name ,ordereditemdetails.quantity, items.stockavailability, 
-- ordereditemdetails.totalPrice, orderitem.assistantDriverID
-- from orderitem join customer on (orderitem.customerid = customer.id) join ordereditemdetails on (orderitem.orderID = ordereditemdetails.orderID)
-- join items on (items.itemID = ordereditemdetails.itemID)


-- update orderandroute set Maindriverid =13 , assignedtime="2023-01-12T09:09:46.271Z"
-- where routeID =200000  and orderstatus ="Recived to District"

-- select DISTINCT storeroute.routeID, routeName from storeroute join orderandroute on (storeroute.routeID=orderandroute.routeID)
-- where storeName = 'jaffna' and orderstatus = 'Recived to District'group by orderID

-- create view oldDriverUpdate as
-- select Maindriverid, assistantDriverID, assignedtime  from  orderitem group by orderitem.assignedtime

-- delimiter #
-- create trigger consecutiveDriveUpdateOldMainDriver after update on olddriverupdate
-- for each row 
-- begin
-- if new.assignedtime <> old.assignedtime then
-- 	update driverschedule 
-- 	set consecutiveDrives=0
-- 	where driverID = old.Maindriverid;
-- end if;
-- end #
-- delimiter #

-- update driverschedule set consecutiveDrives = 0 where driverID in (select Maindriverid from olddriverupdate where assignedtime != "2023-01-12T10:51:05.068Z" ) group by (Maindriverid);

-- update driverschedule set consecutiveDrives = 0 
-- where driverID = (select assistantDriverID from olddriverupdate where assignedtime != "2023-01-12T10:51:05.068Z" ) group by (Maindriverid)


-- select Maindriverid from olddriverupdate where assignedtime != "2023-01-12T10:51:05.068Z" ;


-- select Maindriverid from olddriverupdate where assignedtime != "2023-01-12T10:51:05.068Z" and store = "jaffna" group by (Maindriverid) ;

-- create view oldDriverUpdate as
-- select Maindriverid, assistantDriverID, assignedtime , orderstatus, store from  orderitem where orderstatus !='Delivered and payed' 


-- update driverschedule set consecutiveDrives = 0 where driverID in (select Maindriverid from olddriverupdate where assignedtime != '2023-01-12T10:47:56.302Z'and store = 'jaffna' group by (Maindriverid))  


-- update driverschedule set consecutiveDrives = 0 where driverID in (select assistantDriverID from olddriverupdate where assignedtime != '2023-01-12T10:47:56.302Z'and store = 'jaffna' group by (assistantDriverID))


-- -- delimiter #driver_schedule
-- -- create trigger consecutiveDriveUpdateMainDriver after update on driverandroute
-- -- for each row 
-- -- begin
-- -- if new.mainDriverID <> old.mainDriverID then
-- -- 	update driverschedule 
-- -- 	set consecutiveDrives=1
-- -- 	where driverID = new.Maindriverid;
-- -- end if;
-- -- end #
-- -- delimiter #

-- delimiter #
-- create trigger consecutiveDriveUpdateMainDriver after update on orderitem
-- for each row 
-- begin
-- if new.mainDriverID <> old.mainDriverID then
-- 	update driverschedule 
-- 	set consecutiveDrives=1
-- 	where driverID = new.Maindriverid;
-- end if;
-- end #
-- delimiter #

-- drop trigger consecutiveDriveUpdateMainDriver


-- select DISTINCT* from storeroute join orderandroute on (storeroute.routeID=orderandroute.routeID) where Maindriverid is null

set global event_scheduler ="ON";

-- drop event  updateWeeklyHours

-- update column every week
-- set global event_scheduler ="ON";

-- CREATE EVENT updateWeeklyHours
-- ON SCHEDULE EVERY 1 week
-- STARTS '2023-01-08 00:00:00'
-- DO
-- UPDATE driverschedule SET weeklyhours = 40 where driverID in (select id from driver where driverTypeId="MaDri");

-- select driverID,weeklyHours from driverSchedule where driverID in (select id from driver where driverTypeId="MaDri");

--  drop event updateWeeklyHours;

-- CREATE EVENT updateWeeklyHoursAssitantDriver
-- ON SCHEDULE EVERY 1 week
-- STARTS '2023-01-08 00:00:00'
-- DO
-- UPDATE driverschedule SET weeklyhours = 60 
-- where driverID in (select id from driver where driverTypeId="AsDri");

-- trigger for driver id update 
-- drop trigger driveidUpdate


-- create trigger driveidUpdate after insert on driver 
-- for each row 
-- begin
-- 	if new.driverTypeId="MaDri" then
-- 		insert into driverSchedule(driverID,consecutiveDrives,weeklyHours) values (driverID,0,40);
-- 	end if;
--     if new.driverTypeId="AsDri" then
-- 		insert into driverSchedule(driverID,consecutiveDrives,weeklyHours) values (driverID,0,60);
-- 	end if;
-- end #
-- delimiter #

-- delimiter #
-- drop trigger driveidUpdate
-- delimiter #
-- create trigger driveidUpdate after insert on driver 
-- for each row 
-- begin
-- 	insert into driverSchedule(driverID) values (driverID);
-- end#
--  delimiter #
-- create trigger driveidUpdate after insert on driverschedule 
-- for each row 
-- begin
-- 	declare driverTypeid varchar(5) ;
--     set driverTypeid = "";
-- 	select driverTypeId into driverTypeid from driver where driverID = new.driverID;
-- 	if driverTypeid="MaDri" then
-- 		insert into driverSchedule(consecutiveDrives,weeklyHours) values (0,40);
-- 	end if;
--     if driverTypeid="AsDri" then
-- 		insert into driverSchedule(consecutiveDrives,weeklyHours) values (0,60);
-- 	end if;
-- end #
-- delimiter #

-- delimiter #
-- create trigger driveidUpdate after insert on driver 
-- for each row 
-- begin
-- 		insert into driverSchedule(driverID,consecutiveDrives,weeklyHours) values (new.id,0,40);
-- end #
-- delimiter #consecutiveDriveUpdateMainDriver



