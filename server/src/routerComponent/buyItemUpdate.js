const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'supplychainmanagement' 
});

connection.connect( () => {
    console.log("buy item update connected");
});

router.post('/', (req, res) => {
    const {userID,type,itemID, quantity,houseNumber,streetName,town,district,date,time,unitprice,store} = req.body;
    const ordereddate = date +' '+time;
    let totalPrice = 0;
    
    
    const updateQuery = "update items set items.stockavailability = items.stockavailability - "+ mysql.escape(quantity) + "where itemID = " +mysql.escape(itemID);
    const insertQuery = "insert into orderitem (customerid,ordereddate,houseNumber,streetName,town,district,orderstatus,store,Maindriverid,assistantDriverID) values(?,?,?,?,?,?,?,?,?,?)";
    const getorderIDQuery = "select orderID from orderitem where orderitem.customerid = "+ mysql.escape(userID) + " and ordereddate = "+mysql.escape(ordereddate);
    const insertOrderedItemDetailQuery = "insert into ordereditemdetails (orderID, itemID, quantity,totalPrice) values(?,?,?,?)";

        connection.query(updateQuery, (error, result) => {
            if (error){
                console.log(error);
            }
            else{
                console.log("buy item detail update");
                
            }
        });

    
    connection.query(insertQuery,[userID,ordereddate, houseNumber,streetName,town,district,"To Be Proceeded",store,1,1] , (error,result)=> {
            if (error){
                console.log(error);
            }
            else{
                // console.log("insert the order");
                connection.query(getorderIDQuery, (error,result)=> {
                    if (error){
                        console.log(error);
                    }
                    else{
                        // console.log("get the order id");
                        const orderID = result[0].orderID;
                        totalPrice = unitprice*quantity;
                        connection.query(insertOrderedItemDetailQuery,[orderID,itemID,quantity,totalPrice], (error, result) => {
                            if (error){
                                console.log(error);
                            }
                            else{
                                console.log("sucess the order details");
                                
                            }
                        });
                        
                    }
                })
                
            }
        })
           
});



module.exports = router;