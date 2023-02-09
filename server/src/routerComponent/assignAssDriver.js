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
    console.log("assign Ass Driver connected");
});

router.post('/', (req, res) => {
   
    const {userID, type, assDriverID,routeID} = req.body;
    let count = 0;
   

    const updateQuery = "update orderandroute set assistantDriverID = " + mysql.escape(assDriverID) +" where routeID = "+ mysql.escape(routeID)+" and orderstatus ="+ mysql.escape("Recived to District") + " and assistantDriverID ="+mysql.escape(1);
    // const getTownQuery = "select * from OrderAndRoute where routeID = "+ mysql.escape(routeID);
    const updateRouteDriverQuery = "update driverandroute set assistantDriverID = "+ mysql.escape(assDriverID) +" where routeID = "+ mysql.escape(routeID);
    const updateWeeklyHourQuery= "update weeklyHoursAssistantDriver set weeklyHours=weeklyHours-routeHour where routeID="+ mysql.escape(routeID);

        connection.query(updateQuery, (error, result) => {
            if (error){
                console.log(error);
                res.send({
                    success : false
                })
            }
            
            else{
                connection.query(updateRouteDriverQuery, (error, result) => {
                    if(error){
                        console.log(error);
                        res.send({
                            success : false
                        })
                    }
                    else {
                        if (count == 0){
                            count += 1;
                            connection.query(updateWeeklyHourQuery,(error,result)=>{
                                if (error){
                                    console.log(error);
                                    res.send({
                                        success : false
                                    })
                                } 
                                else {
                                    res.send({
                                        success : true
                                    })
                                }
                            })
                        }
                        else {
                            res.send({
                                success : true
                            })
                        }
                        
                    }
                })  
            }
        });
                   
});



module.exports = router;