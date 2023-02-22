# Final-DBMS-Project
Full Supply Chain Management for food products that are to be sold world wide

Here we have build the supply chain including the features that are being requsted in the project description. 

In this repository you can find
1. ER diagram
2. SQL for the tables and the entities added
3. Special procedures, views, triggers created in sql
4. Java script file for front end and backend
5. Front end with complete CSS


Project Description :- 
Supply Chain Management System 

Company A is a production company whose factory is located in Kandy. The company has 
several products and customers (wholesalers, retailers and end customers). The company 
has a supply chain that uses the railway system to distribute their products to the customers 
islandwide. 

A has negotiated with the railway department and have managed to retain a capacity allocated 
for them from each transportation train trip and if the orders to be fulfilled with a certain trip 
exceeds the capacity allocated, then that orders have to be scheduled to the next trip. The 
train capacity consumption of each item are defined with the items details. Transportation via 
railway is only limited to few main cities of Colombo, Negombo, Galle, Matara, Jaffna, Trinco 
and the order goods are stored in a Store near the railway station. 
To distribute orders from a store to a delivery address trucks are used. A store in a city has 
trucks and those trucks are scheduled to deliver the orders. Trucks are driven only through a 
particular route at a time and the routes are predefined in a way that the whole area related to 
the particular store is covered with the set of routes. Maximum time taken to complete each 
route is defined together with the route definition. 
A driver and a driver assistant always assigned to a truck schedule and Drivers, Driver 
assistants and trucks are independent entities. Drivers and Driver assistant assignments are 
done according to their respective rosters (Driver roster and Driver Assistant roster) and 
rosters have following constraints. 
● A driver should never be assigned to two consecutive Truck schedule and for assistant maximum consecutive turns is two 
● Total work hours per driver should not exceed 40 hrs/week and for an assistant it’s 60 hrs/week 
Customers should place orders at least 7 days prior to the delivery date and customers should 
be able to select a route that his delivery address is located. 
The management of the company requires a comprehensive report system for monitoring and 
analytics of the platform as well. The reports include: 
● Quarterly sales report for a given year 
● Items with most orders 
● Sales report categorized according to main cities and routes 
● Working Hours of Drivers/ Driver Assistants and Used hours of Trucks 
● Customer - order report 


Task 
Your task is to model the database design to encapsulate these requirement. It should 
consider all entities and relationships given in the description. Moreover you need to identify 
the places where procedures, functions and triggers can be employed to guarantee ACID 
properties. Foreign keys and primary keys must be set to maintain consistency. Indexing 
should be done when necessary. 
Additionally, you must get a domain idea by reading related material and take assumptions 
when not explicitly provided. The database must be populated with at least 40 orders of 10 
different routes and relevant delivery details must also be included. The train schedule should 
also be created by yourself defining the capacities. These data insertions can be done 
manually and no need of UI components just for the task of data input. 



