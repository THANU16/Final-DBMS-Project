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
    console.log("buy item connected");
});

router.post('/', (req, res) => {
    const {itemID} = req.body;
   
    
   

    const getQuery = "SELECT * FROM items where itemID = " + mysql.escape(itemID);
    // const insertQuery = "insert into items ( name, weight, unitprice, stockavailability) values(?, ?, ?, ?)"
    // const updateQuery = "update items set items.stockavailability = items.stockavailability - "+ mysql.escape(quantity) + "whereitemID = " +mysql.escape(itemID);

   
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