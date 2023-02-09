

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
    console.log("see Store Ass Driver connected");
});

router.post('/', (req, res) => {
    const {userID, type, routeID} = req.body;
    let employeeTypeId ="";
    let district ="";


    const getUserDetailQuery = "select employeeTypeId, district from employers where id = "+ mysql.escape(userID);
    
    
    
    // const updateQuery = "update items set items.stockavailability = items.stockavailability - "+ mysql.escape(quantity) + "whereitemID = " +mysql.escape(itemID);
    // console.log(getUserDetailQuery);
        connection.query(getUserDetailQuery, (error, result) => {
            if (error){
                console.log(error);
            }
            else{
                // console.log("Hi")
                if (result.length > 0){
                    employeeTypeId = result[0].employeeTypeId;
                    district = result[0].district;
                
                    const getQuery = "select * from drivedetailsview where driverTypeId = "+ mysql.escape("AsDri")+ "and district = "+ mysql.escape(district) +" and isAvailable="+mysql.escape(1)+" and consecutiveDrives < "+mysql.escape(2);
                    // console.log(getQuery)
                    //let EMPER is a store employee
                    // if (employeeTypeId == "EMPER"){
                        // console.log(getQuery);
                        connection.query(getQuery, (error, result) => {
                            if (error){
                                console.log(error);
                            }
                            else{
                                res.send(result);          
                            }
                        });
                    // }
                }       
            }
        });
                   
});



module.exports = router;