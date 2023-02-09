// import ItemDisplay from "./home/ItemDisplay";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Navbar from "./home/Navbar";
// import { useParams } from "react-router-dom";




// function HomeDriver(){
//     const    [items, setItems] = useState([]);
//     let {userID,type } = useParams();
    
    
//     useEffect(()=>{
     
//         axios.get("http://localhost:4000/home/items")
//         .then((response)=>{
//           setItems(response.data);
//         })
//       },[]);
    

//     return ( 
//         <div className="App">
//           <nav>
//           <Navbar userID={userID} type = {type}/>
//           </nav>
//             <ItemDisplay items={items} userID = {userID} type = {type}/>
//     </div>
//     );
// }


// export default HomeDriver;


import React from 'react'
import { useState} from "react";
import axios  from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ManageOrdersTraversalDriver from '../home/ManageOrdersTraversalDriver';
import NavbarDriver from './NavbarDriver';


function HomeDriver() {
  const {userID, type} = useParams();
  const [orders,setOrders]=useState([]);
  const data = {userID,type};

  useState()
  useEffect(()=>{
    axios.post("http://localhost:4000/home/manageOrdersDriver",data).then((response)=>{
      setOrders(response.data);
    })
  },[]);


  return (
    <div>
      <br></br><br></br><br></br><br></br>
      <NavbarDriver userID={userID} type = {type} />
      <h1> Your Delivery Orders!</h1>
  
      <ManageOrdersTraversalDriver orders={orders} userID={userID} type ={type}></ManageOrdersTraversalDriver>
    </div>
  )
}

export default HomeDriver;