const express = require('express');
const router = express.Router();

const mysql = require('mysql');
const bcrypt = require('bcrypt');







// Connect to MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'supplychainmanagement'  
});

connection.connect(() => {
  console.log("signup connected");}
  
);


router.post('/', (req, res) => {

  const { email, password, firstName, lastName, address, contactNumber, type, district} = req.body;
  console.log(req.body);
  bcrypt.hash(password,10, (error, hash) => {
    if (error) throw error;

    // console.log(password,'hash', hash);

  // console.log(email, password, firstName, lastName, address,contactNumber, type );
  const queryCustomer = 'INSERT INTO customer (email, password, firstName, lastName, address,contactNumber, customerTypeId,district) VALUES (?, ?, ?, ?, ?, ?, ?,?)';
  const queryDriver = 'INSERT INTO driver (email, password, firstName, lastName, address,contactNumber, driverTypeId,district) VALUES (?, ?, ?, ?, ?, ?, ?,?)';
  const queryEmployee = 'INSERT INTO employers (email, password, firstName, lastName, address,contactNumber, employeeTypeId,district) VALUES (?, ?, ?, ?, ?, ?, ?,?)';
  const insertDriverSchedule = 'insert into driverschedule (driverID) values(?) ';

  // // create record on customers table if user type equalas to customer
  if (type == "CSTWH" || type == "CSTRE" || type == "CSTEN"){
    // console.log( "customer" );
    connection.query(queryCustomer, [email, password, firstName, lastName, address,contactNumber, type, district ], (error, results) => {
      if (error) {
        return res.status(400).json({ message: 'Error: ' + error });
      }
      res.json({ message: 'Signup successful!' });
      console.log( 'Signup successful!' );
    });
  }
  // create record on driver table if user type equalas to driver
  else if (type == "MaDri"|| type == "AsDri"){
    // console.log( "Driver" );
    
    connection.query(queryDriver, [email, password, firstName, lastName, address,contactNumber, type, district ], (error, results) => {
     console.log(queryDriver);
      if (error) {
        return res.status(400).json({ message: 'Error: ' + error });
      }
      res.json({ message: 'Signup successful!' });

      console.log( 'Signup successful!' );
    });
  }

  // create record on employee table if user type equalas to employee
  else if (type == "EMPER"|| type == "EMCON"){
    // console.log( "Employer" );
    connection.query(queryEmployee, [email, password, firstName, lastName, address,contactNumber, type, district ], (error, results) => {
      if (error) {
        return res.status(400).json({ message: 'Error: ' + error });
      }
      res.json({ message: 'Signup successful!' });
      console.log( 'Signup successful!' );
    });
    
  }
  

});
});


module.exports = router;



