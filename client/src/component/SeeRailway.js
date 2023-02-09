import React from 'react'
import { useState} from "react";
import axios  from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SeeRailwayTraversal from './home/SeeRailwayTraversal';


function SeeRailway() {
  const {userID, type} = useParams();
  const [railwayList,setRailwayList]=useState([]);
  console.log(userID,type);

  const data = {userID,type};
  // console.log(data);
    
  // console.log(userID,type);

  useState()
  useEffect(()=>{
    axios.post("http://localhost:4000/home/seeRailway",data)
    .then((response)=>{
    setRailwayList(response.data);
    })
  },[]);



  return (
    <div>
      <h1>  See Railway Schedule </h1>
      <SeeRailwayTraversal railwayList = {railwayList}></SeeRailwayTraversal>
    </div>
  )
}

export default SeeRailway