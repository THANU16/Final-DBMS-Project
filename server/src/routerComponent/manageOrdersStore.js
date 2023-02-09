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
    console.log("Manage Orders Store connected");
});

router.post('/', (req, res) => {
    const {userID, type} = req.body;
    let employeeTypeId ="";
    let district ="";


    const getUserDetailQuery = "select employeeTypeId, district from employers where id = "+ mysql.escape(userID);
    
    // const updateQuery = "update items set items.stockavailability = items.stockavailability - "+ mysql.escape(quantity) + "whereitemID = " +mysql.escape(itemID);

    // if (type == 'customer'){
        connection.query(getUserDetailQuery, (error, result) => {
            if (error){
                console.log(error);
                res.send({
                    success : false
                })
            }
            else{
                if (result.length > 0){
                    employeeTypeId = result[0].employeeTypeId;
                    district = result[0].district;
                
                    const getQuery = "select * from orderfulldetails where orderstatus like "+ mysql.escape("Shipped")+ " and district = "+ mysql.escape(district);
                    
                    // if (employeeTypeId == "EMPER"){
                        connection.query(getQuery, (error, result) => {
                            if (error){
                                console.log(error);
                                res.send({
                                    success : false
                                })
                            }
                            else{
                                res.send(result);          
                            }
                        });
                    }
                    else {
                        res.send({
                            success : false
                        })
                    }
                // } 
                // else {
                //     res.send({
                //         success : false
                //     })
                // }            
            }
        });
    // }else{
    //     console.log("you cant")
    // }
   
        
           
});



module.exports = router;