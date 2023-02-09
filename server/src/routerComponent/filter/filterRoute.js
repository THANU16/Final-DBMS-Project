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
    console.log("filter Route connected");
});

router.post('/', (req, res) => {
    const {userID, type, routeID} = req.body;
    let noOfOrders=0;

    // const checkQuery = "select * from storeroute join orderfulldetails on (routeID) where storeName = "+mysql.escape(district) +" and orderstatus = "+ mysql.escape('Recived to District') +"group by orderID";
    const countQuery ="select *,count(orderID) as currentOrdersCount from OrderAndRoute where routeID="+mysql.escape(routeID)+" group by routeID";
    const getQuery = "select * from OrderAndRoute where routeID="+mysql.escape(routeID) +" and orderstatus = "+ mysql.escape('Recived to District') + " and Maindriverid  ="+mysql.escape(1);
    

    connection.query(countQuery, (error, result) => {
          
        if (error){
            console.log(error);
            
        }
        else{
            if (result.length>0){
                
                        // console.log(result[0].currentOrdersCount)
                noOfOrders=result[0].currentOrdersCount;
                //  console.log(noOfOrders);
                const updateQuery=" update route set noOfOrders =" +mysql.escape(noOfOrders)+" where routeID ="+mysql.escape(routeID);
                connection.query(updateQuery, (error, result) => {
                // console.log(getQuery);
                    if (error){
                        console.log(error);
                    
                    }
                    else{
                        // console.log("updated");
                        connection.query(getQuery, (error, result) => {
                            if (error){
                                console.log(error);
                            }
                            else{
                                res.send(result);
                            }
                        });
                       
                    }
                });
            
            }
                    
        }
    });
                   
});



module.exports = router;