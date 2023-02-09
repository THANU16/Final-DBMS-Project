

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
    console.log("see Route connected");
});

router.post('/', (req, res) => {
    const {userID, type} = req.body;
    let employeeTypeId ="";
    let district ="";


    const getUserDetailQuery = "select employeeTypeId, district from employers where id = "+ mysql.escape(userID);
    
    
    // const updateQuery = "update items set items.stockavailability = items.stockavailability - "+ mysql.escape(quantity) + "whereitemID = " +mysql.escape(itemID);

        connection.query(getUserDetailQuery, (error, result) => {
            if (error){
                console.log(error);
                res.send({
                    success : false
                })
            }
            else{
                if (result.length > 0){
                    employeeTypeId = result[0].employeeTypeId;
                    district = result[0].district;
                
                    const checkQuery = "select DISTINCT storeroute.routeID, routeName from storeroute join orderandroute on (storeroute.routeID=orderandroute.routeID) where storeName = "+mysql.escape(district) +" and orderstatus = "+ mysql.escape('Recived to District') +"and Maindriverid ="+mysql.escape(1)+" group by orderID ";
                    // const getQuery = "select * from storeroute where storeName = "+ mysql.escape(district) + "group by routeID";

                    // if (employeeTypeId == "EMPER"){
                        connection.query(checkQuery, (error, result) => {
                            if (error){
                                console.log(error);
                            }else {
                                if(result.length >0){
                                    res.send(result);
                                    // connection.query(getQuery, (error, result) => {
                                    //     if (error){
                                    //         console.log(error);
                                    //     }
                                    //     else{
                                    //         res.send(result);          
                                    //     }
                                    // });
                                }
                            }
                        })
                    }
                    else {
                        
                    }
                // } 
                // else {
                    
                // }            
            }
        });
                   
});



module.exports = router;