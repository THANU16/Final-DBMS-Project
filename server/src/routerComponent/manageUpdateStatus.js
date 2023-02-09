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
    console.log("Manage Orders Store connected");
});

router.post('/', (req, res) => {
    const {userID, type,orderID, status} = req.body;
    console.log(userID, type,orderID, status);
    console.log("body",req.body);
    const updateEmployerQuery = "update orderitem set orderstatus = "+ mysql.escape(status) +", employeeid= " + mysql.escape(userID) + " where orderID = "+ mysql.escape(orderID);
    const updateDriverQuery = "update orderitem set orderstatus = "+ mysql.escape(status) +" where orderID = "+ mysql.escape(orderID);
    
    if (type == 'employers' || type == 'employersC'||  type == 'employersS'){
        connection.query(updateEmployerQuery, (error, result) => {
            console.log(updateEmployerQuery);
            if (error){
                console.log(error);
            }
            else{
                // console.log("buy item detail send");   
                console.log("update employee");          
            }
        });
    }else if (type=="driver"){
        connection.query(updateDriverQuery, (error, result) => {
            if (error){
                console.log(error);
            }
            else{
                // console.log("buy item detail send");   
                console.log("update Driver"); 
                console.log(updateDriverQuery);         
            }
        });
    }
   
        
           
});



module.exports = router;