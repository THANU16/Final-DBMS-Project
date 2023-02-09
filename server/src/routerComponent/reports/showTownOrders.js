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
    console.log("Show Town Orders connected");
});

router.post('/', (req, res) => {
    const {userID, type,town} = req.body;

    const getQuery = "select * from orderfulldetails where town like " + mysql.escape(town);
    // console.log(getQuery);
  
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