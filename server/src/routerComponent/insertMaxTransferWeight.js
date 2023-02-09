const express = require('express');
const router = express.Router();

const mysql = require('mysql');



// Connect to MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'supplychainmanagement'  
});

connection.connect(() => {
  console.log("insertMaxTransferWeight connected");}
  
);


router.post('/', (req, res) => {
   const {itemId, maxTransferWeight} = req.body;
  //  console.log("hi");
  //   console.log(maxTransferWeight,itemId);

    const query = "update items set maxtransferweight = " + mysql.escape(maxTransferWeight) +"where itemID = " +mysql.escape(itemId);

    connection.query(query,[maxTransferWeight.itemId], (error,result) => {
        if (error) {
            return res.status(400);
          }
          console.log( 'update max transfer weight successful!' );

    })

});

module.exports =router;
