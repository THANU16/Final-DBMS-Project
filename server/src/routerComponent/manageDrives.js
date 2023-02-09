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
    console.log("Manage Drives connected");
});

router.post('/', (req, res) => {
    const {userID,type,isAvailable} = req.body;
   

    
    // const getQuery = "SELECT * FROM driverdetails ";
    const getQueryDriver = "SELECT * FROM driverdetails where id = "+ mysql.escape(userID);
    // const updateDriveStartQuery = "UPDATE driverschedule SET driveStart = "+ mysql.escape(driveStart) + " WHERE driverID = "+ mysql.escape(userID);
    // const updateDriveEndQuery = "UPDATE driverschedule SET driveEnd = "+ mysql.escape(driveEnd) + " WHERE driverID = "+ mysql.escape(userID);
    // let updateIsAvailableQuery = "UPDATE driverschedule SET isAvailable = "+ mysql.escape(isAvailable) + " WHERE driverID = "+ mysql.escape(userID);
    // if (isAvailable){
    //      updateIsAvailableQuery = "UPDATE driverschedule SET isAvailable = "+ mysql.escape('1') + " WHERE driverID = "+ mysql.escape(userID);
    // }else{
    //      updateIsAvailableQuery = "UPDATE driverschedule SET isAvailable = "+ mysql.escape('0') + " WHERE driverID = "+ mysql.escape(userID);
    // }
    
    //  if (type == "employers"){
        console.log(getQueryDriver);
        connection.query(getQueryDriver, (error, result) => {
            if (error){
                console.log(error);
            }
            else{
                console.log(getQueryDriver);
                res.send(result); 

                // if (isAvailable){
                    // connection.query(updateIsAvailableQuery , (error, result) => {
                    //     if (error){
                    //         console.log(error);
                    //     }
                    //     else{
                    //         res.send(result);  
                                     
                    //     }
                    // });
                //     if (driveStart != ""){
                //         connection.query(updateDriveStartQuery, (error, result) => {
                //             if (error){
                //                 console.log(error);
                //             }
                //             else{
                                        
                //             }
                //         });
                //     }else if (driveEnd != ""){
                //         connection.query(updateDriveEndQuery, (error, result) => {
                //             if (error){
                //                 console.log(error);
                //             }
                //             else{

                //             }
                //         });
                //     }
                // }else {
                //     connection.query(updateIsAvailableQuery , (error, result) => {
                //         if (error){
                //             console.log(error);
                //         }
                //         else{
                //             res.send(result);  
                                     
                //         }
                //     });
                //     if (driveStart != ""){
                //         connection.query(updateDriveStartQuery, (error, result) => {
                //             if (error){
                //                 console.log(error);
                //             }
                //             else{
                                        
                //             }
                //         });
                //     }else if (driveEnd != ""){
                //         connection.query(updateDriveEndQuery, (error, result) => {
                //             if (error){
                //                 console.log(error);
                //             }
                //             else{

                //             }
                //         });
                //     }
                // }
                         
            }
        });
        
           
});



module.exports = router;