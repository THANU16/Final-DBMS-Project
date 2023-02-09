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
    console.log("see Railway connected");
});

router.post('/', (req, res) => {
    const {userID, type} = req.body;

    const getQuery = "select * from railwaySchedule";
    
    //  if (type == 'driver' || type == "employers"){
        connection.query(getQuery, (error, result) => {
            if (error){
                console.log(error);
            }
            else{
                // console.log("buy item detail send");  
                res.send(result);           
            }
        });
    // }else{
    //     console.log("you can't see")
    // }
   
        
           
});



module.exports = router;