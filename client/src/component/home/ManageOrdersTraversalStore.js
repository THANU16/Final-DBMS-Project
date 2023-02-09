import axios from "axios";
import { useState } from "react";


// import {Link} from 'react-router-dom';
const ManageOrdersTraversalStore= (props) => {
    const orders=props.orders;
    const userID = props.userID;
    const type = props.type;
    let [orderID, setOrderID] = useState('') 
    const[status,setStatus]=useState('');
    const data = {userID: userID,type:type, orderID: orderID, status:status };



   
    const handleSubmit = (e) => {
        e.preventDefault();
      

        axios.post('http://localhost:4000/home/manageUpdateStatus',data )
        .then(res => {
          console.log(res.data.message);
        })
        .catch(err => {
          console.error(err);
        });
    }



    // back end sql query 
    // select name from item where itemID in( select itemID from orders inner join ordered_items where itemID="IT001");
    return (  
        <div className="item-preview" >
        {/* <h2>{maxTrasferWeight}</h2> */}
        {orders.map((order)=>(
        <div className="createnew" key={order.id}>
        
            <h2>Order Details:</h2>
            <h2>{order.name}</h2>
            <p>The stocks ordered is {order.quantity}</p>
            <p>Payment amount is{order.totalPrice}</p>
            <p>Delivery Address is {order.houseNumber} , {order.streetName}, {order.town},{order.district}</p>
            <p>Order Status is {order.orderstatus}</p>
            <p>Set the order Status</p>
            <form class='login-form' onSubmit={handleSubmit} >
            <select value={status}
                    onChange={(e)=> setStatus(e.target.value)}>
                      <option value="None">None</option>
                      {/* <option value="Proccessing">Proccessing</option>
                      <option value="Cancel">Cancel</option>
                      <option value="Shipped">Shipped</option> */}
                       <option value="Cancel">Cancel</option>
                      <option value="Recived to District">Recived to District</option>
                </select>
                
                {/* <input class='lf--submit' type='submit' value='Fix Value'/> */}
                <button onClick={(e)=> setOrderID(order.orderID)}>Update status</button>
            </form>
           
            
        </div>
    ))}
    </div>

    );
}
 
export default ManageOrdersTraversalStore;