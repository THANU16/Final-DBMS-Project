import React from 'react'
import { useState} from "react";
import axios  from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ManageOrdersTraversalStore from './home/ManageOrdersTraversalStore';

function ManageOrdersStore() {
  const {userID, type} = useParams();
  const [orders,setOrders]=useState([]);
  const data = {userID,type};
  // console.log(userID,type);


  useEffect(()=>{
    axios.post("http://localhost:4000/home/manageOrdersStore",data).then((response)=>{
    setOrders(response.data);
    })
  },[]);
  return (
    <div>
      <h1> Manage Orders Store</h1>
      
      <ManageOrdersTraversalStore orders={orders} userID={userID} type ={type}></ManageOrdersTraversalStore>
    </div>
  )
}

export default ManageOrdersStore;