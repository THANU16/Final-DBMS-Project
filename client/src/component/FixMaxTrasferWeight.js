import React, { useState } from 'react'
import ItemListDuplicate from './home/ItemListDuplicate';
import { useEffect } from 'react';
import axios from 'axios';
import './home/create.css';
import { useParams } from 'react-router-dom';

function FixMaxTrasferWeight() {
  let {userID,type, itemID} = useParams();
  
  const [items, SetItems] = useState([]);
  

  useEffect(()=>{
    console.log("hello")
    axios.get("http://localhost:4000/home/fixMaxTransferWeight")
    .then((response)=>{
      SetItems(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
  },[]);

  
   
  return (
    <div>
        
      <div className="create">
        
            <h1>Fill Maximum Trasfer Weight for</h1>
            <div className="MainPage">
            <ItemListDuplicate items={items} userID={userID} type={type}></ItemListDuplicate>

        </div>
        </div>
    </div>
  );
}

export default FixMaxTrasferWeight;