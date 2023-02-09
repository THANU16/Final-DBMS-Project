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
    console.log("Show Top Five Iteams Orders connected");
});

router.get('/', (req, res) => {
    // const {userID, type} = req.body;

    const getQuery = "select * from items order by noOfOrders desc limit 5";
        connection.query(getQuery, (error, result) => {
            if (error){
                console.log(error);
            }
            else{
                // console.log("buy item detail send");   
                res.send(result);           
            }
        });

           
});



module.exports = router;