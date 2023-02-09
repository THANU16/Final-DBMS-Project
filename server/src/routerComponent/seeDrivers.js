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
    console.log("see Drivers connected");
});

router.post('/', (req, res) => {
    const {userID, type} = req.body;

    const getQuery = "SELECT * FROM driverdetails";
    const getQueryDriver = "SELECT * FROM driverdetails where id = "+ mysql.escape(userID);
    
     if (type == 'employers' || type == 'employersC'||  type == 'employersS'){
        connection.query(getQuery, (error, result) => {
            if (error){
                console.log(error);
            }
            else{
                // console.log("buy item detail send");  
                res.send(result);           
            }
        });
    }
    else if (type == 'driver') {
        connection.query(getQueryDriver, (error, result) => {
            if (error){
                console.log(error);
            }
            else{
                // console.log("buy item detail send");  
                res.send(result);           
            }
        });
    }else {
        console.log("you can't see")
    }
   
        
           
});



module.exports = router;