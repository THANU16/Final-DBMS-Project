import React from 'react'

import { useState} from "react";
import axios  from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowQuarterlySalesTraversal from './ShowQuarterlySalesTraversal';
import Reports from './Reports';

function ShowRouteOrders() {


  const {userID, type} = useParams();
  const [orders,setOrders]=useState([]);
  const [routeID, setRouteID] = useState("");

  const data = {userID,type,routeID};
 



  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data);

      axios.post('http://localhost:4000/home/reports/showRouteOrders',data )
      
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
        <h2> Show Route Orders</h2>
        <form class='login-form' onSubmit={handleSubmit} >
            <label> select the Route </label>
            <select required value={routeID}
                onChange={(e)=> setRouteID(e.target.value)}>
                    <option value="">None</option>       
                    <option value="200000">KKS Road-Jaffna</option>
                    <option value="200001">Parithithurai Road-Jaffna</option>
                    <option value="200015">A9 road jaffna-Jaffna</option>
                    <option value="200002">Galle road-Colombo</option>
                    <option value="200003">marine drive-Colombo</option>
                    <option value="200004">beach road-Colombo</option>
                    <option value="200005">Negambo road-Negambo</option>
                    <option value="200006">1st cross road-Negambo</option>
                    <option value="200007">Galle town road-Galle</option>
                    <option value="200008">Viharamahadevi road-Galle</option>
                    <option value="200009">matara main road-Matara</option>
                    <option value="200010">beach road-Matara</option>
                    <option value="200011">temple road-Trincomalle</option>
                    <option value="200012">trinco main road-Trincomalle</option>
                    <option value="200014">park road-Kandy</option>
                    <option value="200013">2nd cross road-Kandy</option>
                    

            </select>
            <input class='lf--submit' type='submit' value='Show Orders Report '/>
        </form>
        <h2> Show Route Orders</h2>
      <ShowQuarterlySalesTraversal orders = {orders}></ShowQuarterlySalesTraversal>
    </div>
  )
}

export default ShowRouteOrders;