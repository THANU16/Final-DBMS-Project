import axios from "axios";
import { useState } from "react";


const ManageOrdersTraversalDriver= (props) => {
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


    return (  
        <div className="item-preview" >
            {orders.map((order)=>(
                <div className="createnew" key={order.id}>
            
                    <h2>The Order Details is:</h2>
                    <h2>Name: {order.customerName}</h2>
                    <p>Ordered Item : {order.name}</p>
                    <p>The stocks ordered is {order.quantity}</p>
                    <p>Payment amount is Rs.{order.totalPrice}</p>
                    <p>Ordered Date {order.ordereddate}</p>
                    <p>Delivery Address is:</p>
                    <p>{order.houseNumber},</p>
                    <p>{order.streetName},</p>
                    <p>{order.town},</p>
                    <p>{order.district}</p>
                    <br></br>
                    <p>Order Status is {order.orderstatus}</p>
                    <p>Set the order Status</p>
                    <form class='login-form' onSubmit={handleSubmit} >
                        <select value={status}
                            onChange={(e)=> setStatus(e.target.value)}>
                            <option value="None">None</option>
                            <option value="Returned">Returned</option>
                            <option value="Delivered and Payed">Delivered and Payed</option>
                        </select>
                    
                    {/* <input class='lf--submit' type='submit' value='Fix Value'/> */}
                        <button onClick={(e)=> setOrderID(order.orderID)}>Update status</button>
                    </form>
            
                
                </div>
            ))}
        </div>

    );
    
}
 
export default ManageOrdersTraversalDriver;