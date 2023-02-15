-- select * from orderfulldetails where ordereddate like "%2023%"

-- select * from orderfulldetails where store like "jaffna"

--  drop trigger noOfOrdersUpdate;
-- delimiter #
-- create trigger noOfOrdersUpdate after insert on ordereditemdetails
-- for each row 
-- begin
-- 		update items set noOfOrders=noOfOrders+1 where itemID=new.ItemID;
-- end #
-- delimiter #
-- orderitemitems
-- select * from items order by noOfOrders desc limit 5;

select count(orderID) from orderitem

