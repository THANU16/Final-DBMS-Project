

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderList from "./home/OrderList";
import './filter.css';



// import {Link} from 'react-router-dom';
const ManageSetDrivers= () => {
    const {userID, type} = useParams(); 
    const [driveRoutes, setDriveRoutes] = useState([]);
    let [routeID, setRouteID] = useState('');
    const [mainDrivers , setMainDrivers] = useState([]);
    const [mainDriverID, setMainDriverID] = useState('');

    const [assDrivers , setAssDrivers] = useState([]);
    const [assDriverID, setAssDriverID] = useState('');


    let [orders, setOrders] = useState([]);
    let [assignTime, setAssignTime] = useState('');
    let currentDate = new Date();
    const data = {userID: userID ,type:type, assignTime: assignTime };

    const routeData = { userID: userID ,type:type, routeID : routeID  };
    const mainDriverData = {userID: userID ,type:type, routeID : routeID, mainDriverID : mainDriverID , assignTime: assignTime}
    const assDriverData = {userID: userID ,type:type, routeID : routeID, assDriverID : assDriverID,  assignTime: assignTime }

   
  

    
    if (assignTime == ""){
      setAssignTime(currentDate.toISOString());
      
    }

    
  

    //get the routes on specipic store
    useEffect (()=> {
    

      axios.post("http://localhost:4000/home/seeStoreRoutes",data)
      .then((response) => {
        
        setDriveRoutes(response.data);
      
        
      })
    },[]);

   
//  console.log("first",driveRoutes);

   
    const handleSubmitRoute = (e) => {
        e.preventDefault();
        console.log(routeID);

        axios.post('http://localhost:4000/home/filterRoute',routeData )
        .then(res => {
          setOrders(res.data);
          // console.log( orders[0].currentOrdersCount);
        //  console.log(orders);
        })
        .catch(err => {
          console.error(err);
        });
    }

    console.log(routeData);

    useEffect (()=> {
      axios.post("http://localhost:4000/home/seeStoreMainDriver",routeData)
      .then((response) => {
        
        setMainDrivers(response.data);
      
        
      })
    },[]);


    useEffect (()=> {
      axios.post("http://localhost:4000/home/seeStoreAssDriver",routeData)
      .then((response) => {
        
        setAssDrivers(response.data);
      console.log(assDrivers);
        
      })
    },[]);




    const handleSubmitDriver = (e) => {
      e.preventDefault();
      console.log(mainDriverID);
      console.log(assDriverID);

      const response1 =  axios.post('http://localhost:4000/home/assignMainDriver',mainDriverData )
      const response2 = axios.post('http://localhost:4000/home/assignAssDriver',assDriverData )

      Promise.all([response1,response2])
      .then(() => {

      })
      .catch((error) => {

      });
    }


    const handleSubmitFinished = (e) => {
      e.preventDefault();
      // console.log("before", assignTime);

      // axios.post("http://localhost:4000/home/seeStoreAssDriver",data)
      // .then((response) => {
      //   if (response.data.success){
      //     setAssignTime(currentDate.toISOString());
      //   } 
      // })
    }

    

    // const handleSubmitMainDriver = (e) => {
    //   e.preventDefault();
    //   console.log(mainDriverID);

    //   axios.post('http://localhost:4000/home/assignMainDriver',mainDriverData )
    //   .then(res => {
    //     // setOrders(res.data);
    //    console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
    // }


    // const handleSubmitAssDriver = (e) => {
    //   e.preventDefault();
    //   console.log(assDriverID);

    //   axios.post('http://localhost:4000/home/assignAssDriver',assDriverData )
    //   .then(res => {
    //     // setOrders(res.data);
    //    console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
    // }




  
    return (  
      <div class="box" >

       <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        
        <h1> Set Drivers </h1> 
            <form class='login-form' onSubmit={handleSubmitRoute} >
            
                <select  value={routeID}
                    onChange={(e)=> setRouteID(e.target.value)}>
                      <option >None</option>
                      {driveRoutes.map((driveRoute)=>(
                    <option key={driveRoute.id} value={driveRoute.routeID}>{driveRoute.routeName}</option>
                    ))}
                </select>
                <input class='lf--submit' type='submit' value='Select '/>
            </form>

            <form class='login-form' onSubmit={handleSubmitDriver} >
            
                <select required  value={mainDriverID}
                    onChange={(e)=> setMainDriverID(e.target.value)}>
                      <option value="" >None</option>
                      {mainDrivers.map((mainDriver)=>(
                    <option key={mainDriver.id} value={mainDriver.id}>{mainDriver.firstName} {mainDriver.lastName}</option>
                    ))}
                </select>
                
               

                <select required value={assDriverID}
                    onChange={(e)=> setAssDriverID(e.target.value)}>
                      <option value="" >None</option>
                      {assDrivers.map((assDriver)=>(
                    <option key={assDriver.id} value={assDriver.id}>{assDriver.firstName} {assDriver.lastName}</option>
                    ))}
                </select>
                <input class='lf--submit' type='submit' value='Assign '/>

            </form>

            {/* <form class='login-form' onSubmit={handleSubmitAssDriver} >
            
                <select  value={assDriverID}
                    onChange={(e)=> setAssDriverID(e.target.value)}>
                      <option >None</option>
                      {assDrivers.map((assDriver)=>(
                    <option key={assDriver.id} value={assDriver.id}>{assDriver.firstName} {assDriver.lastName}</option>
                    ))}
                </select>
                <input class='lf--submit' type='submit' value='Assign '/>
            </form> */}

            {/* <p>no of orders = {orders[0].currentOrdersCount}</p> */}
            <OrderList orders={orders}></OrderList>
            <form class='login-form' onSubmit={handleSubmitFinished} >
              <p> are you Assign all Route and drivers? </p>
              <input class='lf--submit' type='submit' value='Finished '/>
            </form>
        </div>
    );
}
 
export default ManageSetDrivers;