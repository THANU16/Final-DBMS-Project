import { useState } from "react";
import { useParams } from "react-router-dom";
import Reports from "./Reports";

function MainReports() {
    const {userID, type} = useParams();
    const [orders,setOrders]=useState([]);
    console.log(userID,type);

    const data = {userID,type};
    // console.log(data);
      
    // console.log(userID,type);
  
    
  
  
    console.log("1",orders);
    return (
      <div>
        <h1> Hello! You Can See The Reports Here!</h1>

        <nav>
          <Reports userID={userID} type = {type}/>
          </nav>
         
      </div>
    )
  }
  
  export default MainReports