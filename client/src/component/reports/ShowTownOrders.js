import React from 'react'

import { useState} from "react";
import axios  from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowQuarterlySalesTraversal from './ShowQuarterlySalesTraversal';
import Reports from './Reports';


function ShowTownOrders() {


  const {userID, type} = useParams();
  const [orders,setOrders]=useState([]);
  const [town, setTown] = useState("");

  const data = {userID,type,town};
 



  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data);

      axios.post('http://localhost:4000/home/reports/showTownOrders',data )
      
      .then(res => {
       setOrders(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    }



  return (
    <div>
      <nav>
        
          <Reports userID={userID} type = {type}/>
          </nav>
        <h2> Show Main City Orders</h2>
        <form class='login-form' onSubmit={handleSubmit} >
            <label> select the Town </label>
            <select required value={town}
                onChange={(e)=> setTown(e.target.value)}>
                    <option value="">None</option>       
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kokuvil">Kokuvil</option>
                    <option value="kondavil">kondavil</option>
                    <option value="kks">kks</option>
                    <option value="kopai">kopai</option>
                    <option value="Neerveli">Neerveli</option>
                    <option value="Parithurai">Parithurai</option>
                    <option value="Dehiwala">Dehiwala</option>
                    <option value="Moratuwa">Moratuwa</option>
                    <option value="Ratmalana">Ratmalana</option>
                    <option value="Bambalapitiya">Bambalapitiya</option>
                    <option value="Wellawatta">Wellawatta</option>
                    <option value="Ambalapitiya">Ambalapitiya</option>
                    <option value="Bentota">Bentota</option>

            </select>
            <input class='lf--submit' type='submit' value='Show Orders Report '/>
        </form>
        <h2> Show Main City Orders</h2>
      <ShowQuarterlySalesTraversal orders = {orders}></ShowQuarterlySalesTraversal>
    </div>
  )
}

export default ShowTownOrders;