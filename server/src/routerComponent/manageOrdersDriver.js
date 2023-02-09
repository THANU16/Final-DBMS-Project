const express = require('express');
const mysql = require('mysql');
const { get } = require('./addNewItem');
const router = express.Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'supplychainmanagement' 
});

connection.connect( () => {
    console.log("Manage Orders Driver connected");
});

router.post('/', (req, res) => {
    const {userID, type} = req.body;
    let district ="";


    const getUserDetailQuery = "select id, district from driver where id = "+ mysql.escape(userID);

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
                    district = result[0].district;
                
                    const getQuery = "select * from orderfulldetails where (orderstatus like "+ mysql.escape("Recived to District") +") and district = "+ mysql.escape(district) + " and (Maindriverid = " + mysql.escape(userID) +"or assistantDriverID = " + mysql.escape(userID) +")" ;
                    
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
            }
        });
    // }else{
    //     console.log("you cant")
    // }
   
        
           
});



module.exports = router;