import React from 'react'

import { useState} from "react";
import axios  from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowQuarterlySalesTraversal from './ShowQuarterlySalesTraversal';
import Reports from './Reports';


function ShowQuarterlySales() {


  const {userID, type} = useParams();
  const [orders,setOrders]=useState([]);
  const [date, setDate] = useState("");

  const data = {userID,type,date};
 



  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data);

      axios.post('http://localhost:4000/home/reports/showQuarterlySales',data )
      
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
        <h2> Show Yearly Sales </h2>
        <form class='login-form' onSubmit={handleSubmit} >
            <label> select the year </label>
            <select required value={date}
                onChange={(e)=> setDate(e.target.value)}>
                    <option value="" >None</option>
                    <option  value="%2020%">2020 </option>
                    <option  value="%2021%">2021 </option>
                    <option  value="%2022%">2022 </option>
                    <option  value="%2023%">2023 </option>
                    <option  value="%2024%">2024 </option>
                    <option  value="%2025%">2025 </option>
                    <option  value="%2026%">2026 </option>
                    <option  value="%2027%">2027 </option>
            </select>
            <input class='lf--submit' type='submit' value='Show Orders Report '/>
        </form>
      <ShowQuarterlySalesTraversal orders = {orders}></ShowQuarterlySalesTraversal>
    </div>
  )
}

export default ShowQuarterlySales