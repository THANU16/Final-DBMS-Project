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
    console.log("Manage Orders connected");
});

router.post('/', (req, res) => {
    const {userID, type} = req.body;

    const getQuery = "select * from orderfulldetails where orderstatus like "+ mysql.escape("To Be Proceeded")+ " or orderstatus like " + mysql.escape("Proccessing") + " or orderstatus like " + mysql.escape("Cancel");
    // const insertQuery = "insert into items ( name, weight, unitprice, stockavailability) values(?, ?, ?, ?)"
    // const updateQuery = "update items set items.stockavailability = items.stockavailability - "+ mysql.escape(quantity) + "whereitemID = " +mysql.escape(itemID);

    // if (type == 'customer'){
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
    //     console.log("you cant")
    // }
   
        
           
});



module.exports = router;