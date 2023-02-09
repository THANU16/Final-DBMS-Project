
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
  console.log("login connected");}
  
);




router.post('/', (req, res) => {

  const { email, password, type } = req.body;
  // console.log(email, password, type );

  const queryCustomer = 'SELECT * FROM customer WHERE email = '+mysql.escape(email) + ' and password ='+mysql.escape(password);
  const queryDriver = 'SELECT * FROM driver WHERE email = '+mysql.escape(email) + ' and password ='+mysql.escape(password);
  const queryEmployee = 'SELECT * FROM employers WHERE email = '+mysql.escape(email) + ' and password ='+mysql.escape(password);
  // const query = 'SELECT * FROM users WHERE email = '+mysql.escape(email) + ' and password ='+mysql.escape(password);
  const getIdQueryCustomer = 'SELECT id FROM customer where email like '+ mysql.escape(email);
  const getIdQueryDriver = 'SELECT id FROM driver where email like '+ mysql.escape(email);
  const getIdQueryEmployee = 'SELECT id FROM employers where email like '+ mysql.escape(email);


  if(type == "customer"){
    connection.query(queryCustomer ,(error, result) => {  
      if (error) {
        console.log(error);
      } else {
        if (result.length>0) {

          connection.query(getIdQueryCustomer, (error,result) => {
            if (error) {
              console.log(error);
            } else {
              res.send({
                success: true,
                data:result
              });
              console.log("user id send sucess");
            }
          })

          console.log("login success");

        } else {
          res.send({
            success: false
          });
          console.log("Incorrect username password");
        }
      }
    });
  }

  else if(type == "driver"){
    connection.query(queryDriver ,(error, result) => {
      if (error) {
        console.log(error);
      } else {
        if (result.length>0) {
          
          connection.query(getIdQueryDriver, (error,result) => {
            if (error) {
              console.log(error);
            } else {
              res.send({
                success: true,
                data:result
              });
              console.log("user id send success"); 
            }
          })

          console.log("login success");

        } else {
          res.send({
            success: false
          });
          console.log("Incorrect username password");
        }
      }
    });
  }

  else if(type == "employers" || type == "employersC" || type == "employersS"){
    connection.query(queryEmployee ,(error, result) => {
      if (error) {
        console.log(error);
      } else {
        if (result.length>0) {
         
          connection.query(getIdQueryEmployee, (error,result) => {
            if (error) {
              console.log(error);
            } else {
              res.send({
                success: true,
                data:result
              });
             
              console.log("user id send sucess");
              
            }
          })

          console.log("login success");
          
        } else {
          res.send({
            success: false
          });
          console.log("Incorrect username password");
        }
      }
    });
  }
});


module.exports = router;







// var http = require('http');
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const router = express.Router
// const mysql = require('mysql');
// app.use(cors());

// server = http.createServer ((req, res)=> {
//   res.setHeader('Content-Type', 'text/plain');
// })

// // Connect to MySQL
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'supplychainmanagement'  
// });

// connection.connect(() => {
//   console.log("connected");}
  
// );

// // Set up body parsing middleware
// app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));


// app.post('/login', (req, res) => {

//   const { email, password, type } = req.body;
//   // console.log(email, password, type );

//   const queryCustomer = 'SELECT * FROM customer WHERE email = '+mysql.escape(email) + ' and password ='+mysql.escape(password);
//   const queryDriver = 'SELECT * FROM driver WHERE email = '+mysql.escape(email) + ' and password ='+mysql.escape(password);
//   const queryEmployee = 'SELECT * FROM employers WHERE email = '+mysql.escape(email) + ' and password ='+mysql.escape(password);
//   // const query = 'SELECT * FROM users WHERE email = '+mysql.escape(email) + ' and password ='+mysql.escape(password);


//   if(type == "Customer"){
//     connection.query(queryCustomer ,(error, result) => {  
//       if (error) {
//         console.log(error);
//       } else {
//         if (result.length>0) {
//           res.send({
//             success: true
//           });
//           console.log("success");
//         } else {
//           res.send({
//             success: false
//           });
//           console.log("Incorrect username password");
//         }
//       }
//     });
//   }

//   else if(type == "Driver"){
//     connection.query(queryDriver ,(error, result) => {
//       if (error) {
//         console.log(error);
//       } else {
//         if (result.length>0) {
//           res.send({
//             success: true
//           });
//           console.log("success");
//         } else {
//           res.send({
//             success: false
//           });
//           console.log("Incorrect username password");
//         }
//       }
//     });
//   }

//   else if(type == "Employee"){
//     connection.query(queryEmployee ,(error, result) => {
//       if (error) {
//         console.log(error);
//       } else {
//         if (result.length>0) {
//           res.send({
//             success: true
//           });
//           console.log("success");
//         } else {
//           res.send({
//             success: false
//           });
//           console.log("Incorrect username password");
//         }
//       }
//     });
//   }

//     // connection.query(query ,(error, result) => {
//     //   if (error) {
//     //     console.log(error);
//     //   } else {
//     //     if (result.length>0) {
//     //       res.send({
//     //         success: true
//     //       });
//     //     } else {
//     //       res.send({
//     //         success: false
//     //       });
//     //     }
//     //   }
//     // });
// });



// app.listen(4000, () => {
//   console.log("Listen port 4000");
// });