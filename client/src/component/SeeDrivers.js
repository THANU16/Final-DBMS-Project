import React from 'react'
import { useState} from "react";
import axios  from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SeeDriversTraversal from './home/SeeDriversTraversal';
import './Login.css'


function SeeDrivers() {
  const {userID, type} = useParams();
  const [drivers,setDrivers]=useState([]);
  const [location, setLocation] = useState('jaffna');

  const data = {userID,type};
 
 

  useState()
  useEffect(()=>{
    axios.post("http://localhost:4000/home/seeDrivers",data)
    .then((response)=>{
    setDrivers(response.data);
    })
  },[]);

//   const handleSubmit =(e) => {
//     e.preventDefault();
    
    
//     axios.post("http://localhost:4000/home/addNewItem", data)
//     .then((response) => {
//         // if (response.data.success){
//         //     console.log("success");
//         // }else {
//         //     console.log("new item");
//         // }
//     })
//     .catch((error) => {
//         console.log(error);
//       });
//     navigate('/Home')

//   }


  
  return (
    <section>
      <h1>  All drivers  on the store</h1>
      <form class='login-form' >
        <div class="flex-row">
            <label class="lf--label" for="Location">
                <svg x="0px" y="0px" width="15px" height="5px">
                <g>
                    <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z" />
                </g>
                </svg>
            </label>
            <select value={location}
                        onChange={(e)=> setLocation(e.target.value)}>
                        <option value="">None</option>
                        <option value="Kandy">Kandy</option>
                        <option value="Colombo">Colombo</option>
                        <option value="Negambo">Negambo</option>
                        <option value="Galle">Galle</option>
                        <option value="Matara">Matara</option>
                        <option value="Jaffna">Jaffna</option>
                        <option value="Trincomalee">Trincomalee</option>

                    </select>
            </div>
            
            {/* <input class='lf--submit' type='submit' value='Submit'/> */}
            
        
        </form>
        <h1> {location}</h1>
 
      <SeeDriversTraversal drivers = {drivers} filter = {location}></SeeDriversTraversal>
    </section>
  )
}

export default SeeDrivers;