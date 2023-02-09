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
    console.log("addNewItem connected");
});

router.post('/', (req, res) => {
    const {name, weight, unitprice,quantity} = req.body;
    // console.log("hi");
    // console.log(name, weight, unitprice,quantity);

    const checkQuery = "SELECT * FROM items where name like " +mysql.escape(name) +" and weight = " +mysql.escape(weight) +"and unitprice = "+mysql.escape(unitprice);
    const insertQuery = "insert into items ( name, weight, unitprice, stockavailability) values(?, ?, ?, ?)"
    const updateQuery = "update items set items.stockavailability = items.stockavailability + "+ mysql.escape(quantity) + "where name like " +mysql.escape(name) +" and weight = " +mysql.escape(weight) +"and unitprice = "+mysql.escape(unitprice);

    connection.query(checkQuery, (error, result) => {
        if (error){
            res.send({
                success: false
            })
            console.log(error);
        }
        else{
            if (result.length >0){
            connection.query(updateQuery, [name, weight, unitprice,quantity], (error, result) => {
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
                    console.log("update the record");
                }

            } );
                
            }else{
                connection.query(insertQuery, [name, weight, unitprice,quantity], (error, result) => {
                    // console.log("hi2");
                    // console.log(name, weight, unitprice,quantity);
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
                        console.log("insert the record");
                    }

                });
            }
            
        }
    })
});



module.exports = router;