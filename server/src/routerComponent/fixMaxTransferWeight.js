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
  console.log("home connected");}
  
);


router.get('/', (req, res) => {
    
    const query = 'select * from items where maxtransferweight is null ';

    connection.query(query ,(error, result) => {
        
      if (error) {
        console.log(error);
      } else {
        res.send(result);
        // console.log("home item response sending sucess");
        // if (result.length>0) {
        //   res.send(result);
        //   // res.send({
        //   //   success: true,
        //   //   items:result
        //   // });
        // } else {
        //   res.send({
        //     success: false
        //   });
        // }
      }
    });
    
});

// app.listen(4000, () => {
//   console.log("Listen port 4000");
// });

module.exports = router;