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
    console.log("Add Railway connected");
});

router.post('/', (req, res) => {
    const {name,destination, arrivalTime,depatureTime} = req.body;
    // console.log("hi");
    // console.log(name, weight, unitprice,quantity);

    const checkQuery = "SELECT * FROM railway where name like " +mysql.escape(name) +" and destination = " +mysql.escape(destination) +"and arrivaltime = "+mysql.escape(arrivalTime) +"and depaturetime = "+mysql.escape(depatureTime);
    const insertQuery = "insert into railway ( name, destination, arrivaltime, depatureTime) values(?, ?, ?, ?)"
    // const updateQuery = "update items set items.stockavailability = items.stockavailability + "+ mysql.escape(quantity) + "where name like " +mysql.escape(name) +" and weight = " +mysql.escape(weight) +"and unitprice = "+mysql.escape(unitprice);

    connection.query(checkQuery, (error, result) => {
        if (error){
            res.send({
                success: false
            })
            console.log(error);
        }
        else{
            if (result.length >0){
                res.send({
                    success: false
                })
                console.log("Already exist")    
            }else{
                connection.query(insertQuery, [name,destination, arrivalTime,depatureTime], (error, result) => {
                    console.log(name,destination, arrivalTime,depatureTime);
                    if (error){
                        res.send({
                            success: false
                        })
                        console.log(error);
                    }
                    else{
                        res.send({
                            success: true
                        })
                        console.log("insert the record in railway");
                    }

                });
            }
            
        }
    })
});



module.exports = router;