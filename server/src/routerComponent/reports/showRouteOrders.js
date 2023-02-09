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
    console.log("Show Route Orders connected");
});

router.post('/', (req, res) => {
    const {userID, type,routeID} = req.body;

    const getQuery = "select * from orderandroute where routeID like " + mysql.escape(routeID);
    console.log(getQuery);
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