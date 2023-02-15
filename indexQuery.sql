-- create index QuarterlySales on orderitem(ordereddate)
-- create index index_on_item on items(noOfOrders);
-- create index index_on_order on routedefinition(town);

-- CREATE EVENT updateConsecutiveDrivesDaily
-- ON SCHEDULE EVERY 1 day
-- STARTS '2023-01-13 00:00:00'
-- DO
-- UPDATE driverschedule SET consecutiveDrives = 0

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

-- DELIMITER //

-- CREATE PROCEDURE GetEmployers()
-- BEGIN
-- 	SELECT  id, firstName,lastName, district FROM employers;
-- END //

-- DELIMITER ;

-- DELIMITER //

-- CREATE PROCEDURE GetDriver()
-- BEGIN
-- 	SELECT  id, firstName,lastName,driverTypeId, district FROM driver;
-- END //

-- DELIMITER ;


-- delimiter #
-- create trigger driveRouteUpdate after insert on route 
-- for each row 
-- begin
-- 	insert into driverandroute (routeID) values (new.routeID);
-- end #
-- delimiter #



