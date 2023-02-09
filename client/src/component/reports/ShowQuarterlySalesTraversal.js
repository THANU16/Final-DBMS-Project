// import {Link} from 'react-router-dom';


const ShowQuarterlySalesTraversal= (props) => {
    const {orders}=props;
    // back end sql query 
    // select name from item where itemID in( select itemID from orders inner join ordered_items where itemID="IT001");
    return ( 
       
        // <div >
        //     <table id="orders">
        //         <thead>
        //             <tr>
        //             <th>Customer Name</th>
        //             <th>Item</th>
        //             <th >quantity</th>
        //             <th >totalPrice</th>
        //             <th >District</th>
        //             <th >Ordered Date</th>
        //             <th >Order Status</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //     {orders.map((order)=>(
        //         <div  key={order.id}>
                    
        //                 <tr>
        //                 <td>{order.customerName}</td>
        //                 <td>{order.name}</td>
        //                 <td>{order.quantity}</td>
        //                 <td>{order.totalPrice}</td>
        //                 <td>{order.district}</td>
        //                 <td>{order.ordereddate}</td>
        //                 <td>{order.orderstatus}</td>
                        
        //                 </tr>
                
        //         </div>
        //     ))}
        //     </tbody>
        //     </table>
        // </div>







        <div className="order-list">

{/* <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> */}


        {orders.map((order)=>(
            <div className="createnew" key={order.id}>
                
                <h2>{order.customerName}</h2>
                <p>Ordered Item : {order.name}</p>
                <p>The stocks ordered is {order.quantity}</p>
                <p>Payment amount is Rs.{order.totalPrice}</p>
                {/* <p>Ordered Date {order.ordereddate}</p> */}
                <p>Delivery Address is:</p>
                <p>{order.houseNumber},</p>
                <p>{order.streetName},</p>
                <p>{order.town},</p>
                <p>{order.district}</p>
                <h5>OrderStatus is {order.orderstatus}</h5>   
            </div>
        ))}
        </div>
    );
}
 
export default ShowQuarterlySalesTraversal;