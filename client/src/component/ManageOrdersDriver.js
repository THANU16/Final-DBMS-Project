import React from 'react'
import { useState} from "react";
import axios  from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ManageOrdersTraversalDriver from './home/ManageOrdersTraversalDriver';


function ManageOrdersDriver() {
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
      <h1> Manage Orders Driver</h1>
  
      <ManageOrdersTraversalDriver orders={orders} userID={userID} type ={type}></ManageOrdersTraversalDriver>
    </div>
  )
}

export default ManageOrdersDriver;