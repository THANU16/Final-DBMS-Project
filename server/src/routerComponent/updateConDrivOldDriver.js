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

    const {userID, type,assignedTime} = req.body;
    console.log(userID, type,assignedTime);
    console.log("body",req.body);
    let employeeTypeId ="";
    let district ="";


    const getUserDetailQuery = "select employeeTypeId, district from employers where id = "+ mysql.escape(userID);

    console.log(getUserDetailQuery);
    console.log(district);

    
    
    connection.query(getUserDetailQuery, (error, result) => {
        if (error){
            console.log(error);
            res.send({
                success : false
            })
        }
        else{
            if (result.length > 0){
                district = result[0].district;
                console.log(district);
                const updateMainDriverQuery = "update driverschedule set consecutiveDrives = 0 where driverID in (select Maindriverid from olddriverupdate where assignedtime != "+ mysql.escape(assignedTime) +"and store = "+ mysql.escape(district) +" group by (Maindriverid)) ";
                const updateAssDriverQuery = "update driverschedule set consecutiveDrives = 0 where driverID in (select assistantDriverID from olddriverupdate where assignedtime != "+ mysql.escape(assignedTime) + "and store = "+ mysql.escape(district) + " group by (assistantDriverID))  ";

                connection.query(updateMainDriverQuery, (error, result) => {
                    console.log(updateMainDriverQuery);
                    if (error){
                        console.log(error);
                        res.send({
                            success : false
                        })
                    }
                    else{
                        console.log("update old main drive ");   
    
                        connection.query(updateAssDriverQuery, (error, result) => {
                            console.log(updateAssDriverQuery);
                            if (error){
                                console.log(error);
                                res.send({
                                    success : false
                                })
                            }
                            else{
                                console.log("update old main drive ");   
                    
                                res.send({
                                    success : true
                                })         
                            }
                        });
                    }
                });

            }
        }
    });

            
});



module.exports = router;