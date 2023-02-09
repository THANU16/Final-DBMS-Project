import React from 'react'
import { useState} from "react";
import axios  from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ManageOredersTraversal from './home/ManageOredersTraversal';

function ManageOrdersCompany() {
  const {userID, type} = useParams();
  const [orders,setOrders]=useState([]);
  const data = {userID,type};
  // console.log(userID,type);

  useState()
  useEffect(()=>{
    axios.post("http://localhost:4000/home/manageOrdersCompany",data).then((response)=>{
    setOrders(response.data);
    console.log(response.data);
    console.log(orders);
    })
  },[]);
  return (
    <div>
      <h1> Manage Orders.</h1>
      <ManageOredersTraversal orders={orders} userID={userID} type ={type}></ManageOredersTraversal>
    </div>
  )
}

export default ManageOrdersCompany