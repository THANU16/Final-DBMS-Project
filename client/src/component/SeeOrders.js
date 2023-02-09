import React from 'react'
import OrderList from './home/OrderList'
import { useState} from "react";
import axios  from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
function SeeOrders() {
  const {userID, type} = useParams();
  const [orders,setOrders]=useState([]);
  console.log(userID,type);

  const data = {userID,type};
  // console.log(data);
    
  // console.log(userID,type);

  useState()
  useEffect(()=>{
    axios.post("http://localhost:4000/home/seeOrders",data)
    .then((response)=>{
    setOrders(response.data);
    })
  },[]);


  console.log("1",orders);
  return (
    <div>
      <h1> Yours Orders!!!</h1>
      <OrderList orders={orders}></OrderList>
    </div>
  )
}

export default SeeOrders